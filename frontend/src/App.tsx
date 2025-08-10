import "./App.css";
import { Routes, Route } from "react-router";
import DailyHadithPage from "./pages/DailyHadithPage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";
import { getRandomHadith } from "@/api/hadithApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/shadcn-io/spinner";

function App() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["randomHadith"],
    queryFn: getRandomHadith,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      {isLoading && (
        <div className="p-4 border border-8 flex flex-col flex-1 items-center justify-center">
          <Spinner />
        </div>
      )}
      {isError && (
        <div className="text-center p-4 text-red-500">
          Error fetching hadith
        </div>
      )}

      {data && (
        <main className="p-4 border border-8 flex flex-col flex-1 items-center justify-center">
          <Routes>
            <Route
              path="/"
              element={
                <DailyHadithPage hadith={data.hadith} source={data.source} />
              }
            />
            <Route path="/Favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
      )}
    </div>
  );
}

export default App;
