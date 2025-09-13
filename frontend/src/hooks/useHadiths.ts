import {
  getHadith,
  getRandomHadith,
  type hadithReturnType,
} from "@/api/hadithApi";
import { editUser, type userReturnType } from "@/api/userApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { id } from "zod/v4/locales";

type useFavoriteHadithsProps = {
  id: string;
  favorites: string[][];
};

export function useFavoriteHadiths({ id, favorites }: useFavoriteHadithsProps) {
  const isValid = Boolean(id) && favorites.length > 0;

  const { data, isFetching, isError } = useQuery({
    queryKey: ["favoriteHadiths", id],
    queryFn: async () => {
      console.log("Called");
      const favoriteHadithsArray = Promise.all(
        favorites.map(([editionName, hadithNo]) =>
          getHadith(editionName, hadithNo)
        )
      );
      return favoriteHadithsArray;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: isValid,
    //   {
    //   const favoriteHadiths = favorites.map(async (favorite) => {
    //   const hadithObject =await getHadith(favorite[0], favorite[1]);
    //   return hadithObject;
    // })
    // return favoriteHadiths;
    // }
  });

  return { data, isFetching, isError };
}

export function useRandomHadith() {
  const { data, isFetching, isError } = useQuery({
    queryKey: ["randomHadith"],
    queryFn: getRandomHadith,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { data, isFetching, isError };
}
