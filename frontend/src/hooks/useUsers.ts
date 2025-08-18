import { getUser } from "@/api/userApi";
import { useQuery } from "@tanstack/react-query";
import type { userReturnType } from "@/api/userApi";

export function useUser(id: string) {
  const { data, isFetching, isError } = useQuery<userReturnType>({
    queryKey: ["getUser", id],
    queryFn: () => getUser(id),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { user: data, isFetching, isError };
}
