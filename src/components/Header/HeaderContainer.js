import { connect } from "react-redux";
import { Header } from "./Header";

const mapStateToProps = (state) => ({
  favoriteLength: state.mainPage.favoriteItems.length,
  compareLength: state.mainPage.compareItems.length,
  cartLength: state.mainPage.cartItems.length,
});

export const HeaderContainer = connect(mapStateToProps, {})(Header);
