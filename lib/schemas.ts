import { z } from "zod";

export const formSchemaSignIn = z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export type FormSchemaSignIn = z.infer<typeof formSchemaSignIn>;

export const formSchemaRegister = z.object({
    name: z.string({ required_error: "Campo obrigatório" }).min(4),
    birthDate: z.string({ required_error: "Campo obrigatório" }),
    sex: z.enum(["M", "F"], { required_error: "Campo obrigatório" }),
    hasChild: z.enum(["yes", "no"], { required_error: "Campo obrigatório" }),
    isMarried: z.enum(["yes", "no"], { required_error: "Campo obrigatório" }),
    isTeacher: z.enum(["yes", "no"], { required_error: "Campo obrigatório" }),
});

export type FormSchemaRegister = z.infer<typeof formSchemaRegister>;
