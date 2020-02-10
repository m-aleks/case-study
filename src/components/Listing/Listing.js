import React from "react";
import theme from "./Listing.module.scss";
import cx from "classnames";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export const Listing = ({
  list,
  view,
  isError,
  isLoading,
  addToCartHandler
}) => {
  const columns = view === "list" ? 1 : 3;

  const listItems = list.map(
    ({ productID, name, image, description, unitsInStock }) => (
      <Grid item xs={12 / columns} key={productID}>
        <Paper>
          <div className={theme.card}>
            <img src={image} alt={name} />
            <div>{name}</div>
            <div>{description}</div>
          </div>
          {productID}
          {addToCartHandler && (
            <button
              onClick={() => addToCartHandler(productID)}
              disabled={+unitsInStock === 0}
            >
              +
            </button>
          )}
        </Paper>
      </Grid>
    )
  );
  const listGrid = [];
  for (let i = 0; i < listItems.length; i = i + columns) {
    listGrid.push(
      <Grid container item xs={12} spacing={3} key={i}>
        {listItems.slice(i, i + columns)}
      </Grid>
    );
  }

  return (
    <div
      className={cx(theme.listing, {
        "listing--grid": view === "grid",
        "listing--list": view === "list"
      })}
    >
      {isError && <div> Can't get products</div>}
      {isLoading ? "is loading...." : listGrid}
    </div>
  );
};

export default Listing;
