import { SessionProvider } from "next-auth/react";
import React from "react";
type SessionProviderProps = {
    children: React.ReactNode;
};
export const SessionAuthProvider = ({ children }: SessionProviderProps) => {
    return <SessionProvider>{children}</SessionProvider>;
};

