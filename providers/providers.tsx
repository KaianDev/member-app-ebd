"use client";
import { ReactNode } from "react";
import { SessionAuthProvider } from "./sessionAuthProvider";
import { TanstackProvider } from "./tanstackProvider";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <SessionAuthProvider>
      <TanstackProvider>{children}</TanstackProvider>
    </SessionAuthProvider>
  );
};
