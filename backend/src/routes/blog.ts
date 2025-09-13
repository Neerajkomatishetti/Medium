import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { PrismaClient } from '../generated/prisma/edge';
import { verify } from 'hono/jwt';
import { postInput, updateInput } from '@neerajkn123/common'

export const blogRouter = new Hono<{
    Bindings:{
        ACC_DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>();

blogRouter.use('/*',async (c, next) =>{
        const AuthHeader = c.req.header('Authorization') || "";
        
        try{
            console.log(AuthHeader);
            console.log("hi there");
            const user  = await verify(AuthHeader, c.env.JWT_SECRET);
            console.log("hi there 2");
            if(user){
            const id = user.id as string;
            console.log(id)
            c.set("userId", id);
            return await next();

            }else{
                return c.json({
                    message:"Not Logged In"
                }, 403)
            }
        }catch(e){
            return c.json({
                message:"Error in Middlewares!"
            }, 403)
        }
        
    })

blogRouter.post('/',async (c)=>{
    const Client =new PrismaClient({
    datasourceUrl:c.env.ACC_DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const authorId = c.get('userId');

    const { success } = postInput.safeParse(body);

    if(success){
        const Post = await Client.post.create({
            data: {
                title:body.title,
                content:body.content,
                authorId: authorId
            }
        })
        
        return c.json({
            message:"success",
            id:Post.id
        },200)
    }else{
        return c.json({
            message:"invalid inputs"
        }, 400)
    }

})

blogRouter.put('/',async (c)=>{
    const Client =new PrismaClient({
        datasourceUrl:c.env.ACC_DATABASE_URL
        }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = updateInput.safeParse(body);

    if(success){
        await Client.post.update({
            where:{
                id:body.id
            },
            data:{
                title:body.title,
                content:body.content
            }
        })
    
        return c.json({
            id:body.id
        })
    }else{
        return c.json({
            message:"invalid inputs"
        }, 400)
    }
})

blogRouter.get('/bulk',async (c)=>{
    const Client =new PrismaClient({
        datasourceUrl:c.env.ACC_DATABASE_URL
        }).$extends(withAccelerate())
    
    try{
        const Posts = await Client.post.findMany({});
        console.log(Posts)
        return c.json({Posts})


    }catch(e){
        return c.json({message:"error while fetching"}, 411)
    }
})

blogRouter.get('/userStories', async (c)=>{
    const Client =new PrismaClient({
        datasourceUrl:c.env.ACC_DATABASE_URL
        }).$extends(withAccelerate())
    
    try{
        const author_id = c.get('userId');
        if (!author_id) {
          return c.json({ message: 'Unauthorized' }, 401)
        }
        console.log(author_id)
        const Posts = await Client.post.findMany({
            where:{
                authorId:author_id

            }
        })

        return c.json({Posts})

    }catch(e){
        c.json({message:"error while fetching"}, 411)
    }
})


blogRouter.get('/:id', async (c)=>{
    const Client =new PrismaClient({
        datasourceUrl:c.env.ACC_DATABASE_URL
        }).$extends(withAccelerate())
    
    try{
        const post_id = c.req.param("id")
        const Post = await Client.post.findFirst({
            where:{
                id:post_id
            }
        })

        return c.json({Post})

    }catch(e){
        c.json({message:"error while updating"}, 411)
    }
})


