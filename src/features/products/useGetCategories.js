import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/apiProdect";

export function useGetCategories() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
 
  return { categories, isLoading };
}
