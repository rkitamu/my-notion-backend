import { Hono } from 'hono'

const app = new Hono()

app.get('/health', async (c) => {
  return await c.text('ok')
})

export default app
