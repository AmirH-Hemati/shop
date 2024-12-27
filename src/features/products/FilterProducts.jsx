import { useState } from "react";
import Accordion from "../../ui/Accordion";
import FilterCategories from "./FilterCategories";
import FilterColors from "./FilterColors";
import { CloseSquare } from "iconsax-react";

function FilterProducts({ isOpenMenu, setIsOpenMenu }) {
  return (
    <>
      <div
        className={`w-2/5 md:w-1/5  bg-blue-500 p-2 z-10 transition-transform transform duration-700  fixed top-6 left-0 h-screen md:translate-x-0 ${
          isOpenMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <p className="md:hidden" onClick={() => setIsOpenMenu(false)}>
          <CloseSquare size="32" color="#FF8A65" />
        </p>
        product filter
        <Accordion title={`Brand`}>
          <FilterCategories />
        </Accordion>
        <Accordion title={`color`}>
          <FilterColors />
        </Accordion>
      </div>
    </>
  );
}

export default FilterProducts;
