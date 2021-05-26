import React from "react";
import s from "./ListPage.module.css";
import { useSelector } from "react-redux";
import { ListItem } from "./ListItem/ListItem";
import { filtering } from "../../utils/utils"

export const ListPage = ({ selector }) => {

  const [filterValues, itemsData] = useSelector(state => [state.filter, state.mainPage[selector]])

  const filteredItems = itemsData.filter((item) =>
    filtering(item, filterValues)
  );

  const listOfItems = filteredItems.map((item) => (
    <ListItem
      {...item}
      key={item.id}
    />
  ));
  return <div className={s.listPage}>{listOfItems}</div>;
};
