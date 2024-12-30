import { useFavorite } from "../context/FavoritesContext";

import AddToFavorite from "../ui/AddToFavorite";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorite } = useFavorite();
  if (favorite?.length < 1)
    return (
      <div
        style={{ backgroundImage: `url("public/background.png")` }}
        className="bg-no-repeat   bg-cover bg-center h-full flex  justify-center items-center font-montserrat text-lg md:text-2xl text-white "
      >
        <p className="flex flex-col justify-center">
          <span>There are no favorite products.</span>
          <span className="text-gray-100 text-base md:text-lg">
            Please add some favorite products.{" "}
          </span>
        </p>
      </div>
    );
  return (
    <div className="h-full md:px-6 px-1 py-2 font-montserrat bg-[#FBFBFB] pb-20 md:pb-0 overflow-auto">
      <h1 className="text-lg md:text-2xl font-semibold my-4">Favorite</h1>
      <div className="flex flex-wrap justify-between w-full gap-4">
        {favorite?.map((product) => (
          <Link
            to={`/product/${product?.id}`}
            key={product.id}
            className="w-full md:w-[45%]"
          >
            <div className="bg-white p-1 rounded-xl text-sm md:text-base w-full px-2 shadow-md flex overflow-auto text-black">
              <div className="img md:w-1/4 w-[31%] ">
                <img
                  src={product.image}
                  alt=""
                  className=" aspect-square w-full rounded-2xl object-cover"
                />
              </div>
              <div className="content md:w-3/4 md:px-4 p-1 px-2 w-[69%] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <p className="  font-semibold md:text-xl text-sm">
                    {product.title}
                  </p>
                  <AddToFavorite product={product} color="#686868" />
                </div>
                <p className=" font-bold ">$50.000</p>

                <p>
                  <span className="font-semibold text-sm">cap size : </span>{" "}
                  <span className="text-gray-600 text-sm">Small</span>
                </p>
                <p>
                  <span className="font-semibold text-sm">level Suger : </span>{" "}
                  <span className="text-gray-600 text-sm">No suger</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
