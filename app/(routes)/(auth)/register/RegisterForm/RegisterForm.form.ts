import { z } from "zod";

export const formSchema = z.object({
    email: z.string().min(2 , {
        message: "Email muy corto",}
    ),
    password: z.string().min(2 , {
        message: "Contraseña muy corta",}
    ),
    repeatPassword: z.string(),
    }).refine((data) => data.password === data.repeatPassword, {
        message: "Las contraseñas no coinciden",
        path: ["repeatPassword"],
    });