import {z} from "zod" 

export const usernameValidation = z
       .string()
       .min(2 , "Username must contain two characters")
       .max(20 , "Username must less than 20 characters")
       .regex( /^[a-zA-Z0-9_]+$/, "Username must not contain special characters")
       

export const signUpSchema = z.object({
       username : usernameValidation ,
       email : z.string().email({message : "Invalid Email"}),
       password  : z.string().min(6 , {message  : "Password must contain 6 characters"})
})