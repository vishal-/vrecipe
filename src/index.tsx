import { Hono } from 'hono'
import { renderer } from './renderer'
import api from './api/dishes'
import { getAllDishes, getDishById } from './db/dishDb'
import { DishesTablePage } from './views/dishesTablePage'
import { DishFormPage } from './views/dishFormPage'

type Bindings = {
  DB?: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>()

// Use HTML renderer middleware
app.use(renderer)

// API routes mount
app.route('/api/dishes', api)

// Root redirect to /dishes
app.get('/', (c) => {
  return c.redirect('/dishes')
})

// GET /dishes - Main Table Management Page
app.get('/dishes', async (c) => {
  const db = c.env?.DB;
  const dishes = await getAllDishes(db);

  const categories = Array.from(new Set(dishes.map(d => d.category).filter(Boolean)));
  const cuisines = Array.from(new Set(dishes.map(d => d.cuisine).filter(Boolean)));

  return c.render(
    <DishesTablePage categories={categories} cuisines={cuisines} />,
    { title: 'Dish Management' }
  )
})

// GET /dishes/new - Add Dish Page
app.get('/dishes/new', (c) => {
  return c.render(
    <DishFormPage isEdit={false} />,
    { title: 'Add New Dish' }
  )
})

// GET /dishes/edit/:id - Edit Dish Page
app.get('/dishes/edit/:id', async (c) => {
  const id = c.req.param('id');
  const db = c.env?.DB;
  const dish = await getDishById(id, db);

  if (!dish) {
    return c.text('Dish not found', 404);
  }

  return c.render(
    <DishFormPage dish={dish} isEdit={true} />,
    { title: `Edit ${dish.name}` }
  )
})

export default app
