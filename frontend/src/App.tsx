import "./App.css";
import { Routes, Route } from "react-router";
import DailyHadithPage from "./pages/DailyHadithPage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";
import { getRandomHadith } from "@/api/hadithApi";
import { useState, useEffect } from "react";

function App() {
  const [Hadith, setHadith] = useState({
    hadith: "",
    source: "",
  });
  useEffect(() => {
    getRandomHadith().then((response) => {
      setHadith(response);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4 border border-8 flex flex-col flex-1 items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={
              <DailyHadithPage hadith={Hadith.hadith} source={Hadith.source} />
            }
          />
          <Route path="/Favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
