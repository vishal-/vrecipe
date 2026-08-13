export interface Dish {
  id: string;
  name: string;
  description: string;
  image: string;
  yt_url: string;
  prepTime: string;
  cookTime: string;
  cuisine: string;
  mealType: string[];
  category: string;
  servings: number;
  calories: number;
  ingredients: string[];
  instructions: string[];
  flavorProfile: string[];
  variations: string[];
  createdAt?: string;
  updatedAt?: string;
}

export type CreateDishInput = Omit<Dish, 'id' | 'createdAt' | 'updatedAt'>;

export interface DishRow {
  id: string;
  name: string;
  description: string;
  image: string;
  yt_url: string;
  prep_time: string;
  cook_time: string;
  cuisine: string;
  meal_type: string; // JSON string
  category: string;
  servings: number;
  calories: number;
  ingredients: string; // JSON string
  instructions: string; // JSON string
  flavor_profile: string; // JSON string
  variations: string; // JSON string
  created_at?: string;
  updated_at?: string;
}

declare global {
  interface D1Database {
    prepare(query: string): D1PreparedStatement;
  }
  interface D1PreparedStatement {
    bind(...values: any[]): D1PreparedStatement;
    first<T = unknown>(colName?: string): Promise<T | null>;
    all<T = unknown>(): Promise<{ results?: T[] }>;
    run(): Promise<{ meta?: { changes?: number } }>;
  }
}

export function parseDishRow(row: DishRow): Dish {
  return {
    id: row.id,
    name: row.name || '',
    description: row.description || '',
    image: row.image || '',
    yt_url: row.yt_url || '',
    prepTime: row.prep_time || '',
    cookTime: row.cook_time || '',
    cuisine: row.cuisine || '',
    mealType: safeParseJson<string[]>(row.meal_type, []),
    category: row.category || '',
    servings: Number(row.servings) || 1,
    calories: Number(row.calories) || 0,
    ingredients: safeParseJson<string[]>(row.ingredients, []),
    instructions: safeParseJson<string[]>(row.instructions, []),
    flavorProfile: safeParseJson<string[]>(row.flavor_profile, []),
    variations: safeParseJson<string[]>(row.variations, []),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function serializeDish(dish: Partial<Dish>): Partial<DishRow> {
  const row: Partial<DishRow> = {};
  if (dish.id !== undefined) row.id = dish.id;
  if (dish.name !== undefined) row.name = dish.name;
  if (dish.description !== undefined) row.description = dish.description;
  if (dish.image !== undefined) row.image = dish.image;
  if (dish.yt_url !== undefined) row.yt_url = dish.yt_url;
  if (dish.prepTime !== undefined) row.prep_time = dish.prepTime;
  if (dish.cookTime !== undefined) row.cook_time = dish.cookTime;
  if (dish.cuisine !== undefined) row.cuisine = dish.cuisine;
  if (dish.mealType !== undefined) row.meal_type = JSON.stringify(dish.mealType);
  if (dish.category !== undefined) row.category = dish.category;
  if (dish.servings !== undefined) row.servings = dish.servings;
  if (dish.calories !== undefined) row.calories = dish.calories;
  if (dish.ingredients !== undefined) row.ingredients = JSON.stringify(dish.ingredients);
  if (dish.instructions !== undefined) row.instructions = JSON.stringify(dish.instructions);
  if (dish.flavorProfile !== undefined) row.flavor_profile = JSON.stringify(dish.flavorProfile);
  if (dish.variations !== undefined) row.variations = JSON.stringify(dish.variations);
  return row;
}

function safeParseJson<T>(jsonStr: string, fallback: T): T {
  if (!jsonStr) return fallback;
  try {
    return JSON.parse(jsonStr) as T;
  } catch (e) {
    return fallback;
  }
}
