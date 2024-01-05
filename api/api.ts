import { FormSchemaRegister, FormSchemaSignIn } from "@/lib/schemas";
import { Member } from "@/types/Member";
import axios from "axios";

export const req = axios.create({
    baseURL: process.env.BASE_API_NODE,
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

    createMember: async (data: FormSchemaRegister) => {
        try {
            const results = await req.post("/members", data);
            return results.data as Member;
        } catch (error) {}
    },

    getOneMember: async (id: string) => {
        try {
            const results = await req.get(`/members/${id}`);
            return results.data as Member;
        } catch (error) {}
    },

    deleteMember: async (id: number) => {
        try {
            const results = await req.delete(`/members/${id}`);
            return results;
        } catch (error) {}
    },
};
