import React from 'react'
import {Route} from "react-router-dom";
import ListPageContainer from "../ListPage/ListPageContainer";
import FavoritePageContainer from "../FavoritePage/FavoritePageContainer";
import CartPageContainer from "../CartPage/CartPageContainer";
import ComparePageContainer from "../ComparePage/ComparePageContainer";
import s from './MainPage.module.css'
import FilterContainer from "../Filter/FilterContainer";

export const MainPage = (props) => {

    return (
        <div className={s.mainPage}>
            <FilterContainer />
            <Route path='/list' render={() => <ListPageContainer/>}/>
            <Route path='/favorite' render={() => <FavoritePageContainer/>}/>
            <Route path='/cart' render={() => <CartPageContainer/>}/>
            <Route path='/compare' render={() => <ComparePageContainer/>}/>
        </div>
    )
}

