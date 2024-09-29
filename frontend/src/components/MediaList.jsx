import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useFavorites } from "../context/FavoritesContext";
import "../styles/MediaList.css";

// MediaList component
const MediaList = () => {
  // Get the current location
  const location = useLocation();

  // Get the query parameters from the location
  const queryParams = new URLSearchParams(location.search);

  // Get the term and mediaType query parameters
  const term = queryParams.get("term");

  // Get the mediaType query parameter
  const mediaType = queryParams.get("media");

  // Declare state variable for mediaItems
  const [mediaItems, setMediaItems] = useState([]);

  // Get favorites and functions to add/remove favorites from the FavoritesContext
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  // Fetch media items from the backend when the term or mediaType changes
  useEffect(() => {
    const fetchMedia = async () => {
      // Get the JWT token from local storage
      const token = localStorage.getItem("jwt");

      try {
        // Fetch media items from the backend
        const response = await axios.get("/api/search", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            term: term,
            media: mediaType,
          },
        });

        // Set the mediaItems state variable with the response data
        setMediaItems(response.data.results);
      } catch (error) {
        console.error("Error fetching media:", error);
      }
    };

    // Call fetchMedia function
    if (term) {
      fetchMedia();
    }
  }, [term, mediaType]);

  // Toggle favorite status of an item
  const toggleFavorite = (item) => {
    // Check if the item is already in favorites
    if (favorites.some((fav) => fav.trackId === item.trackId)) {
      // If it is, remove it from favorites
      removeFavorite(item.trackId);
    } else {
      // If it's not, add it to favorites
      addFavorite(item);
    }
  };

  return (
    <div className="media-results">
      <h2>Search Results for "{term}"</h2>
      <ul>
        {mediaItems.map((item) => (
          <li key={item.trackId}>
            <img src={item.artworkUrl100} alt={item.trackName} />
            <div>
              {item.artistName} - {item.trackName}
            </div>
            <button onClick={() => toggleFavorite(item)}>
              {favorites.some((fav) => fav.trackId === item.trackId)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaList;
