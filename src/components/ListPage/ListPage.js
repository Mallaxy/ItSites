import React from "react";
import s from "./ListPage.module.css";
import { ListItem } from "./ListItem/ListItem";

export const ListPage = ({
  filteredItems,
  toggleFavorite,
  toggleCart,
  toggleCompare,
}) => {
  const listOfItems = filteredItems.map((item) => (
    <ListItem
      {...item}
      toggles={{ toggleFavorite, toggleCart, toggleCompare }}
      key={item.id}
    />
  ));
  return <div className={s.listPage}>{listOfItems}</div>;
};
