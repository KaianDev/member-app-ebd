import { backendAPI } from "@/lib/api";
import { FormMemberSchema } from "@/lib/schemas";
import { Member } from "@/types/Member";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const results = await backendAPI.get("/members");
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

export const POST = async (request: NextRequest) => {
  try {
    const data = (await request.json()) as FormMemberSchema;
    const results = await backendAPI.post("/members", data);
    return new Response(JSON.stringify(results.data), { status: 201 });
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
