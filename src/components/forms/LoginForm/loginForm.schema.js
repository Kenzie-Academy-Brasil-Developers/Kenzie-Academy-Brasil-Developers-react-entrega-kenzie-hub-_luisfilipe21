import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().min(1, "Este é um campo obrigatório"),
    password: z.string().min(1, "Este é um campo obrigatório"),
})