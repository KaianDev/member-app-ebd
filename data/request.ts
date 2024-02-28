import { backendAPI, frontendAPI } from "@/lib/api";
import { FormMemberSchema, FormSchemaSignIn } from "@/lib/schemas";
import { Member } from "@/types/Member";
import { SearchMember } from "@/types/SearchMember";

export const request = {
  login: async (data: FormSchemaSignIn) => {
    const results = await backendAPI.post("/login", data);
    return results.data;
  },

  getAllMembers: async (): Promise<Member[] | undefined> => {
    try {
      const results = await frontendAPI.get("/members");
      return results.data as Member[];
    } catch (error) {}
  },

  createMember: async (data: FormMemberSchema) => {
    try {
      const results = await frontendAPI.post("/members", data);
      return results.data as Member;
    } catch (error) {}
  },

  getOneMember: async (id: string) => {
    try {
      const results = await frontendAPI.get(`/members/${id}`);
      const member = results.data as Member;
      if (member.id) {
        return member;
      }
    } catch {}
  },

  deleteMember: async (id: number) => {
    try {
      const results = await frontendAPI.delete(`/members/${id}`);
      return results;
    } catch (error) {}
  },

  updateMember: async (id: number, data: FormMemberSchema) => {
    try {
      const results = await frontendAPI.put(`/members/${id}`, data);
      return results.data as Member;
    } catch (error) {}
  },

  searchMember: async (searchParams: SearchMember) => {
    try {
      const results = await frontendAPI.get(`/members/search`, {
        params: searchParams,
      });
      return results.data as Member[];
    } catch (error) {}
  },
};
