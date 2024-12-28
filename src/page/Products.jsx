import { Firstline } from "iconsax-react";
import FilterProducts from "../features/products/FilterProducts";
import ProductsDetaAll from "../features/products/ProductsDetaAll";
import { useState } from "react";
import HeaderMenuMobile from "../ui/HeaderMenuMobile";
import FilterButton from "../ui/FilterButton";
import FilterButtons from "../ui/FilterButtons";

function Products() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="flex flex-col  items-center gap-4  h-full bg-[#FBFBFB]">
      <div className="w-full gap-4 flex flex-col-reverse lg:flex-row items-center justify-between px-2 bg-[#FBFBFB]">
        <FilterButtons />
        <input
          type="text"
          className="w-full lg:w-1/3 bg-[#f4f4f4] text-gray-600 rounded-2xl px-6 py-3 "
          placeholder="Search Coffee ..."
        />
      </div>
      <ProductsDetaAll />
    </div>
  );
}

export default Products;

{
  /* <FilterProducts isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} /> */
}
{
  /* <p
onClick={() => setIsOpenMenu((isopen) => !isopen)}
className="self-end md:hidden rounded-lg bg-slate-500 w-10 h-10 text-white text-center"
>
<Firstline size="32" color="#FF8A65" />
</p>
<HeaderMenuMobile /> */
}
