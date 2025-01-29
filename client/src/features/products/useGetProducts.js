import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProdect";

export function useGetProducts() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return { products, isLoading };
}
