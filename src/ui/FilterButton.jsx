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
      }   font-montserrat font-semibold  flex items-center justify-center space-x-2  shadow-lg rounded-xl w-32 p-2  `}
    >
      <span>{text}</span>
      <Coffee size="26" color={filter === text ? "#fff" : "#00582f"} />
    </button>
  );
}

export default FilterButton;
