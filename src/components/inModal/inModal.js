import React, { Component } from "react";
import Wrapper from "../../hoc/wrapper/wrapper";
import Button from "../../UI/Button/button";
import { withRouter } from "react-router-dom";


const foodList = {
  kind: [
    { type: "hotDog", name: "هات داگ" },
    { type: "salad", name: "سالاد" },
    { type: "cheese", name: "پنیر" },
    { type: "tomato", name: "گوجه فرنگی" }
  ]
};

class InModal extends Component {
  getIndex(type) {
    const get = this.props.materials.filter(itm => itm.type === type).length;
    return get;
  }

  // payment = () => this.props.history.push("/payment");

  // continue = () => alert("آیا قصد ادامه فرایند خرید را دارید؟");

  // componentWillUpdate() {
  //   console.log("[summery]update");
  // }

  render() {
    const type1=foodList.kind.map(itm=>itm.type);
    // const type=this.props.materials.filter(itm => itm.type === type1).lengt

    return (
      <Wrapper>
        <h4>سبد خرید شما عبارت است از :</h4>
        <ul>
          {foodList.kind.map((itm, index) => (
            <li key={index}>
              <i className="i-wid"> {itm.name} : </i>
              <i className="i-color">{this.getIndex(itm.type)}</i>
              <span className="s-num">عدد</span>
            </li>
          ))}
        </ul>
        <Button btn="btn btn-default btn-mar" clicked={()=>this.props.payment(type1)}>
          پرداخت
        </Button>

        <Button btn="btn btn-info btn-mar" clicked={this.props.continue}>
          ادامه خرید
        </Button>
      </Wrapper>
    );
  }
}

export default withRouter(InModal);
