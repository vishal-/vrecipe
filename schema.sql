-- Cloudflare D1 Database Schema for vrecipe
DROP TABLE IF EXISTS dishes;

CREATE TABLE IF NOT EXISTS dishes (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image TEXT,
  yt_url TEXT,
  prep_time TEXT,
  cook_time TEXT,
  cuisine TEXT,
  meal_type TEXT, -- JSON Array string
  category TEXT,
  servings INTEGER,
  calories INTEGER,
  ingredients TEXT, -- JSON Array string
  instructions TEXT, -- JSON Array string
  flavor_profile TEXT, -- JSON Array string
  variations TEXT, -- JSON Array string
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
