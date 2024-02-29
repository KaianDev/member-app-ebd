import { NextRequest } from "next/server";
import { decode } from "next-auth/jwt";

export const getAccessToken = async (req: NextRequest) => {
  const token = req.cookies.get("next-auth.session-token")?.value;

  if (!token) return undefined;

  const decoded = await decode({
    secret: process.env.NEXTAUTH_SECRET as string,
    token,
  });

  return decoded?.accessToken;
};
