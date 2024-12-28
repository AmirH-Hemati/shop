import { Coffee } from "iconsax-react";

function FilterButton({ text, setFilter, filter }) {
  console.log(filter, text);
  return (
    <button
      onClick={() => setFilter(text)}
      className={` font-montserrat font-semibold  text-[#00582f] flex items-center justify-center space-x-2 bg-white shadow-lg rounded-xl w-32 p-2 ${
        filter == text ? "bg-red-500 text-white" : ""
      } `}
    >
      <span>{text}</span>
      <Coffee size="26" color={filter === text ? "#fff" : "#00582f"} />
    </button>
  );
}

export default FilterButton;
