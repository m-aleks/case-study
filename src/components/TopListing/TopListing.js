import React from "react";
import { Listing } from "../index";
import { useProducts } from "../../utils/productsContext";

export const TopListing = () => {
  const [{ products, isLoading, isError }] = useProducts();
  const productsToDisplay = products.slice(0, 5); //here shoud be some "Top" logic

  return (
    <Listing
      list={productsToDisplay}
      view="list"
      isLoading={isLoading}
      isError={isError}
    />
  );
};
export default TopListing;
