import { Button } from "@/components/ui/button";
import { Link } from "react-router";

type DailyHadithPageProps = {
  hadith: string;
  source: string;
};

export default function DailyHadithPage({
  hadith,
  source,
}: DailyHadithPageProps) {
  return (
    <div className="border-2 rounded-2xl border-black p-4 grid gap-3 w-2/3">
      <h1>{hadith}</h1>
      <h3>{source}</h3>
      <Link to="/Favorites">
        <Button>goto Favorites</Button>
      </Link>
    </div>
  );
}
//add refresh and add to fav button but start with refresh since that easier
