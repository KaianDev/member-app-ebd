"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type FormSchemaSignIn } from "@/lib/schemas";
import SignInForm from "@/components/SignInForm";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import LogoEbd from "@/public/logo.png";
import Image from "next/image";

export default function Home() {
    const router = useRouter();
    const onSubmit = async (values: FormSchemaSignIn) => {
        const user = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });
        if (user?.ok) {
            router.replace("/private/members");
        } else {
            toast({
                title: "Usuário e/ou senha inválidos",
                variant: "destructive",
            });
        }
    };

    return (
        <main className="w-full min-h-screen flex flex-col items-center gap-4 bg-gradient-to-b from-slate-100 via-slate-100 to-neutral-500 p-6">
            <Image
                src={LogoEbd}
                alt="Logo EBD"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-52"
            />
            <Card className="max-w-sm w-full">
                <CardHeader>
                    <CardTitle>Faça o Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <SignInForm onSubmit={onSubmit} />
                </CardContent>
            </Card>
        </main>
    );
}
