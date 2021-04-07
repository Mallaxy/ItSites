import React from "react";
import { connect } from "react-redux";
import { ListPage } from "./ListPage";
import {
  toggleCart,
  toggleCompare,
  toggleFavorite,
} from "../../redux/listReducer";

const ListPageContainer = (props) => {
  let filteredItems = props.itemsData.filter((item) =>
    filtering(item, props.filterValues)
  );
  return <ListPage filteredItems={filteredItems} {...props} />;
};

export function filtering(item, filter) {
  if (filter.blade && item.blade !== filter.blade) {
    return false;
  }
  if (filter.handle && item.handle !== filter.handle) {
    return false;
  }
  if (filter.length && item.length !== filter.length) {
    return false;
  }
  return true;
}

let mapStateToProps = (state) => ({
  filterValues: state.filter,
  itemsData: state.mainPage.itemsData,
});

export default connect(mapStateToProps, {
  toggleFavorite,
  toggleCart,
  toggleCompare,
})(ListPageContainer);
