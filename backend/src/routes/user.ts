import { Hono } from 'hono';

export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWt_SECRET:string
    }
}>();