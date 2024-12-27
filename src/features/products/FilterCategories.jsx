import { useSearchParams } from "react-router-dom";
import { useGetCategories } from "./useGetCategories";
import { useEffect, useState } from "react";
import { useFilterContext } from "../../context/FilterContext";

function FilterCategories() {
  const { categories } = useGetCategories();
  const { handelFilterChange, filters } = useFilterContext();
  console.log(filters);
  return (
    <div>
      {categories?.categories.map((category) => (
        <div className=" space-x-1 flex" key={category}>
          <input
            type="checkbox"
            id={category}
            className=" w-4"
            value={category}
            checked={filters["categories"].includes(category)}
            onChange={(e) =>
            {
              handelFilterChange("categories", e.target.value, e.target.checked)
              console.log(e.target.checked)
            }
            }
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
    </div>
  );
}

export default FilterCategories;
