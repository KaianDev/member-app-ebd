import { request } from "@/data/request";
import { queryClient } from "@/providers/tanstackProvider";
import { useMutation } from "@tanstack/react-query";

export const useDelMember = () => {
  return useMutation({
    mutationFn: request.deleteMember,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["members"],
      });
    },
  });
};
