import { Coffee } from "iconsax-react";

function FilterButton({ text, setFilter, filter }) {
  console.log(filter, text);
  return (
    <button
      onClick={() => setFilter(text)}
      className={`${
        filter == text
          ? "bg-[#00582f] text-[#fff]"
          : "bg-[#FBFBFB] text-[#00582f] "
      }   font-montserrat font-semibold  flex items-center justify-center space-x-2  shadow-lg rounded-xl  p-1  `}
    >
      <span>{text}</span>
      <Coffee size="20" color={filter === text ? "#fff" : "#00582f"} />
    </button>
  );
}

export default FilterButton;
