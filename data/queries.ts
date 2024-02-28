import { request } from "@/data/request";
import { useQuery } from "@tanstack/react-query";

export const useMemberList = () => {
  return useQuery({
    queryKey: ["members"],
    queryFn: request.getAllMembers,
  });
};

export const useOneMember = (id: string) => {
  return useQuery({
    queryKey: ["members"],
    queryFn: () => request.getOneMember(id),
  });
};
