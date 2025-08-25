import {
  getUser,
  getAuthenticUser,
  createUser,
  type createUserType,
} from "@/api/userApi";
import { useQuery, useMutation } from "@tanstack/react-query";
import type { user } from "@/contexts/AuthContext";

export function useUser(id: string) {
  const { data, isFetching, isError } = useQuery<user>({
    queryKey: ["getUser", id],
    queryFn: () => getUser(id),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { user: data, isFetching, isError };
}

// export function useAuthenticUser(email: string, password: string) {
//   const { data, isFetching, isError } = useQuery<user>({
//     queryKey: ["getAuthenticUser", email],
//     queryFn: () => getAuthenticUser(email, password),
//     refetchOnWindowFocus: false,
//     refetchOnMount: false,
//   });

//   return { user: data, isFetching, isError };
// }

export function useAuthenticUser() {
  const {
    mutateAsync: login,
    isError,
    isPending: isFetching,
    data: user,
    error,
  } = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const user = await getAuthenticUser(email, password);
      return user;
    },
  });

  return { login, user, isError, isFetching, error };
}

export function useCreateUser() {
  const {
    mutateAsync: signUp,
    isError,
    isPending: isFetching,
    data: user,
  } = useMutation({
    mutationFn: async ({ email, password }: createUserType) => {
      const user = await createUser({ email, password });
      return user;
    },
  });

  return { signUp, isError, isFetching, user };
}
