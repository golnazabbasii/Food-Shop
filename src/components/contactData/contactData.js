import React, { Component } from "react";
import {connect} from "react-redux"
import Button from "../../UI/Button/button";
import Classes from "./contactData.module.css";
import axios from "axios";
import Loading from "../../UI/loading/loading";
import Input from "../../UI/backdrop/input/input";

class ContactData extends Component {
  state = {
    loading: true,
    validity: false,
    typesInput: {
      name: {
        types: "input",
        value: "",
        label: "نام و نام خانوادگی :",
        elementConfig: {
          placeholder: "نام و نام خانوادگی",
          type: "text"
        },
        validation: {
          requaired: true,
          maxCharacter: 15,
          minCharacter: 3
        },
        valid: false,
        touched: false,
        star: false
      },
      email: {
        types: "input",
        value: "",
        label: "ایمیل :",
        elementConfig: {
          placeholder: "پست الکترونیکی خود را وارد کنید",
          type: "text"
        },
        validation: {
          requaired: true,
          patern: true,
      
        },
        valid: false,
        touched: false,
        star: false
      },
      address: {
        types: "input",
        value: "",
        label: "آدرس :",
        elementConfig: {
          placeholder: "آدرس دقیق خود را وارد کنید",
          type: "text"
        },
        validation: {
          requaired: true,
          ok: true
        },
        valid: true,
        star: false
      },
      delivery: {
        types: "select",
        label: "شیوه ارسال :",
        value: "",
        elementConfig: [
          { value: "ارسال", label: "ارسال با..." },
          { value: "پیشتاز", label: "ارسال با پست پیشتاز" },
          { value: "اکسپرس", label: "ارسال با پست اکسپرس" },
        ],
        validation: {
          requaired: true,
          ok: true
        },
        valid: true,
        star: true
      }
    }
  };

  saveData = e => {
    const x = this.state.typesInput;
    for (let keys in x) {
      if (!x[keys].star) {
        e.preventDefault();
        alert("فیلد مورد نظر را پر کنید");
      }
    }
    this.setState({ loading: false });
    const obj = {};
    for (let key in this.state.typesInput) {
      const dataVal = this.state.typesInput[key].value;
      obj[key] = dataVal;
    }
    const data = {
      product: this.props.materials,
      price: this.props.price,
      obj
      // user: "golnazabbasii",
      // address: "تهران",
      // name: "گلناز عباسی"
    };
    axios
      .post("posts", data)
      .then(res => {
        console.log(res);
        this.setState({ loading: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  checkValidity(value, rules) {
    let isValid = false;
    if (rules.requaired) {
      isValid =
        value.trim() !== "" &&
        value.length < rules.maxCharacter &&
        value.length > rules.minCharacter;
    };
    if (rules.patern) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase())
  }
    if (rules.ok) {
      return true;
    }
    return isValid;
  }

  getData = (event, id) => {
    const updateInput = {
      ...this.state.typesInput
    };
    const nextInput = {
      ...updateInput[id]
    };
    nextInput.value = event.target.value;
    nextInput.valid = this.checkValidity(nextInput.value, nextInput.validation);
    nextInput.star = this.checkValidity(nextInput.value, nextInput.validation);
    // let validity = true;
    // for (let keys in updateInput) {
    //   validity = updateInput[keys].valid && validity;
    // }
    nextInput.touched = nextInput.value;
    console.log(updateInput);
    updateInput[id] = nextInput;
    this.setState({ typesInput: updateInput});
  };

  render() {
    let FormData = [];
    for (let key in this.state.typesInput) {
      FormData.push({
        id: key,
        config: this.state.typesInput[key]
      });
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 backg">
            <h4 className={Classes.h}>لطفا اطلاعات خود را وارد نمایید</h4>
            {this.state.loading ? (
              <form className="form-group text-right">
                {FormData.map(item => (
                  <Input
                    key={item.id}
                    types={item.config.types}
                    elementConfig={item.config.elementConfig}
                    val={item.config.value}
                    label={item.config.label}
                    Classes={Classes.select}
                    getData={event => this.getData(event, item.id)}
                    valid={item.config.valid}
                    touched={item.config.touched}
                    star={!item.config.star}
                  />
                ))}
              </form>
            ) : (
              <Loading />
            )}

            <Button btn="btn btn-success" clicked={this.saveData}>
              ثبت اطلاعات
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps= state=>{
  return{
    materials:state.food.materials,
    price: state.food.price
  }
}
export default connect(mapStateToProps)(ContactData);
