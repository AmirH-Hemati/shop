import { Heart } from "iconsax-react";
import { useFavorite } from "../context/FavoritesContext";

function AddToFavorite({ product, color }) {
  const { addFavorite, favorite } = useFavorite();
  return (
    <Heart
      size="32"
      color={color}
      variant={
        favorite.find((favorite) => favorite?.id == product?.id) ? "Bold" : null
      }
      style={{ cursor: "pointer" }}
      onClick={() => addFavorite(product)}
    />
  );
}

export default AddToFavorite;
