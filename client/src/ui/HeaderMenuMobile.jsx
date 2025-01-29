import { Heart, Home2, Profile, ShoppingCart } from "iconsax-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function HeaderMenuMobile() {
  const [clicked, setClicked] = useState("products");

  return (
    <div className="fixed z-50 bottom-0 left-0 bg-white shadow-slate-950 shadow-2xl   rounded-t-2xl  lg:hidden w-full flex justify-evenly p-4">
      <NavLink to={`/products`} onClick={() => setClicked("products")}>
        <Home2
          size="36"
          color="#80A896"
          variant={clicked === "products" && "Bold"}
        />
      </NavLink>
      <NavLink
        onClick={() => setClicked("favorites")}
        
        variant={clicked === "favorites" && "Bold"}
      >
        <Heart size="36" color="#80A896" />
      </NavLink>
      <NavLink
        onClick={() => setClicked("shopcart")}
        to={`/favorites`}
        variant={clicked === "shopcart" && "Bold"}
      >
        <ShoppingCart size="36" color="#80A896" />
      </NavLink>
      <NavLink
        onClick={() => setClicked("profile")}
        to={`/profile`}
        variant={clicked === "profile" && "Bold"}
      >
        <Profile size="36" color="#80A896" />
      </NavLink>
    </div>
  );
}

export default HeaderMenuMobile;
