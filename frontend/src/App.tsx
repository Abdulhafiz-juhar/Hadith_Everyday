import "./App.css";
import { Routes, Route } from "react-router";
import DailyHadithPage from "./pages/DailyHadithPage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4 border border-8 flex flex-col flex-1 items-center justify-center">
        <Routes>
          <Route path="/" element={<DailyHadithPage />} />
          <Route path="/Favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
