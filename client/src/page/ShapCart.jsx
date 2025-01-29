import { useAddToCart } from "../context/shopContext";
import { useCartProducts } from "../features/shopingCart/useCartProducts";
import { ArrowDown2, ArrowUp2, Trash } from "iconsax-react";
import Loading from "../ui/Loading";

function ShapCart() {
  const { removeProduct, handelIncreaseProduct, handelDecreaseProduct } =
    useAddToCart();
  const { products, isLoading } = useCartProducts();
  if (isLoading) return <Loading />;
  if (products?.length < 1)
    return (
      <div
        style={{ backgroundImage: `url("/background.png")` }}
        className="bg-no-repeat   bg-cover bg-center h-full flex  justify-center items-center font-montserrat text-lg md:text-2xl text-white "
      >
        <p className="flex flex-col justify-center">
          <span>There are no products.</span>
          <span className="text-gray-100 text-base md:text-lg">
            Please add some products.
          </span>
        </p>
      </div>
    );

  return (
    <div className="h-full  px-6 py-2 font-montserrat   overflow-hidden bg-[#f5eeee91]">
      <h1 className="text-lg md:text-2xl font-semibold my-1 md:my-3">Shop Cart</h1>
      <div className="flex w-full h-full flex-col   items-center justify-start gap-5 ">
        <div className="bg-[#f5eeee91] rounded-md  flex flex-col w-full md:w-4/5 md:max-h-[60%] max-h-[50%]  gap-2 items-center overflow-auto  ">
          {products?.map((product) => (
            <div
              key={product?.id}
              className="  bg-white p-2 w-full rounded-lg text-sm md:text-base justify-center  shadow-md flex text-black"
            >
              <div className="img md:w-1/5 w-1/4  ">
                <img
                  src={product?.image}
                  alt=""
                  className=" aspect-square w-full rounded-2xl object-cover"
                />
              </div>
              <div className=" items-center w-3/4 md:w-4/5 p-1 flex justify-between text-base md:text-lg">
                <div>
                  <p className="  font-semibold md:text-lg text-base">
                    {product?.title}
                  </p>
                  <p className="text-sm md:text-base">$50.000</p>
                </div>

                <div className="flex  items-center gap-2 md:gap-3">
                  <span className="text-base md:text-base">{product?.qty}</span>
                  <div className="flex flex-col">
                    <ArrowUp2
                      size="24"
                      color="black"
                      variant="Bold"
                      className="cursor-pointer"
                      onClick={() => handelIncreaseProduct(product?.id)}
                    />
                    <ArrowDown2
                      size="24"
                      color="black"
                      variant="Bold"
                      className="cursor-pointer"
                      onClick={() => handelDecreaseProduct(product?.id)}
                    />
                  </div>
                  <Trash
                    size="24"
                    color="black"
                    variant="Bold"
                    className="cursor-pointer"
                    onClick={() => removeProduct(product?.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#00512C] md:w-4/5  max-h-[30%] gap-1 rounded-md  w-full p-2 shadow-md  flex flex-col justify-evenly ">
          <h1 className="text-lg md:text-xl font-semibold">Shop Cart</h1>
          <p>Total Price : 55151</p>
          <p>Total Quantity : 10</p>
          <button className="bg-gray-100 text-[#00512C] w-full md:w-1/3 md:self-end border-none  p-2 rounded-md align-middle text-sm font-semibold">
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShapCart;
