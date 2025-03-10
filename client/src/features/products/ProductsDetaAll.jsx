import { Link, useSearchParams } from "react-router-dom";
import { useGetProducts } from "./useGetProducts";
import { Add } from "iconsax-react";
import AddToFavorite from "../../ui/AddToFavorite";
import Loading from "../../ui/Loading";

function ProductsDetaAll({ search }) {
  const { products, isLoading } = useGetProducts();
  const [searchParams] = useSearchParams();
  // const { colors, categories, size } = useGetFilter();
  // const filterProducts = products?.filter((product) => {
  //   const filterCategories =
  //     categories.length === 0 || categories.includes(product.category);
  //   const filterColor = colors.length === 0 || colors.includes(product.color);
  //   return filterColor && filterCategories;
  // });
  // md:ml-56
  if (isLoading) return <Loading />;

  const filter = searchParams.get("filter");

  const filterProduct =
    filter !== "All"
      ? products?.filter((product) => {
          return product?.title?.toLowerCase()?.includes(filter?.toLowerCase());
        })
      : products;

  const searchProduct =
    search.length > 0
      ? filterProduct.filter((product) =>
          product?.title?.toLowerCase().includes(search?.toLowerCase())
        )
      : filterProduct;
  return (
    <ul className="p-2 grid w-full h-full items-start bg-[#f5eeee91] grid-cols-2  md:grid-cols-4  gap-4  mb-28 md:pb-0">
      {searchProduct?.map((product) => (
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

          <AddToFavorite product={product} color="#00512c" />
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
