-- Migration: Create requests table
CREATE TABLE IF NOT EXISTS requests (
  id TEXT PRIMARY KEY,
  request_method TEXT NOT NULL,
  request_time TEXT NOT NULL
);
