import { Heart, Home2, LoginCurve, ShoppingCart } from "iconsax-react";
import { NavLink } from "react-router-dom";
import { useAddToCart } from "../context/shopContext";
import { useState } from "react";

function Header() {
  return (
    <div className="font-montserrat font-semibold h-16 md:relative w-full fixed bottom-0 left-0 bg-white rounded-t-xl shadow-md px-4 flex  gap-6 lg:flex-row-reverse justify-evenly  items-center">
      <Test />
    </div>
  );
}

export default Header;

function Test() {
  const { getAllQty } = useAddToCart();
  const [first, setFirst] = useState("Home");
  return (
    <>
      <NavLink
        to={`/`}
        className="flex flex-row-reverse "
        onClick={() => setFirst("Home")}
      >
        <p className="hidden md:block text-black">Home</p>
        <Home2
          size="36"
          color="#00582f"
          className="md:hidden"
          variant={first === "Home" && "Bold"}
        />
      </NavLink>
      <NavLink
        className="flex flex-row-reverse"
        to={`/favorites`}
        onClick={() => setFirst("Favorite")}
      >
        <p className="hidden md:block text-black">Favorite</p>

        <Heart
          size="36"
          color="#00582f"
          className="md:hidden"
          variant={first === "Favorite" && "Bold"}
        />
      </NavLink>
      <NavLink
        className="flex flex-row-reverse order-last md:order-none "
        to={`/login`}
        onClick={() => setFirst("Login")}
      >
        <p className="hidden md:block  text-black">Login</p>

        <LoginCurve
          size="36"
          color="#00582f"
          className="md:hidden"
          variant={first === "Login" && "Bold"}
        />
      </NavLink>

      <NavLink
        className="md:mr-auto relative "
        to={`/shopCart`}
        onClick={() => setFirst("Shop")}
      >
        <ShoppingCart
          size="36"
          color="#00582f"
          className=""
          variant={first === "Shop" && "Bold"}
        />
        {getAllQty() > 0 && (
          <p className="text-sm text-white absolute top-3 -right-2 bg-[#00512c] w-5 h-5 flex justify-center items-center rounded-md">
            {getAllQty()}
          </p>
        )}
      </NavLink>
    </>
  );
}
