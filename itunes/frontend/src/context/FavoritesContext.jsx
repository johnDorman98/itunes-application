import { createContext, useContext, useState, useEffect } from "react";

// Create a new context
const FavoritesContext = createContext();

// Create a custom hook to use the FavoritesContext
export const useFavorites = () => {
  return useContext(FavoritesContext);
};

// Create a provider component to wrap the app in
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage when the app loads
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to local storage when the favorites state changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add a favorite item to the favorites state
  const addFavorite = (item) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some(fav => fav.trackId === item.trackId)) {
        return prevFavorites;
      }
      return [...prevFavorites, item];
    });
  };

  // Remove a favorite item from the favorites state
  const removeFavorite = (trackId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(fav => fav.trackId !== trackId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
