import { Firstline } from "iconsax-react";
import FilterProducts from "../features/products/FilterProducts";
import ProductsDetaAll from "../features/products/ProductsDetaAll";
import { useState } from "react";
import HeaderMenuMobile from "../ui/HeaderMenuMobile";

function Products() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="flex flex-col md:flex-row  items-center">
      <p
        onClick={() => setIsOpenMenu((isopen) => !isopen)}
        className="self-end md:hidden rounded-lg bg-slate-500 w-10 h-10 text-white text-center"
      >
        <Firstline size="32" color="#FF8A65" />
      </p>
      <HeaderMenuMobile />
      <FilterProducts isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      <ProductsDetaAll />
    </div>
  );
}

export default Products;
