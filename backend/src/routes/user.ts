import { Hono } from 'hono';
import { PrismaClient } from '../generated/prisma/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';

export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>();


userRouter.post('/signup', async (c) =>{
    const Client =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    const body = await c.req.json();

    try{
    const user = await Client.user.create({
        data:{
            email:body.email,
            password:body.password,
            name:body.name
        }
    })

    const token = await sign({
        id:user.id
    }, c.env.JWT_SECRET);
    return c.json({
        token:token
    },200)

    }catch(e){
        return c.json({
            message:"error while signing up",
            error:e
        }, 400)
    }
})

userRouter.post('/signin', async (c) =>{
    const Client =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    const body = await c.req.json();

    try{
    const user = await Client.user.findFirst({
        where:{
            email:body.email,
            password:body.password,
            name:body.name
        }
    })

    if(user){
        const token = await sign({ id:user.id }, c.env.JWT_SECRET);
        return c.json({ token:token },200)

    }else{
        return c.json({
            message:"user doesnot exists"
        }, 403)
    }

    }catch(e){
        return c.json({
            message:"error while signing up"
        }, 411)
    }
})