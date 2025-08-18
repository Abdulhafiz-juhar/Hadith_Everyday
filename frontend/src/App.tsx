import "./App.css";
import { Routes, Route } from "react-router";
import DailyHadithPage from "./pages/DailyHadithPage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";
import { LoginForm } from "./components/login-form";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-[1rem]">
      <Navbar />
      <main className="p-4 border border-8 h-[92vh] grid">
        <Routes>
          <Route path="/" element={<DailyHadithPage />} />
          <Route path="/Favorites" element={<FavoritesPage />} />
          <Route
            path="/login"
            element={
              <LoginForm className="place-self-center w-[60%] md:max-w-[50%]" />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
