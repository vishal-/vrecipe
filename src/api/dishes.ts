import { Hono } from 'hono';
import { getAllDishes, getDishById, createDish, updateDish, deleteDish, seedD1Database } from '../db/dishDb';
import { CreateDishInput } from '../types/dish';

type Bindings = {
  DB?: D1Database;
};

const api = new Hono<{ Bindings: Bindings }>();

// GET /api/dishes
api.get('/', async (c) => {
  const db = c.env?.DB;
  const dishes = await getAllDishes(db);
  
  const search = c.req.query('search')?.toLowerCase();
  const category = c.req.query('category');
  const cuisine = c.req.query('cuisine');

  let filtered = dishes;

  if (category && category !== 'all') {
    filtered = filtered.filter(d => d.category.toLowerCase() === category.toLowerCase());
  }

  if (cuisine && cuisine !== 'all') {
    filtered = filtered.filter(d => d.cuisine.toLowerCase() === cuisine.toLowerCase());
  }

  if (search) {
    filtered = filtered.filter(d => 
      d.name.toLowerCase().includes(search) ||
      d.description.toLowerCase().includes(search) ||
      d.cuisine.toLowerCase().includes(search) ||
      d.ingredients.some(ing => ing.toLowerCase().includes(search))
    );
  }

  return c.json({
    success: true,
    total: filtered.length,
    data: filtered,
  });
});

// GET /api/dishes/:id
api.get('/:id', async (c) => {
  const id = c.req.param('id');
  const db = c.env?.DB;
  const dish = await getDishById(id, db);

  if (!dish) {
    return c.json({ success: false, error: 'Dish not found' }, 404);
  }

  return c.json({ success: true, data: dish });
});

// POST /api/dishes
api.post('/', async (c) => {
  try {
    const body = await c.req.json<CreateDishInput>();
    if (!body.name) {
      return c.json({ success: false, error: 'Dish name is required' }, 400);
    }
    const db = c.env?.DB;
    const newDish = await createDish(body, db);
    return c.json({ success: true, data: newDish }, 201);
  } catch (err: any) {
    return c.json({ success: false, error: err.message || 'Failed to create dish' }, 500);
  }
});

// PUT /api/dishes/:id
api.put('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const body = await c.req.json<Partial<CreateDishInput>>();
    const db = c.env?.DB;
    
    const updated = await updateDish(id, body, db);
    if (!updated) {
      return c.json({ success: false, error: 'Dish not found' }, 404);
    }
    return c.json({ success: true, data: updated });
  } catch (err: any) {
    return c.json({ success: false, error: err.message || 'Failed to update dish' }, 500);
  }
});

// DELETE /api/dishes/:id
api.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const db = c.env?.DB;
    const success = await deleteDish(id, db);
    if (!success) {
      return c.json({ success: false, error: 'Dish not found' }, 404);
    }
    return c.json({ success: true, message: 'Dish deleted successfully' });
  } catch (err: any) {
    return c.json({ success: false, error: err.message || 'Failed to delete dish' }, 500);
  }
});

// POST /api/dishes/seed
api.post('/seed', async (c) => {
  const db = c.env?.DB;
  if (!db) {
    return c.json({ success: true, message: 'Seeded in-memory store (D1 binding not available)' });
  }
  const count = await seedD1Database(db);
  return c.json({ success: true, count, message: `Successfully seeded ${count} dishes to Cloudflare D1 database!` });
});

export default api;
