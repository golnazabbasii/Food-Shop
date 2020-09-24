import React, { Component } from "react";
import Materials from "../materials/materials";
import "./food.css";

class ContentFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materials: []
    };
  }

  render() {
    return (
      <div>
        {this.props.materials.map((item, index) => {
          return (
            <div key={index}>
              <Materials types={item.type} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ContentFood;
