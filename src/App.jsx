import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./page/Home";
import Products from "./page/Products";
import PageNotFound from "./page/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Product from "./features/products/Product";
import { FilterContextProvider } from "./context/FilterContext";
import { ShopContextProvider } from "./context/shopContext";
import Favorites from "./page/Favorites";
import { FavoriteProvider } from "./context/FavoritesContext";

const qeuryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={qeuryClient}>
      <ShopContextProvider>
        <FavoriteProvider>
          <FilterContextProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Products />} />
                <Route path="products" element={<Products />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </FilterContextProvider>
        </FavoriteProvider>
      </ShopContextProvider>
    </QueryClientProvider>
  );
}

export default App;
