import { Button } from "@/components/ui/button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRandomHadith } from "@/api/hadithApi";
import { Spinner } from "@/components/ui/shadcn-io/spinner";

type DailyHadithPageProps = {
  hadith: string;
  source: string;
};

export default function DailyHadithPage() {
  const queryClient = useQueryClient();
  const { data, isFetching, isError } = useQuery({
    queryKey: ["randomHadith"],
    queryFn: getRandomHadith,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  function handleRefresh() {
    queryClient.invalidateQueries({
      queryKey: ["randomHadith"],
    });
  }

  //   const { data, isLoading, isError } = useQuery({
  //     queryKey: ["randomHadith"],
  //     queryFn: getRandomHadith,
  //   });
  return (
    <div className="border-2 rounded-2xl border-black p-4 grid gap-3 w-2/3">
      {isError && <h1>Error loading hadith.</h1>}
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <h1>{data?.hadith}</h1>
          <h3>{data?.source}</h3>
        </>
      )}
      <div className="buttons flex gap-1 justify-center">
        <Button onClick={handleRefresh}>Refresh</Button>
        <Button>Add to Favorite</Button>
      </div>
    </div>
  );
}
//add refresh and add to fav button but start with refresh since that easier
