import { Hono } from 'hono';
import { PrismaClient } from '../generated/prisma/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
import {signinInput} from '@neerajkn123/common';
import {signupInput} from '@neerajkn123/common';

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
    
    const Zodresult = signupInput.safeParse(body);

    if(Zodresult.success){
        try{

            const usr = await Client.user.findFirst({
                where:{
                    email:body.email,
                }
            })
        
            if(usr){
                return c.json({
                    message:"user already exists"
                });
            }


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

    }else{
        return c.json({
            errors:Zodresult.error.issues[0].message
        }, 400)
    }
   
})

userRouter.post('/signin', async (c) =>{
    const Client =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    const body = await c.req.json();
    const Zodresult = signinInput.safeParse(body);

    if(Zodresult.success){
        try{
            const user = await Client.user.findFirst({
                where:{
                    email:body.email,
                    password:body.password
                }
            })
        
            if(user){
                const token = await sign({ id:user.id }, c.env.JWT_SECRET);
                c.status(200);
                return c.json({ token:token })
        
            }else{
                c.status(400);
                return c.json({
                    message:"wrong email or password "
                })
            }
        
            }catch(e){
                c.status(411)
                return c.json({
                    message:"error while signing up"
                })
            }

    }else{
        c.status(400);
        return c.json({
            message:Zodresult.error.issues[0].message
        })
    }
   
})