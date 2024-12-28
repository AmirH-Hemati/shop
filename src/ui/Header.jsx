import { Heart, Home2, LoginCurve, ShoppingCart } from "iconsax-react";
import { NavLink } from "react-router-dom";
import { useAddToCart } from "../context/shopContext";

function Header() {
  return (
    <div className="font-montserrat font-semibold h-16 md:relative w-full fixed bottom-0 left-0 bg-white rounded-t-xl shadow-lg px-4 flex  gap-6 lg:flex-row-reverse justify-evenly  items-center">
      <Test />
    </div>
  );
}

export default Header;

function Test() {
  const { getAllQty } = useAddToCart();
  return (
    <>
      <NavLink to={`/`} className="flex flex-row-reverse">
        <p className="hidden md:block">Home</p>
        <Home2 size="36" color="#00582f" className="md:hidden" />
      </NavLink>
      <NavLink className="flex flex-row-reverse" to={`/favorites`}>
        <p className="hidden md:block">Favarite</p>
        <Heart size="36" color="#00582f" className="md:hidden" />
      </NavLink>
      <NavLink
        className="flex flex-row-reverse order-last md:order-none "
        to={`/login`}
      >
        <p className="hidden md:block ">Login</p>
        <LoginCurve size="36" color="#00582f" className="md:hidden" />
      </NavLink>
      <NavLink className="lg:mr-auto relative " to={`/login`}>
        <ShoppingCart size="36" color="#00582f" className="" />
        {getAllQty() > 0 && (
          <p className="text-sm text-white absolute top-3 -right-2 bg-[#00512c] w-5 h-5 flex justify-center items-center rounded-md">
            {getAllQty()}
          </p>
        )}
      </NavLink>
    </>
  );
}
