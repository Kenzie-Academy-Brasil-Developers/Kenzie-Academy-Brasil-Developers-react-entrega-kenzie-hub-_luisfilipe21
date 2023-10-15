import { z } from "zod";

export const registerFormSchema = z.object({
    name: z
        .string()
        .min(1, "O nome é obrigatório."),
    email: z
        .string()
        .email("Forneça um e-mail válido")
        .min(1, "O e-mail é obrigatório."),
    password: z
        .string()
        .min(8, "Mínimo de 8 caractéres.")
        .regex(/[a-z]+/, "É necessário pelo menos uma letra minúscula")
        .regex(/[A-z]+/, "É necessário pelo menos uma letra Maiúscula")
        .regex(/[0-9]+/, "É necessário pelo menos um número na senha"),
    confirmPassword: z
        .string()
        .min(1, "Confirme sua senha."),
    bio: z
        .string()
        .min(1, "O nome é obrigatório."),
    contact: z
        .string()
        .min(1, "O nome é obrigatório."),
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"]
})