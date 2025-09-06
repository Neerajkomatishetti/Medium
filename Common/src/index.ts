import zod from 'zod';

export const signupInput = zod.object({
    email:zod.email(),
    password:zod.string().min(6),
    name:zod.string().optional()
})
export const signinInput = zod.object({
    email:zod.email(),
    password:zod.string().min(6),
    name:zod.string().optional()
})
export const postInput = zod.object({
    title:zod.string(),
    content:zod.string()
})
export const updateInput = zod.object({
    id:zod.uuid(),
    title:zod.string(),
    content:zod.string()
})

export type SignupInput = zod.infer<typeof signupInput>
export type SigninInput = zod.infer<typeof signinInput>
export type updateInput = zod.infer<typeof updateInput>
export type postInput = zod.infer<typeof postInput>