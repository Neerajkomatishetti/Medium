import { Hono } from 'hono';

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWt_SECRET:string
    }
}>();

blogRouter.post('/', (c)=>{
    return c.text("hi there")
})

blogRouter.put('/', (c)=>{
    return c.text("hi there")
})

blogRouter.get('/:id', (c)=>{
    return c.text("hi there")
})

blogRouter.get('/bulk', (c)=>{
    return c.text("hi there")
})