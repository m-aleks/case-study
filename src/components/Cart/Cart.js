import React, { useState } from "react";
import { useCartState } from "../../utils/cartContext";

export const Cart = () => {
  const [{ selectedProducts }, cartDispatch] = useCartState();
  const [numberInCart, setNumberInCart] = useState(
    selectedProducts.reduce((accumulator, product) => {
      accumulator[product.productID] = 1;
      return accumulator;
    }, {})
  );
  const changeQuantity = (productID, newQuantity) => {
    const unitsInStock = selectedProducts.find(
      product => productID === product.productID
    ).unitsInStock;

    newQuantity <= unitsInStock &&
      newQuantity >= 0 &&
      setNumberInCart(
        Object.assign({}, numberInCart, { [productID]: +newQuantity })
      );
  };

  const increment = productID => {
    let quantity = numberInCart[productID];
    changeQuantity(productID, ++quantity);
  };

  const decrement = productID => {
    let quantity = numberInCart[productID];
    changeQuantity(productID, --quantity);
  };

  const removeFromCart = productID => {
    const filteredList = selectedProducts.filter(
      product => product.productID !== productID
    );
    cartDispatch({ type: "REMOVE_FROM_CART", payload: filteredList });
  };

  const list = selectedProducts.map(
    ({ productID, image, name, unitsInStock, unitPrice }) => (
      <li key={productID}>
        <div>
          <img src={image} alt={name} />
          <div>
            <div>{name}</div>
            <div>Items left in stock: {unitsInStock}</div>
          </div>
          <div>Price: {unitPrice}$</div>
        </div>
        <div>
          <input
            type="text"
            name="quantity"
            value={numberInCart[productID]}
            onChange={e => changeQuantity(productID, e.target.value)}
          />
          <button onClick={() => increment(productID, unitsInStock)}>+</button>
          <button onClick={() => decrement(productID)}>-</button>
        </div>
        <button onClick={() => removeFromCart(productID)}>X</button>
      </li>
    )
  );
  const totalPrice = selectedProducts.reduce(
    (accumulator, { productID, unitPrice }) => {
      return accumulator + numberInCart[productID] * unitPrice;
    },
    0
  );

  return (
    <>
      <h1>Your Cart</h1>
      <div>
        <div>
          <div>Product Name</div>
          <div>Price</div>
          <div>Q-ty</div>
        </div>
        <ul>{list}</ul>
        <div></div>
        <div>Total Price: {totalPrice}$</div>
      </div>
    </>
  );
};
export default Cart;
