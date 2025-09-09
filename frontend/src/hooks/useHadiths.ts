import { getHadith, getRandomHadith } from "@/api/hadithApi";
import { useQuery } from "@tanstack/react-query";

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
    refetchOnMount: false,
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
