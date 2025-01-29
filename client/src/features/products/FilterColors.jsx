import { useFilterContext } from "../../context/FilterContext";

function FilterColors() {
  const colors = ["red", "blue", "yellow" , "white" , "silver" , "black"];
  const { handelFilterChange, filters } = useFilterContext();

  return (
    <div>
      {colors.map((color) => (
        <div key={color} className="space-x-1 flex">
          <input
            className=" w-4"
            type="checkbox"
            id={color}
            value={color}
            checked={filters["colors"].includes(color)}
            onChange={(e) =>
              handelFilterChange("colors", e.target.value, e.target.checked)
            }
          />
          <label htmlFor={color}>{color}</label>
        </div>
      ))}
    </div>
  );
}

export default FilterColors;
