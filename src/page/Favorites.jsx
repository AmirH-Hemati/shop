import { Add, AddCircle, Heart } from "iconsax-react";
import { useFavorite } from "../context/FavoritesContext";
import HeaderMenuMobile from "../ui/HeaderMenuMobile";

function Favorites() {
  const { favorite } = useFavorite();
  return (
    <div className="h-screen px-6 py-2">
      <h1 className="text-2xl">Favorite</h1>
      {favorite?.map((item) => (
        <div
          key={item.id}
          className="rounded-lg text-base w-full px-2 shadow-xl flex flex-col overflow-auto my-4 text-black"
        >
          <div className="flex w-full gap-2">
            <img
              src={item.image}
              alt=""
              className="w-1/2 h-20 rounded-2xl object-cover"
            />
            <div className="justify-between  flex w-1/2">
              <div className="flex flex-col gap-1">
                <p className=" font-montserrat font-bold">{item.title}</p>
                <p className="text-sm text-gray-400">with suger</p>
                <p className="font-montserrat font-bold ">$50.000</p>
              </div>
              <Heart />
            </div>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="text-sm">
              <p>
                <span>cap size : </span>{" "}
                <span className="text-[#686868] font-medium">Small</span>
              </p>
              <p>
                <span>level Suger : </span>{" "}
                <span className="text-[#686868] font-medium">No suger</span>
              </p>
            </div>
            <div className="flex justify-center items-center space-x-1">
              <p className="font-medium">2</p>
              <AddCircle size="28" color="#00512c" variant="Bold" />
            </div>
          </div>
        </div>
      ))}
      <HeaderMenuMobile />
    </div>
  );
}

export default Favorites;
