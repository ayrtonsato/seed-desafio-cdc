import { z } from 'zod';

export const createAuthorSchema = z
  .object({
    name: z.string().trim().min(1),
    email: z.string().trim().email().min(1),
    description: z.string().max(400).trim().min(1),
  })
  .required();
