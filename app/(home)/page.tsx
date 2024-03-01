import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignInForm from "@/components/SignInForm";
import LogoEbd from "@/public/logo.png";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="w-full min-h-dvh flex flex-col items-center gap-4 bg-gradient-to-b from-slate-100 via-slate-100 to-neutral-500 dark:from-zinc-800 p-6">
      <ThemeToggle />
      <Image
        src={LogoEbd}
        alt="Logo EBD"
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-52 dark:invert"
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
