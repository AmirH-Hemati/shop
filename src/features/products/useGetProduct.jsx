import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProdect";
import { useParams } from "react-router-dom";

export function useGetProduct() {
  const { id } = useParams();
  const { isLoading, data: product } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(id),
  });
  console.log(product)
  return { product, isLoading };
}
