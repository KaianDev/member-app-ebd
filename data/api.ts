import { FormMemberSchema, FormSchemaSignIn } from "@/lib/schemas";
import { Member } from "@/types/Member";
import { SearchMember } from "@/types/SearchMember";
import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    origin: process.env.ORIGIN_URL,
  },
});

export const api = {
  login: async (data: FormSchemaSignIn) => {
    const results = await http.post("/login", data);
    console.log(results);
    return results.data;
  },

  getAllMembers: async (): Promise<Member[] | undefined> => {
    try {
      const results = await http.get("/members");
      return results.data as Member[];
    } catch (error) {}
  },

  createMember: async (data: FormMemberSchema) => {
    try {
      const results = await http.post("/members", data);
      return results.data as Member;
    } catch (error) {}
  },

  getOneMember: async (id: string) => {
    const results = await http.get(`/members/${id}`);
    const member = results.data as Member;
    if (member.id) {
      return member;
    }
    throw new Error("Ocorreu um erro");
  },

  deleteMember: async (id: number) => {
    try {
      const results = await http.delete(`/members/${id}`);
      return results;
    } catch (error) {}
  },

  updateMember: async (id: number, data: FormMemberSchema) => {
    try {
      const results = await http.put(`/members/${id}`, data);
      return results.data as Member;
    } catch (error) {}
  },

  searchMember: async (searchParams: SearchMember) => {
    try {
      const results = await http.get(`/members/search`, {
        params: searchParams,
      });
      return results.data as Member[];
    } catch (error) {}
  },
};
