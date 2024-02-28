import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { formSchemaSignIn } from "./schemas";
import { request } from "@/data/request";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { type: "email", label: "E-mail" },
        password: { type: "password", label: "Senha" },
      },
      async authorize(credentials) {
        const parsedCredentials = formSchemaSignIn.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await request.login({ email, password });
          if (user) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/",
  },
};
