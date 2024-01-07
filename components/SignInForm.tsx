"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LucideEye, LucideEyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "./ui/use-toast";

import { type FormSchemaSignIn, formSchemaSignIn } from "@/lib/schemas";

const SignInForm = () => {
    const [type, setType] = useState<"password" | "text">("password");

    const router = useRouter();

    const form = useForm<FormSchemaSignIn>({
        resolver: zodResolver(formSchemaSignIn),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: FormSchemaSignIn) => {
        const user = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });
        if (user?.ok) {
            router.replace("/private");
        } else {
            toast({
                title: "Usuário e/ou senha inválidos",
                variant: "destructive",
            });
        }
    };

    const handleToggleTypePassword = () => {
        setType((prev) => (prev === "password" ? "text" : "password"));
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-mail:</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Digite seu e-mail"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Senha:</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        type={type}
                                        {...field}
                                        placeholder="Digite sua senha"
                                        autoComplete="off"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="p-1 absolute top-1.5 right-2 w-auto h-auto"
                                        onClick={handleToggleTypePassword}>
                                        {field.value &&
                                            (type === "password" ? (
                                                <LucideEye size={20} />
                                            ) : (
                                                <LucideEyeOff size={20} />
                                            ))}
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Entrar</Button>
            </form>
        </Form>
    );
};

export default SignInForm;
