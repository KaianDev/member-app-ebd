import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionAuthProvider } from "@/providers/sessionAuthProvider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "EBD - IPRAB Ebenézer",
    description: "Escola Bíblica Dominical - IPRAB Ebenézer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <SessionAuthProvider>
                    {children}
                    <Toaster />
                </SessionAuthProvider>
            </body>
        </html>
    );
}
