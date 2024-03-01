"use client";
import { ReactNode } from "react";
import { SessionAuthProvider } from "./sessionAuthProvider";
import { TanstackProvider } from "./tanstackProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <SessionAuthProvider>
        <TanstackProvider>{children}</TanstackProvider>
      </SessionAuthProvider>
    </ThemeProvider>
  );
};
