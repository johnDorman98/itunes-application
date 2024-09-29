import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";

// Context imports
import { FavoritesProvider } from "./context/FavoritesContext";

// Component imports
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Favorites from "./components/Favorites";
import MediaList from "./components/MediaList";

// App component
const App = () => {
  // Fetch JWT token from backend and store it in local storage when the app loads
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get("/api/token");
        localStorage.setItem("jwt", response.data.token);
      } catch (error) {
        console.error("Error fetching JWT token:", error);
      }
    };

    // Call fetchToken function
    fetchToken();
  }, []);

  return (
    // Wrap the app in the FavoritesProvider context provider
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/results" element={<MediaList />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
