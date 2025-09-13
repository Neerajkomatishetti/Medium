import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(
    '/*',
    cors({
      // `c` is a `Context` object
      origin: (origin, c) => {
        return origin.endsWith('.app')
          ? origin
          : 'http://localhost:5173'
      },
    })
  )

app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);

export default app;

