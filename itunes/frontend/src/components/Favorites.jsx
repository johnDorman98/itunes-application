import { useFavorites } from "../context/FavoritesContext";
import "../styles/Favorites.css";

// Favorites component
const Favorites = () => {
  // Get favorites and function to remove favorites from the FavoritesContext
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      {favorites.length ? (
        <ul>
          {favorites.map((item) => (
            <li key={item.trackId}>
              <img src={item.artworkUrl100} alt={item.trackName} width="50" />
              <div>
                {item.artistName} - {item.trackName}
              </div>
              <button onClick={() => removeFavorite(item.trackId)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
