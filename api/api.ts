import { FormSchemaSignIn } from "@/lib/schemas";
import { Member } from "@/types/Member";
import axios from "axios";

export const http = axios.create({
    baseURL: process.env.BASE_API,
});

export const api = {
    login: async (data: FormSchemaSignIn) => {
        const results = await http.post("/login", data);
        return results.data;
    },

    getAllMembers: async (): Promise<Member[] | undefined> => {
        try {
            const results = await http.get("/members");
            return results.data as Member[];
        } catch (error) {}
    },
};
