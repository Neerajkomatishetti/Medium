import zod from 'zod';
export declare const signupInput: zod.ZodObject<{
    email: zod.ZodEmail;
    password: zod.ZodString;
    name: zod.ZodOptional<zod.ZodString>;
}, zod.core.$strip>;
export declare const signinInput: zod.ZodObject<{
    email: zod.ZodEmail;
    password: zod.ZodString;
    name: zod.ZodOptional<zod.ZodString>;
}, zod.core.$strip>;
export declare const postInput: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
}, zod.core.$strip>;
export declare const updateInput: zod.ZodObject<{
    id: zod.ZodUUID;
    title: zod.ZodString;
    content: zod.ZodString;
}, zod.core.$strip>;
export type SignupInput = zod.infer<typeof signupInput>;
export type SigninInput = zod.infer<typeof signinInput>;
export type updateInput = zod.infer<typeof updateInput>;
export type postInput = zod.infer<typeof postInput>;
