import { createContext, useContext, useState } from "react";

const shopContext = createContext();
function ShopContextProvider({ children }) {
  const [addCart, setAddCart] = useState([]);
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
  console.log(addCart);
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
  return (
    <shopContext.Provider
      value={{ handelIncreaseProduct, handelDecreaseProduct, getProductQty }}
    >
      {children}
    </shopContext.Provider>
  );
}
function useAddToCart() {
  return useContext(shopContext);
}
export { ShopContextProvider, useAddToCart };
