import { getAccessToken } from "@/helpers/getAccessToken";
import { backendAPI } from "@/lib/api";
import { Member } from "@/types/Member";
import { SearchMember } from "@/types/SearchMember";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const searchParams = request.nextUrl.searchParams as SearchMember;
    const accessToken = await getAccessToken(request);
    const results = await backendAPI.get(`/members/search`, {
      params: searchParams,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return new Response(JSON.stringify(results.data as Member[]));
  } catch (error) {
    const axiosError = error as AxiosError;
    const { status, message } = axiosError;
    if (status) {
      return new Response(JSON.stringify(new AxiosError(message)), { status });
    }
    return new Response(JSON.stringify(new AxiosError("Ocorreu um erro")), {
      status: 500,
    });
  }
};
