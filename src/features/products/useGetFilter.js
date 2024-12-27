import { useSearchParams } from "react-router-dom";

export function useGetFilter() {
  const [searchParams] = useSearchParams();
  const colors = searchParams.get("colors") || [];
  const categories = searchParams.get("categories") || [];
  const size = searchParams.get("size") || [];
  return { colors, categories, size };
}
