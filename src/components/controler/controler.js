import Wrapper from "../../hoc/wrapper/wrapper";
import React, { Component } from "react";
import "./controler.css";

class Controler extends Component {
  render() {
    const typ = {
      kind: [
        { type: "hotDog",name:"هات داگ"},
        { type: "salad",name:"سالاد"},
        { type: "cheese",name:"پنیر"},
        { type: "tomato",name:"گوجه فرنگی"},
      ]
    };

    return (
      <Wrapper>
        <div className="row controler">
            <ul>
              {typ.kind.map((itm, ind) => {
                return (
                  <li key={ind}>
                    <button
                      className="btn btn-incre"
                      onClick={() => this.props.incre(itm.type)}
                    >
                      افزایش
                    </button>
                    <button
                      className="btn btn-decre"
                      onClick={() => this.props.decre(itm.type)}
                    >
                      کاهش
                    </button>
                    <span className="s-con">{itm.name}</span>
                  </li>
                );
              })}
            </ul>
            <p className="p-price">قیمت کل : <span className="s-price">{this.props.price} </span><span className="s-price">تومان </span></p>
            <button className="btn btn-shop " onClick={this.props.show}>{this.props.isAuth ? "لیست خرید" : "برای خرید ابتدا وارد شوید"}</button>
          </div>
      </Wrapper>
    );
  }
}

export default Controler;
