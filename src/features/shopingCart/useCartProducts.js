import { useQuery } from "@tanstack/react-query";
import { getProductswithIds } from "../../services/apiProdect";
import { useAddToCart } from "../../context/shopContext";

export function useCartProducts() {
  const { addCart } = useAddToCart();
  const cartsId = addCart?.map((item) => item.id);

  const { data, isLoading } = useQuery({
    queryKey: ["cartProducts", cartsId],
    queryFn: () => getProductswithIds(cartsId),
  });

  const products = addCart?.map((cartItem) => {
    const product = data?.find((item) => item?.id == cartItem?.id);
    return product
      ? {
          ...cartItem,
          title: product?.title,
          image: product?.image,
          total: cartItem.quantity * product?.price,
        }
      : { ...cartItem, error: "Product not found" };
  });

  return { products, isLoading };
}
