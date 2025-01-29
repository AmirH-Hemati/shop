import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const filterContext = createContext();

function FilterContextProvider({ children }) {
  const [filters, setFilters] = useState({
    colors: [],
    type: [],
    size: [],
  });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const colors = searchParams.get("colors")?.split(",") || [];
    const categories = searchParams.get("categories")?.split(",") || [];
    const type = searchParams.get("type")?.split(",") || [];
    setFilters({ colors, type, categories });
  }, [searchParams]);

  function updateParamsInUrl(updateFilter) {
    const updatedParams = new URLSearchParams();
    Object.entries(updateFilter)?.forEach(([key, values]) => {
      if (values.length > 0) {
        updatedParams.set(key, values.join(","));
      } else {
        updatedParams.delete(key);
      }
      setSearchParams(updatedParams);
    });
  }
  function handelFilterChange(filterType, value, isChecked) {
    const updateValue = isChecked
      ? [...filters[filterType], value]
      : filters[filterType]?.filter((item) => item !== value);
    const updateFilter = { ...filters, [filterType]: updateValue };
    // {colors : ["red" , "blue"] , brands : []}
    setFilters(updateFilter);
    updateParamsInUrl(updateFilter);
  }
  return (
    <filterContext.Provider value={{ handelFilterChange, filters }}>
      {children}
    </filterContext.Provider>
  );
}
function useFilterContext() {
  return useContext(filterContext);
}
export { FilterContextProvider, useFilterContext };
