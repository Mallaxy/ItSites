import "./App.css";
import React, { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { ListPage } from "./components/ListPage/ListPage";
import { Filter } from "./components/Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "./redux/actions";
import { Redirect, Route } from "react-router-dom";
import { fetchData } from "./api/api";

function App() {
  const dataLength = useSelector((state) => state.mainPage.itemsData.length);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dataLength === 0) {
      fetchData().then((data) => {
        dispatch(setItems(data));
      });
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="main">
          <Header />
          <div className="page">
            <Filter className="filter" />
            <Route exact path="/">
              <Redirect to="/list" />
            </Route>
            <Route
              path="/list"
              render={() => <ListPage selector="itemsData" />}
            />
            <Route
              path="/favorite"
              render={() => <ListPage selector="favoriteItems" />}
            />
            <Route
              path="/cart"
              render={() => <ListPage selector="cartItems" />}
            />
            <Route
              path="/compare"
              render={() => <ListPage selector="compareItems" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
