import { NextRequest } from "next/server";
import { decode } from "next-auth/jwt";

export const getAccessToken = async (req: NextRequest) => {
  const token = req.cookies.get(
    `${process.env.NEXT_PUBLIC_TOKEN_NAME}.session-token`
  )?.value;

  if (!token) return undefined;

  const decoded = await decode({
    secret: process.env.NEXTAUTH_SECRET as string,
    token,
  });

  return decoded?.accessToken;
};
