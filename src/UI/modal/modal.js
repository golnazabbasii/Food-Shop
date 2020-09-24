import React, { Component } from "react";
import "./modal.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.show !== nextProps.show || this.props.show;
  }

  // componentWillUpdate() {
  //   console.log("[modal] update");
  // }

  render() {
    return (
      <div
        className="box"
        style={{ display: this.props.show ? "block" : "none" }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
