import ProductsDetaAll from "../features/products/ProductsDetaAll";
import { useState } from "react";

import FilterButtons from "../ui/FilterButtons";
import Search from "../ui/Search";

function Products() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col  items-center gap-4  h-full bg-[#f5eeee91] mt-5">
      <div className="w-full gap-4 flex flex-col-reverse lg:flex-row items-center justify-between p-2 bg-[#f5eeee91]">
        <FilterButtons />
        <Search search={search} setSearch={setSearch} />
      </div>
      <ProductsDetaAll search={search} />
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
