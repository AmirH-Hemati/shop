import { useEffect, useState } from "react";
import FilterButton from "./FilterButton";
import { useSearchParams } from "react-router-dom";

function FilterButtons() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    searchParams.set("filter", filter);
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  return (
    <div className="p-2 flex w-full overflow-auto text-sm md:text-base justify-between bg-[#FBFBFB]">
      <FilterButton text="All" setFilter={setFilter} filter={filter} />
      <FilterButton text="Cappuccino" setFilter={setFilter} filter={filter} />
      <FilterButton text="Mocha" setFilter={setFilter} filter={filter} />
      <FilterButton text="Latte" setFilter={setFilter} filter={filter} />
      <FilterButton text="Coffee" setFilter={setFilter} filter={filter} />
      <FilterButton text="Lemonad" setFilter={setFilter} filter={filter} />
    </div>
  );
}

export default FilterButtons;
