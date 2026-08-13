import { Dish, DishRow, parseDishRow, serializeDish } from '../types/dish';
import { INITIAL_DISHES } from '../data/seedDishes';

// In-memory cache fallback for development when D1 is initializing or in dev mode
let memoryStore: Dish[] = [...INITIAL_DISHES];

export async function getAllDishes(db?: D1Database): Promise<Dish[]> {
  if (db) {
    try {
      // Check if table exists and has data
      const result = await db.prepare('SELECT * FROM dishes ORDER BY name ASC').all<DishRow>();
      if (result.results && result.results.length > 0) {
        return result.results.map(parseDishRow);
      }
      // If table is empty, seed it
      await seedD1Database(db);
      const reFetch = await db.prepare('SELECT * FROM dishes ORDER BY name ASC').all<DishRow>();
      if (reFetch.results && reFetch.results.length > 0) {
        return reFetch.results.map(parseDishRow);
      }
    } catch (err) {
      console.warn('D1 Database query fallback to memory store:', err);
    }
  }
  return memoryStore;
}

export async function getDishById(id: string, db?: D1Database): Promise<Dish | null> {
  if (db) {
    try {
      const row = await db.prepare('SELECT * FROM dishes WHERE id = ?').bind(id).first<DishRow>();
      if (row) return parseDishRow(row);
    } catch (err) {
      console.warn('D1 query by id error, checking memory:', err);
    }
  }
  return memoryStore.find(d => d.id === id) || null;
}

export async function createDish(dishData: Omit<Dish, 'id'>, db?: D1Database): Promise<Dish> {
  const newDish: Dish = {
    ...dishData,
    id: `dish-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  memoryStore.unshift(newDish);

  if (db) {
    try {
      const serialized = serializeDish(newDish);
      await db.prepare(`
        INSERT INTO dishes (id, name, description, image, yt_url, prep_time, cook_time, cuisine, meal_type, category, servings, calories, ingredients, instructions, flavor_profile, variations, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        newDish.id,
        serialized.name || '',
        serialized.description || '',
        serialized.image || '',
        serialized.yt_url || '',
        serialized.prep_time || '',
        serialized.cook_time || '',
        serialized.cuisine || '',
        serialized.meal_type || '[]',
        serialized.category || '',
        serialized.servings || 1,
        serialized.calories || 0,
        serialized.ingredients || '[]',
        serialized.instructions || '[]',
        serialized.flavor_profile || '[]',
        serialized.variations || '[]',
        newDish.createdAt,
        newDish.updatedAt
      ).run();
    } catch (err) {
      console.error('D1 createDish error:', err);
    }
  }

  return newDish;
}

export async function updateDish(id: string, dishData: Partial<Dish>, db?: D1Database): Promise<Dish | null> {
  const existingIndex = memoryStore.findIndex(d => d.id === id);
  if (existingIndex === -1 && !db) return null;

  const current = existingIndex !== -1 ? memoryStore[existingIndex] : await getDishById(id, db);
  if (!current) return null;

  const updatedDish: Dish = {
    ...current,
    ...dishData,
    id, // preserve ID
    updatedAt: new Date().toISOString(),
  };

  if (existingIndex !== -1) {
    memoryStore[existingIndex] = updatedDish;
  } else {
    memoryStore.push(updatedDish);
  }

  if (db) {
    try {
      const serialized = serializeDish(updatedDish);
      await db.prepare(`
        UPDATE dishes SET
          name = ?, description = ?, image = ?, yt_url = ?, prep_time = ?, cook_time = ?,
          cuisine = ?, meal_type = ?, category = ?, servings = ?, calories = ?,
          ingredients = ?, instructions = ?, flavor_profile = ?, variations = ?, updated_at = ?
        WHERE id = ?
      `).bind(
        serialized.name,
        serialized.description,
        serialized.image,
        serialized.yt_url,
        serialized.prep_time,
        serialized.cook_time,
        serialized.cuisine,
        serialized.meal_type,
        serialized.category,
        serialized.servings,
        serialized.calories,
        serialized.ingredients,
        serialized.instructions,
        serialized.flavor_profile,
        serialized.variations,
        updatedDish.updatedAt,
        id
      ).run();
    } catch (err) {
      console.error('D1 updateDish error:', err);
    }
  }

  return updatedDish;
}

export async function deleteDish(id: string, db?: D1Database): Promise<boolean> {
  const initialLen = memoryStore.length;
  memoryStore = memoryStore.filter(d => d.id !== id);
  const deletedInMemory = memoryStore.length < initialLen;

  if (db) {
    try {
      const result = await db.prepare('DELETE FROM dishes WHERE id = ?').bind(id).run();
      return (result.meta?.changes ?? 0) > 0 || deletedInMemory;
    } catch (err) {
      console.error('D1 deleteDish error:', err);
    }
  }

  return deletedInMemory;
}

export async function seedD1Database(db: D1Database): Promise<number> {
  let inserted = 0;
  try {
    // Create table if missing
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS dishes (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        image TEXT,
        yt_url TEXT,
        prep_time TEXT,
        cook_time TEXT,
        cuisine TEXT,
        meal_type TEXT,
        category TEXT,
        servings INTEGER,
        calories INTEGER,
        ingredients TEXT,
        instructions TEXT,
        flavor_profile TEXT,
        variations TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `).run();

    for (const dish of INITIAL_DISHES) {
      const serialized = serializeDish(dish);
      await db.prepare(`
        INSERT OR REPLACE INTO dishes (id, name, description, image, yt_url, prep_time, cook_time, cuisine, meal_type, category, servings, calories, ingredients, instructions, flavor_profile, variations, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        dish.id,
        serialized.name || '',
        serialized.description || '',
        serialized.image || '',
        serialized.yt_url || '',
        serialized.prep_time || '',
        serialized.cook_time || '',
        serialized.cuisine || '',
        serialized.meal_type || '[]',
        serialized.category || '',
        serialized.servings || 1,
        serialized.calories || 0,
        serialized.ingredients || '[]',
        serialized.instructions || '[]',
        serialized.flavor_profile || '[]',
        serialized.variations || '[]',
        dish.createdAt || new Date().toISOString(),
        dish.updatedAt || new Date().toISOString()
      ).run();
      inserted++;
    }
  } catch (err) {
    console.error('Error seeding D1:', err);
  }
  return inserted;
}
