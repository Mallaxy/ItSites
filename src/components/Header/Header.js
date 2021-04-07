import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Badge from "@material-ui/core/Badge";
import CompareIcon from "@material-ui/icons/Compare";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <NavLink to="/list">
          <img
            src="https://i.pinimg.com/originals/e4/9d/ab/e49dabbdf15dc0ad2a6d039c0e785440.png"
            alt="Ups...("
          />
        </NavLink>
      </div>
      <div className={s.navbar}>
        <NavLink to={"/favorite"}>
          <Badge badgeContent={props.favoriteLength} color="primary">
            <FavoriteIcon fontSize={"large"} color={"secondary"} />
          </Badge>
        </NavLink>
        <NavLink to={"/compare"}>
          <Badge badgeContent={props.compareLength} color="primary">
            <CompareIcon fontSize={"large"} color={"action"} />
          </Badge>
        </NavLink>
        <NavLink to={"/cart"}>
          <Badge badgeContent={props.cartLength} color="primary">
            <ShoppingCartIcon fontSize={"large"} color={"action"} />
          </Badge>
        </NavLink>
      </div>
    </div>
  );
};
