import React from "react";
import Navigation from "../Navigation/Navigation";
import cx from "classnames";
import { ProductsProvider } from "../../utils/productsContext";
import { CartStateProvider } from "../../utils/cartContext";
import Container from "@material-ui/core/Container";

export const Layout = ({ children }) => {
  return (
    <>
      <CartStateProvider>
        <header className={cx("App-header", "new-classname")}>
          <Navigation />
        </header>
        <main>
          <Container maxWidth="md">
            <ProductsProvider>{children}</ProductsProvider>
          </Container>
        </main>
      </CartStateProvider>
    </>
  );
};

export default Layout;
