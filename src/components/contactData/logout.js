import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actios from "../../store/actions/actionTypes";

class Logout extends Component {
  componentDidMount() {
    return this.props.token();
  }

  render() {
    return <Redirect to="/" />;
  }
}
const mapStateToProps = dispatch => {
  return {
    token: () => dispatch({ type: actios.logout })
  };
};
export default connect(
  null,
  mapStateToProps
)(Logout);
