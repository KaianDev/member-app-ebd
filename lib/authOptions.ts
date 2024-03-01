import { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { formSchemaSignIn } from "./schemas";
import { request } from "@/data/request";
import { decode } from "jsonwebtoken";

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
          const user = (await request.login({ email, password })) as User;

          if (user) {
            return user;
          }
        }
        return null;
      },
    }),
  ],

  session: {},

  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        const { exp: accessTokenExpires } = decode(user.accessToken) as {
          exp: number;
        };
        const accessToken = user.accessToken;
        token.accessToken = accessToken;
        token.accessTokenExpires = accessTokenExpires;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken as string;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};
