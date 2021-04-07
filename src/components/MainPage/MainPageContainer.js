import React from "react";
import { connect } from "react-redux";
import { setItems } from "../../redux/listReducer";
import { MainPage } from "./MainPage";

const MainPageContainer = (props) => {
  if (props.itemsData.length === 0) {
    async function fetchData() {
      let response = await fetch("http://localhost:3000/items");
      let items = await response.json();
      props.setItems(items);
    }

    fetchData();
  }

  return <MainPage />;
};

let mapStateToProps = (state) => ({
  itemsData: state.mainPage.itemsData,
});

export default connect(mapStateToProps, { setItems })(MainPageContainer);
