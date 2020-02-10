import React from "react";
import { NavLink } from "react-router-dom";
import { useCartState } from "../../utils/cartContext";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Badge from "@material-ui/core/Badge";
import theme from "./Navigation.module.scss";

export const Navigation = () => {
  const [{ selectedTotal }] = useCartState();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Container maxWidth="sm">
            <div className={theme.links}>
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/top-5">Top-5 Products</NavLink>
              <Badge badgeContent={selectedTotal} color="secondary">
                <NavLink to="/cart">Your Cart</NavLink>
              </Badge>
            </div>
          </Container>
        </Toolbar>
      </AppBar>

      {/* <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/top-5">Top-5 Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Your Cart</NavLink>
            <span>{selectedTotal}</span>
          </li>
        </ul>
      </nav> */}
    </>
  );
};

export default Navigation;
