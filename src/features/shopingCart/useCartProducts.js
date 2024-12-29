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
  console.log(data);
  return { data, isLoading };
}
