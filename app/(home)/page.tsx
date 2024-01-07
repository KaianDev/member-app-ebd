import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignInForm from "@/components/SignInForm";
import LogoEbd from "@/public/logo.png";
import Image from "next/image";

export default function Home() {
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
                    <SignInForm />
                </CardContent>
            </Card>
        </main>
    );
}
