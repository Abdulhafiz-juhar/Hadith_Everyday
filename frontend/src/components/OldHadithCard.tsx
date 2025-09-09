import { Button } from "./ui/button";
import { Spinner } from "./ui/shadcn-io/spinner";
import type { hadithReturnType } from "@/api/hadithApi";

type OldHadithCardType = {
  isError?: boolean;
  isFetching?: boolean;
  data: hadithReturnType | undefined;
  handleRefresh: () => void;
};

export function OldHadithCard({
  isError = false,
  isFetching = false,
  data,
  handleRefresh,
}: OldHadithCardType) {
  return (
    <div className="border-2 rounded-2xl border-black p-4 grid gap-3 w-full max-w-[800px] place-self-center">
      {isError && <h1>Error loading hadith.</h1>}
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <h1 className="line-clamp">{data?.hadith}</h1>
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
