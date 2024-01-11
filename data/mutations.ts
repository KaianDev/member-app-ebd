import { api } from "@/data/api";
import { queryClient } from "@/providers/tanstackProvider";
import { useMutation } from "@tanstack/react-query";

export const useDelMember = () => {
  return useMutation({
    mutationFn: api.deleteMember,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["members"],
      });
    },
  });
};
