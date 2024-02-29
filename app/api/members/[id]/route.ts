import { getAccessToken } from "@/helpers/getAccessToken";
import { backendAPI } from "@/lib/api";
import { FormMemberSchema } from "@/lib/schemas";
import { Member } from "@/types/Member";
import { AxiosError } from "axios";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

interface RequestParams {
  params: {
    id: string;
  };
}

export const GET = async (request: NextRequest, { params }: RequestParams) => {
  try {
    const accessToken = await getAccessToken(request);
    const results = await backendAPI.get(`/members/${params.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return new Response(JSON.stringify(results.data as Member));
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

export const PUT = async (request: NextRequest, { params }: RequestParams) => {
  try {
    const data = (await request.json()) as FormMemberSchema;
    const accessToken = await getAccessToken(request);
    const results = await backendAPI.put(`/members/${params.id}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return new Response(JSON.stringify(results.data as Member));
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

export const DELETE = async (
  request: NextRequest,
  { params }: RequestParams
) => {
  try {
    const accessToken = await getAccessToken(request);
    const results = await backendAPI.delete(`/members/${params.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return new Response(JSON.stringify(results.data));
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
