import { Link, useSearchParams } from "react-router-dom";
import { useGetProducts } from "./useGetProducts";

import { Add, Heart } from "iconsax-react";
import { useGetFilter } from "./useGetFilter";

function ProductsDetaAll() {
  const { products } = useGetProducts();
  // const { colors, categories, size } = useGetFilter();
  // const filterProducts = products?.filter((product) => {
  //   const filterCategories =
  //     categories.length === 0 || categories.includes(product.category);
  //   const filterColor = colors.length === 0 || colors.includes(product.color);
  //   return filterColor && filterCategories;
  // });
  // md:ml-56
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const filterProduct =
    filter !== "All"
      ? products?.filter((product) => {
          return product.title.toLowerCase().includes(filter.toLowerCase());
        })
      : products;
  return (
    <ul className="p-2 grid w-full h-full items-start bg-[#FBFBFB] grid-cols-2  md:grid-cols-4  gap-4   overflow-auto">
      {filterProduct?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ul>
  );
}

function Product({ product }) {
  return (
    <li className=" p-1 rounded-2xl shadow-xl bg-white ">
      <div>
        <img
          src={product.image}
          alt=""
          className="w-full object-cover aspect-square rounded-2xl"
        />
      </div>
      <div className="contetnt p-2 ">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-semibold font-montserrat">
            {product.title}
          </h3>
          <Heart size="28" color="#FF8A65" />
        </div>
        <p className="text-[12px] font-montserrat ">with suger</p>
        <div className="flex justify-between items-center">
          <p>$50.000</p>
          <Link to={`/product/${product.id}`}>
            <button className="bg-[#00512C] rounded-full">
              <Add size="28" color="#fff" />
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
}
export default ProductsDetaAll;
