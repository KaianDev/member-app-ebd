import { FormMemberSchema, FormSchemaSignIn } from "@/lib/schemas";
import { Member } from "@/types/Member";
import { SearchMember } from "@/types/SearchMember";
import axios from "axios";

export const req = axios.create({
  baseURL: process.env.BASE_API_NODE || "http://localhost:4000",
});

export const api = {
  login: async (data: FormSchemaSignIn) => {
    const results = await req.post("/login", data);
    return results.data;
  },

  getAllMembers: async (): Promise<Member[] | undefined> => {
    try {
      const results = await req.get("/members");
      return results.data as Member[];
    } catch (error) {}
  },

  createMember: async (data: FormMemberSchema) => {
    try {
      const results = await req.post("/members", data);
      return results.data as Member;
    } catch (error) {}
  },

  getOneMember: async (id: string) => {
    const results = await req.get(`/members/${id}`);
    const member = results.data as Member;
    if (member.id) {
      return member;
    }
    throw new Error("Ocorreu um erro");
  },

  deleteMember: async (id: number) => {
    try {
      const results = await req.delete(`/members/${id}`);
      return results;
    } catch (error) {}
  },

  updateMember: async (id: number, data: FormMemberSchema) => {
    try {
      const results = await req.put(`/members/${id}`, data);
      return results.data as Member;
    } catch (error) {}
  },

  searchMember: async (searchParams: SearchMember) => {
    try {
      const results = await req.get(`/members/search`, {
        params: searchParams,
      });
      return results.data as Member[];
    } catch (error) {}
  },
};
