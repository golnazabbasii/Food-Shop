import React, { Component } from "react";
import "./materials.css";
import PropTypes from "prop-types";

class Materials extends Component {
  render() {
    let mat = null;
    switch (this.props.types) {
      case "hotDog":
        mat = <div className="hotDog">هات داگ</div>;
        break;
      case "salad":
        mat = <div className="salad">کاهو</div>;
        break;
      case "cheese":
        mat = <div className="cheese">پنیر</div>;
        break;
      case "tomato":
        mat = <div className="tomato">گوجه فرنگی</div>;
        break;
      default:
        mat = null;
    }

    return mat;
  }
}

Materials.propTypes = {
  types: PropTypes.string.isRequired
};

export default Materials;
