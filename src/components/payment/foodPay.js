import React, { Component } from "react";
import { connect } from "react-redux";
import Materials from "../materials/materials";
import Button from "../../UI/Button/button";
import "./payment.css";
import { withRouter, Route, Redirect } from "react-router-dom";
import ContactData from "../contactData/contactData";

class FoodPay extends Component {
  state = {
    // kind: [],
    // price: 0,
    loading: true
    //  { type: "hotDog", name: "هات داگ" },
    // { type: "salad", name: "سالاد" },
    // { type: "cheese", name: "پنیر" },
    // { type: "tomato", name: "گوجه فرنگی" }
  };

  back = () => {
    this.props.history.goBack();
  };
  sendData = () => this.props.history.replace("/payment/contactData");

  // componentDidMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const obj = [];
  //   let i = 1;
  //   let newPrice = 0;
  //   for (let param of query.entries()) {
  //     if (param[0] === "price") {
  //       newPrice = param[1];
  //     } else {
  //       for (i; i <= param[1]; i++) {
  //         obj.push({ type: param[0] });
  //       }
  //       i = 1;
  //     }
  //   }

  //   this.setState({ kind: obj, price: newPrice });
  // }

  render() {
    // this.state.kind.map((itm,ind)=>{
    //   console.log('emad ' + itm.type);
    // })
    let payment = (
      <div className="container" style={{ minHeight: 600 }}>
        <h4 className="h">آیا از انتخاب خود مطمن هستید؟</h4>
        {this.props.materials.map((itm, ind) => (
          <div key={ind}>
            <Materials types={itm.type} />
          </div>
        ))}
        {/* <Materials types={this.state.kind} /> */}
        <Button btn="btn mar btn-info " clicked={this.sendData}>
          ارسال اطلاعات
        </Button>
        <Button btn="btn mar btn-default" clicked={this.back}>
          انصراف
        </Button>
        <Route
          path={this.props.match.path + "/contactData"}
          component={ContactData}
        />
      </div>
    );
    if (!this.props.isAuth) {
      payment = <Redirect to="/" />;
    }
    return payment;
  }
}

const mapStateToProps = state => {
  return {
    materials: state.food.materials,
    price: state.food.price,
    isAuth: state.auth.token
  };
};

export default connect(mapStateToProps)(withRouter(FoodPay));
