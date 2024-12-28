import { Heart, Home2, Profile, ShoppingCart } from "iconsax-react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="h-6 bg-red-200 hidden lg:block">
      <Test />
    </div>
  );
}

export default Header;

function Test() {
  return (
    <div  className="flex w-1/3 justify-between">
      <NavLink to={`/products`}>
        <Home2 size="36" color="#80A896" />
      </NavLink>
      <NavLink>
        <Heart size="36" color="#80A896" />
      </NavLink>
      <NavLink to={`/favorites`}>
        <ShoppingCart size="36" color="#80A896" />
      </NavLink>
      <NavLink to={`/profile`}>
        <Profile size="36" color="#80A896" />
      </NavLink>
    </div>
  );
}
