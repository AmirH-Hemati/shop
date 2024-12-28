import { Heart, Home2, LoginCurve, ShoppingCart } from "iconsax-react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="font-montserrat font-semibold h-16 md:relative w-full fixed bottom-0 left-0 bg-white rounded-t-xl shadow-lg px-4 flex  gap-6 lg:flex-row-reverse justify-evenly  items-center">
      <Test />
    </div>
  );
}

export default Header;

function Test() {
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
      <NavLink className="lg:mr-auto " to={`/login`}>
        <ShoppingCart size="36" color="#00582f" className="" />
      </NavLink>
    </>
  );
}
