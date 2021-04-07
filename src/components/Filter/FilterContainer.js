import { connect } from "react-redux";
import Filter from "./Filter";
import { setFilterValues } from "../../redux/filterReducer";

let mapStateToProps = (state) => ({
  values: state.filter,
});

export default connect(mapStateToProps, { setFilterValues })(Filter);
