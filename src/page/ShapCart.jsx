import { useAddToCart } from "../context/shopContext";
import AddToFavorite from "../ui/AddToFavorite";
import { useGetProduct } from "../features/products/useGetProduct";
import { useCartProducts } from "../features/shopingCart/useCartProducts";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowDown2, ArrowUp2, Trash } from "iconsax-react";

function ShapCart() {
  const { addCart, getProduct } = useAddToCart();
  const { data, isLoading } = useCartProducts();

  if (addCart?.length < 1)
    return (
      <div className="h-full flex  justify-center items-center font-montserrat text-base md:text-xl font-semibold text-black">
        <p className="flex flex-col justify-center">
          <span>There are no products.</span>
          <span className="text-gray-500 text-sm md:text-base">
            Please add some products.
          </span>
        </p>
      </div>
    );
  if (isLoading) return <div>isloading</div>;

  return (
    <div className="h-full md:px-6 px-2 py-2 font-montserrat pb-16 md:pb-0 overflow-auto">
      <h1 className="text-lg md:text-2xl font-semibold my-4">Shop Cart</h1>
      <div className="flex w-full flex-col md:flex-row gap-2">
        <div className="kir bg-white shadow-md flex flex-col justify-between w-full md:w-1/2  gap-4 items-center overflow-auto max-h-96">
          {data?.map((product) => (
            <div
              key={product?.id}
              className=" bg-white p-1 w-full rounded-xl text-sm md:text-base justify-center  shadow-md flex text-black"
            >
              <div className="img md:w-1/5 w-1/4  ">
                <img
                  src={product?.image}
                  alt=""
                  className=" aspect-square w-full rounded-2xl object-cover"
                />
              </div>
              <div className="content items-center w-3/4 md:w-4/5 p-1 flex justify-between text-base md:text-lg">
                <div>
                  <p className="  font-semibold md:text-lg text-base">
                    {product?.title}
                  </p>
                  <p className="text-sm md:text-base">$50.000</p>
                </div>

                <div className="flex  items-center gap-2 md:gap-3">
                  <span className="text-base md:text-base">1</span>
                  <div className="flex flex-col">
                    <ArrowUp2
                      size="24"
                      color="black"
                      variant="Bold"
                      className="cursor-pointer"
                    />
                    <ArrowDown2
                      size="24"
                      color="black"
                      variant="Bold"
                      className="cursor-pointer"
                    />
                  </div>
                  <Trash
                    size="24"
                    color="black"
                    variant="Bold"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white md:w-1/2  w-full px-4 py-1 shadow-md flex flex-col justify-evenly">
          <h1 className="text-lg md:text-xl font-semibold">Shop Cart</h1>
          <p>Total Price : 55151</p>
          <p>Total Quantity : 10</p>
          <button className="bg-[#00512C] w-full md:w-1/2 md:self-end border-none text-white p-2 rounded-md align-middle text-sm font-semibold">
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShapCart;
