import { api } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useMemberList = () => {
  return useQuery({
    queryKey: ["members"],
    queryFn: api.getAllMembers,
  });
};

export const useOneMember = (id: string) => {
  return useQuery({
    queryKey: ["members"],
    queryFn: () => api.getOneMember(id),
  });
};
