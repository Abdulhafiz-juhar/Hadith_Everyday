import "./App.css";
import { Routes, Route } from "react-router";
import DailyHadithPage from "./pages/DailyHadithPage";
import FavoritesPage from "./pages/FavoritesPage";
// import Navbar from "./components/Navbar";
import Navbar from "@/components/Navbar";
import { LoginForm } from "./components/login-form";
//move to loginpage later
import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import { useNavigate } from "react-router";
import { Signup1 } from "./components/signup1";

function App() {
  // const { user } = useUser("2"); //should come from login and later change this and useUser to fetch based on username and password
  // const { login } = useAuth();
  // login(user ?? null);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-[1rem]">
      <Navbar01
        logo={
          <img
            className="h-8 w-8 object-contain"
            src="src/assets/images/logo.png"
            alt="logo"
          />
        }
        navigationLinks={[
          { href: "/", label: "Home" },
          { href: "/Favorites", label: "Favorites" },
        ]}
        onSignInClick={() => navigate("/login")}
        onCtaClick={() => navigate("/signup")}
      />
      <main className="p-4 border border-8 min-h-[92vh] grid">
        <Routes>
          <Route path="/" element={<DailyHadithPage />} />
          <Route path="/Favorites" element={<FavoritesPage />} />
          <Route
            path="/login"
            element={
              <LoginForm className="place-self-center w-[60%] md:max-w-[50%]" />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup1
                logo={{
                  url: "https://www.shadcnblocks.com",
                  src: "src/assets/images/logo.png",
                  alt: "logo",
                  title: "Hadith Everyday",
                }}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
