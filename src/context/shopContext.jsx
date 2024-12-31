import { createContext, useContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

const shopContext = createContext();
function ShopContextProvider({ children }) {
  const [addCart, setAddCart] = useLocalStorage("shopCart", []);
  function handelIncreaseProduct(id) {
    setAddCart((products) => {
      if (products.find((item) => item.id == id)) {
        return products.map((product) =>
          product.id === id ? { ...product, qty: product.qty + 1 } : product
        );
      } else {
        return [...products, { id, qty: 1 }];
      }
    });
  }

  function handelDecreaseProduct(id) {
    setAddCart((products) => {
      if (products.find((product) => product.id === id)?.qty == 1) {
        return products.filter((product) => product.id !== id);
      } else {
        return products.map((product) =>
          product.id == id ? { ...product, qty: product.qty - 1 } : product
        );
      }
    });
  }
  function getProductQty(id) {
    return addCart.find((product) => product.id === id)?.qty || 0;
  }
  function getAllQty() {
    return addCart?.reduce((acc, pro) => acc + pro?.qty, 0);
  }
  function getProduct(id) {
    return addCart.find((product) => product.id === id);
  }
  console.log(addCart.filter((p) => p.id !== 4));
  function removeProduct(id) {
    console.log("kirrr");
    setAddCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  return (
    <shopContext.Provider
      value={{
        handelIncreaseProduct,
        handelDecreaseProduct,
        getProductQty,
        getAllQty,
        getProduct,
        addCart,
        removeProduct,
      }}
    >
      {children}
    </shopContext.Provider>
  );
}
function useAddToCart() {
  return useContext(shopContext);
}
export { ShopContextProvider, useAddToCart };
