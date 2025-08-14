import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 h-[8vh]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-4">
          <div className="text-white text-lg font-bold">Hadith Everyday</div>
          <img
            className="h-8 w-8 object-contain"
            src="src/assets/images/logo.png"
            alt="logo"
          />
        </div>

        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">
            Daily Hadith
          </Link>
          <Link
            to="/Favorites"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}
