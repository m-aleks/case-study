import React, { useState } from "react";
import cx from "classnames";
import { Listing } from "../index";
import { useProducts } from "../../utils/productsContext";
import { useCartState } from "../../utils/cartContext";

export const AllListing = () => {
  const [searchString, setSearchString] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [listView, setListView] = useState("grid");
  const [{ products, isLoading, isError }] = useProducts();
  const [{ selectedProducts }, cartDispatch] = useCartState();
  const addToCartHandler = productID => {
    const foundInCart = selectedProducts.find(
      item => item.productID === productID
    );
    if (!foundInCart) {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: [
          ...selectedProducts,
          products.find(item => item.productID === productID)
        ]
      });
    }
  };

  const productsToDisplay = searchQuery
    ? products && products.filter(item => ~item.name.indexOf(searchQuery))
    : products;

  return (
    <div className={cx("listing", {})}>
      <div>
        <form
          onSubmit={event => {
            setSearchQuery(searchString);
            event.preventDefault();
          }}
        >
          <input
            type="text"
            value={searchString}
            onChange={event => setSearchString(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div>
          <button
            onClick={() => setListView("grid")}
            disabled={listView === "grid"}
          >
            Grid
          </button>
          <button
            onClick={() => setListView("list")}
            disabled={listView === "list"}
          >
            List
          </button>
        </div>
      </div>
      <Listing
        list={productsToDisplay}
        view={listView}
        isLoading={isLoading}
        isError={isError}
        addToCartHandler={addToCartHandler}
      />
    </div>
  );
};
export default AllListing;
