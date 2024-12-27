import { createContext, useContext, useState } from "react";

const favoriteContext = createContext();
function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([]);
  function addFavorite(newItem) {
    setFavorite((favorite) =>
      favorite.find((fa) => fa.id == newItem.id)
        ? favorite.filter((favorite) => favorite.id !== newItem.id)
        : [...favorite, newItem]
    );
  }
  return (
    <favoriteContext.Provider value={{ addFavorite, setFavorite, favorite }}>
      {children}
    </favoriteContext.Provider>
  );
}

function useFavorite() {
  return useContext(favoriteContext);
}
export { useFavorite, FavoriteProvider };
