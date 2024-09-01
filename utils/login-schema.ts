import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Invalid Email Address' }),
  password: z.string().min(8, { message: 'Password is too short' }),
})
