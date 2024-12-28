import { Back, Heart, Star1, Trash } from "iconsax-react";
import { useAddToCart } from "../../context/shopContext";
import { useGetProduct } from "./useGetProduct";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorite } from "../../context/FavoritesContext";
import AddToFavorite from "../../ui/AddToFavorite";

function Product() {
  const { product } = useGetProduct();
  const [cupSize, setCupSize] = useState("small");
  const [suger, setSuger] = useState("not Sugger");

  const navigate = useNavigate();
  return (
    <div className="overflow-hidden w-full  flex flex-col md:flex-row h-full md:gap-2 md:px-2 bg-[#FBFBFB]  items-center font-montserrat">
      <div className=" relative w-full md:w-1/2   z-0 shadow-md md:px-6 md:py-2 bg-none md:bg-white md:rounded-xl">
        <TopMobile navigate={navigate} product={product} />

        <img
          src={product?.image}
          alt="Product"
          className="object-cover w-full  aspect-square md:px-6 "
        />

        <TitleInMobile product={product} />
      </div>

      <div className=" bg-white  h-full md:h-[85%] w-full md:text-md text-base md:w-1/2  md:rounded-xl rounded-t-xl   -mt-8 md:-mt-0 flex flex-col justify-between  z-10 px-6 py-4   shadow-md">
        <div className="w-full hidden md:flex justify-between items-center ">
          <p className="text-3xl font-semibold">{product?.title}</p>
          <AddToFavorite product={product} color={`#00512c`} />
        </div>

        <DiffrentType
          text1="small"
          text2="medium"
          text3="large"
          title="cup size"
        />

        <DiffrentType
          text1="No Suger"
          text2="Low"
          text3="Medium"
          title="Level Suger"
        />

        <div>
          <p className="font-semibold">About : </p>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span className="text-red-800">...Read More</span>
          </p>
        </div>
        <button className="bg-[#00512C] w-full md:w-1/2 md:self-end border-none text-white p-2 rounded-md align-middle text-sm font-semibold">
          Add to Cart | $50.000
        </button>
      </div>
    </div>
  );
}

export default Product;

function TitleInMobile({ product }) {
  return (
    <div className="w-full md:hidden  absolute flex justify-between text-white bottom-16 left-0 px-6">
      <p className="text-2xl font-semibold">{product?.title}</p>
      <Score />
    </div>
  );
}
function Score() {
  return (
    <div className="space-x-0.5  bg-[#c1925b] px-5 text-sm rounded-xl flex  items-center">
      <Star1 size="18" variant="Bold" color="#fff" />
      <span className="">4.8</span>
    </div>
  );
}

function TopMobile({ navigate, product }) {
  return (
    <div className="md:hidden flex space-x-2 w-full justify-between absolute top-2 px-6 py-2 ">
      <Back size="32" color="#fff" onClick={() => navigate(-1)} />
      <AddToFavorite product={product} color="#fff" />
    </div>
  );
}
function DiffrentType({ text1, text2, text3, title }) {
  const [type, setType] = useState(text1);
  return (
    <div className="bg-white space-y-2 text-sm md:text-md ">
      <p className="font-semibold ">{title} </p>
      <div className="flex justify-between text-xs md:text-sm font-semibold ">
        <p
          className={`px-2 py-1 w-20  md:w-24 flex justify-center  ${
            type == text1 && "bg-[#00512C] text-center text-white rounded-3xl"
          }`}
          onClick={() => setType(text1)}
        >
          {text1}
        </p>
        <p
          className={`px-2 py-1 w-20  md:w-24 flex justify-center ${
            type == text2 && "bg-[#00512C] text-center text-white rounded-3xl"
          }`}
          onClick={() => setType(text2)}
        >
          {text2}
        </p>
        <p
          className={`px-2 py-1 w-20  md:w-24 flex items-center justify-center ${
            type == text3 && "bg-[#00512C] text-center text-white rounded-3xl"
          }`}
          onClick={() => setType(text3)}
        >
          {text3}
        </p>
      </div>
    </div>
  );
}
{
  /* <div className="w-full flex justify-between absolute top-3 left-0 z-20 px-6">
        <Back
          size="32"
          color="#fff"
          style={{ cursor: "pointer" }}
          
        />
        <Heart
          size="32"
          color="#fff"
          variant={
            favorite.find((favorite) => favorite?.id == product?.id)
              ? "Bold"
              : undefined
          }
          style={{ cursor: "pointer" }}
          onClick={() => addFavorite(product)}
        />
      </div> */
}

// const { handelIncreaseProduct, handelDecreaseProduct, getProductQty } =
//   useAddToCart();
// const pd = product?.product;
// const discount = (pd?.price * pd?.discount) / 100;
// const priceDiscpunt = pd?.price - discount;

{
  /* <div className="hidden md:flex md:items-center space-x-2 w-full    ">
<Back size="32" color="#fff" />
<p>Shopping continue </p>
</div>
<hr className="hidden md:block" /> */
}
