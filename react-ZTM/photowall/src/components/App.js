import { connect } from "react-redux";
import Main from "./Main";
import { bindActionCreators } from "redux";
import * as actionCreators from "../redux/actions";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
