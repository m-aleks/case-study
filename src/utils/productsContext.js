import React from "react";
import { useProductsFetch } from "./useProductsFetch";

const ProductsContext = React.createContext({
  data: { products: [] },
  isLoading: false,
  isError: false
});

function useProducts() {
  const context = React.useContext(ProductsContext);
  if (!context) {
    throw new Error(`ProductsContext must be used within a ProductsProvider`);
  }
  return context;
}

function ProductsProvider(props) {
  const [{ data, isLoading, isError }] = useProductsFetch({ products: [] });
  return (
    <ProductsContext.Provider value={[data, isLoading, isError]} {...props} />
  );
}
export { ProductsProvider, useProducts };
