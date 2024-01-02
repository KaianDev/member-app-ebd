"use client";
import { LucideLogOut } from "lucide-react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <Button onClick={handleSignOut} variant="destructive" className="gap-2">
            Sair <LucideLogOut size={20} />
        </Button>
    );
};

export default SignOutButton;
