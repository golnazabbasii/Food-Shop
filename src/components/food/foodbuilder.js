import React, { Component } from "react";
import Wrapper from "../../hoc/wrapper/wrapper";
import {connect} from "react-redux"
// import ErrorManage from "../../hoc/errorManage/errorManage";
import Controler from "../controler/controler";
import "./food.css";
import Food from "./food";
import Modal from "../../UI/modal/modal";
import InModal from "../inModal/inModal";
import BackDrop from "../../UI/backdrop/backdrop";
import Loading from "../../UI/loading/loading";
import Logo from "../logo/logo";


// const foodPrice = {
//   hotDog: 10000,
//   salad: 8000,
//   cheese: 5000,
//   tomato: 2000
// };

class FoodBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // materials: [],
      // price: 0,
      show: false,
      loading: true
    };
  }

  // increment = type => {
  //   const arr = this.state.materials;
  //   const oldPrice = this.state.price;

  //   this.setState({
  //     materials: arr.concat({ type: type }),
  //     price: oldPrice + foodPrice[type]
  //   });

  //   // if (type === "hotDog") {
  //   //   this.setState({ materials: arr.concat({ type: "hotDog" }) });
  //   // }

  //   // if (type === "cheese") {
  //   //   this.setState({ materials: arr.concat({ type: "cheese" }) });
  //   // }

  //   // if (type === "tomato") {
  //   //   this.setState({ materials: arr.concat({ type: "tomato" }) });
  //   // }

  //   // if (type === "salad") {
  //   //   this.setState({ materials: arr.concat({ type: "salad" }) });
  //   // }
  // };

  // decrement = type => {
  //   const arr = this.state.materials;
  //   const oldPrice = this.state.price;
  //   let newPrice = oldPrice;
  //   const newarr = [];
  //   const ind1 = arr.findIndex(itm => {
  //     if (itm.type === type) {
  //       return itm.type;
  //     }
  //   });

  //   arr.map(function(obj, index) {
  //     if (obj.type !== type || index !== ind1) {
  //       newarr.push(obj);
  //     }

  //     return obj;
  //   });

  //   arr.map(function(obj, index) {
  //     if (obj.type === type || index === ind1) {
  //       newPrice = oldPrice - foodPrice[type];
  //     }
  //     return newPrice;
  //   });

  //   this.setState({ materials: newarr, price: newPrice });

  //   // if (type === "هات داگ") {
  //   //   arr.map(function(obj, index) {
  //   //     if (obj.type !== "hotDog" || index !== ind3) {
  //   //      newarr.push(obj);
  //   //     }
  //   //     return obj
  //   //   });
  //   //   this.setState({ materials: newarr });
  //   // }

  //   // if (type === "پنیر") {
  //   //   arr.map(function(obj, index) {
  //   //     if (obj.type !== "cheese" || index !== ind1) {
  //   //       newarr.push(obj);
  //   //     }
  //   //     return obj
  //   //   });
  //   //   this.setState({ materials: newarr });
  //   // }

  //   // if (type === "گوجه فرنگی") {
  //   //   arr.map(function(obj, index) {
  //   //     if (obj.type !== "tomato" || index !== ind2) {
  //   //       newarr.push(obj);
  //   //     }
  //   //     return obj
  //   //   });
  //   //   this.setState({ materials: newarr });
  //   // }

  //   // if (type === "سالاد") {
  //   //   arr.map(function(obj, index) {
  //   //     if (obj.type !== "salad" || index !== ind4) {
  //   //       newarr.push(obj);
  //   //     }
  //   //     return obj
  //   //   });
  //   //   this.setState({ materials: newarr });
  //   // }
  // };

  isShow = () => {
    if(this.props.isAuth){
      this.setState({ show: true })
    }else{
      this.props.history.push("/login")
    }
  };
  isHide = () => this.setState({ show: false });

  // continue = () => {
  //   this.setState({ loading: false });
  //   const data = {
  //     product: this.state.materials,
  //     price: this.state.price,
  //     user: "golnazabbasii",
  //     address: "تهران",
  //     name: "گلناز عباسی"
  //   };
  //   axios
  //     .post("posts", data)
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ loading: true });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  payment = () => {
    this.props.history.push("/payment" );
    // const queryParams = [];
    // const price = this.state.price;
    // const tool = this.state.materials.map(itm => itm.type);

    // const y = [];

    // tool.map(itm => {
    //   if (!y[itm]) {
    //     y[itm] = 1;
    //   } else {
    //     y[itm]++;
    //   }

    //   return false;
    // });

    // // console.log(y);
    // // console.log(typeof y);
    // // console.log(typeof numbers);

    // Object.entries(y).map(itm => {
    //   return queryParams.push(encodeURIComponent(itm[0]) + "=" + itm[1]);
    // });

    // queryParams.push("price=" + price);

    // const queryString = queryParams.join("&");
  };

  render() {

    return (
      <Wrapper>
        <Logo />
        {this.state.show ? <BackDrop hide={this.isHide} /> : null}
        <Modal show={this.state.show}>
          {this.state.loading ? (
            <InModal
              materials={this.props.materials}
              continue={this.continue}
              payment={this.payment}
            />
          ) : (
            <Loading />
          )}
        </Modal>
        <div className="top-part">
          <div className="bread-top">نان ساندویچ</div>
          <Food materials={this.props.materials} />
          <div className="bread-top">نان ساندویچ</div>
        </div>
        <Controler
          mater={this.props.materials}
          incre={this.props.increment}
          decre={this.props.decrement}
          price={this.props.price}
          show={this.isShow}
          isAuth={this.props.isAuth}
        />
      </Wrapper>
    );
  }
};
 const mapStateToProps= state=>{
   return{
     materials:state.food.materials,
     price: state.food.price,
     isAuth: state.auth.token
   }
 }

 const mapDispatchToProps= dispatch=>{
   return{
      increment: (types)=>dispatch({type:"INCRE",name:types}),
      decrement: (types)=>dispatch({type:"DECRE",name:types})
   }
 }

export default connect(mapStateToProps,mapDispatchToProps)( FoodBuilder);
