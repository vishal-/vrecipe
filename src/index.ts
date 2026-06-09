import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/d1'
import { requests } from './schema'
import { eq } from 'drizzle-orm'
import { v4 as uuidv4 } from 'uuid'

type Env = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Env }>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Handle GET, POST, PUT, DELETE on /check
const handleCheck = async (c: any) => {
  const db = drizzle(c.env.DB)
  const method = c.req.method
  const timestamp = new Date().toISOString()
  const id = uuidv4()

  // Insert the request record
  await db.insert(requests).values({
    id,
    request_method: method,
    request_time: timestamp,
  })

  // Return the inserted record
  return c.json({
    id,
    request_method: method,
    request_time: timestamp,
  })
}

app.get('/check', handleCheck)
app.post('/check', handleCheck)
app.put('/check', handleCheck)
app.delete('/check', handleCheck)

export default app
