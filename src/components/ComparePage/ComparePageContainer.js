import React from 'react'
import {connect} from "react-redux";
import {ListPage} from "../ListPage/ListPage";
import {toggleCart, toggleCompare, toggleFavorite} from "../../redux/listReducer";
import {filtering} from "../ListPage/ListPageContainer";

const ComparePageContainer = (props) => {
    let filteredItems = props.itemsData.filter(item => filtering(item, props.filterValues) )
    return (
        <ListPage filteredItems={filteredItems} {...props} />
    )
}
const mapStateToProps = (state) => ({
    filterValues: state.filter,
    itemsData: state.mainPage.itemsData.filter(item => item.compare)
})

export default connect(mapStateToProps, {toggleFavorite, toggleCart, toggleCompare})(ComparePageContainer)