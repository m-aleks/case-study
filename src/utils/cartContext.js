import React, { useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

const CartContext = React.createContext({
  selectedProducts: [],
  selectedTotal: 0
});

function useCartState() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error(`ProductsContext must be used within a ProductsProvider`);
  }
  return context;
}

function CartStateProvider(props) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    selectedProducts: [],
    selectedTotal: 0
  });
  return <CartContext.Provider value={[cartState, cartDispatch]} {...props} />;
}
export { CartStateProvider, useCartState };
