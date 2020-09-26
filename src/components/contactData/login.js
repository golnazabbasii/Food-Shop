import React, { Component } from "react";
import Input from "../../UI/backdrop/input/input";
import Classes from "./contactData.module.css";
import { connect } from "react-redux";
import * as authAction from "../../store/actions/auth";
import Loading from "../../UI/loading/loading";
import { Redirect } from "react-router-dom";
import Button from "../../UI/Button/button";

class Login extends Component {
  state = {
    controls: {
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
          patern: true
        },
        valid: false,
        touched: false,
        star: false
      },
      pasword: {
        types: "input",
        value: "",
        label: "پسورد :",
        elementConfig: {
          placeholder: "رمز عبور",
          type: "text"
        },
        validation: {
          requaired: true,
          maxCharacter: 20,
          minCharacter: 6
        },
        valid: false,
        touched: false
      }
    }
  };

  checkValidity(value, rules) {
    let isValid = false;
    if (rules.requaired) {
      isValid =
        value.trim() !== "" &&
        value.length < rules.maxCharacter &&
        value.length > rules.minCharacter;
    }
    if (rules.patern) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    }
    return isValid;
  }

  getData = (event, id) => {
    const updateInput = {
      ...this.state.controls
    };
    const nextInput = {
      ...updateInput[id]
    };
    nextInput.value = event.target.value;
    nextInput.valid = this.checkValidity(nextInput.value, nextInput.validation);
    // nextInput.star = this.checkValidity(nextInput.value, nextInput.validation);
    // let validity = true;
    // for (let keys in updateInput) {
    //   validity = updateInput[keys].valid && validity;
    // }
    nextInput.touched = nextInput.value;
    console.log(updateInput);
    updateInput[id] = nextInput;
    this.setState({ controls: updateInput });
  };

  submit = e => {
    const value = this.state.controls.email.value;
    const pas = this.state.controls.pasword.value;
    e.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.pasword.value
    );
    if (value === "" && pas === "") {
      alert("لطفا فیلد مورد نظر را پر کنید");
    }
  };
  render() {
    let FormData = [];
    for (let key in this.state.controls) {
      FormData.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    let form = (
      <form className="form-group text-right" onSubmit={this.submit}>
        {FormData.map(item => (
          <Input
            key={item.id}
            types={item.config.types}
            elementConfig={item.config.elementConfig}
            val={item.config.value}
            label={item.config.label}
            getData={event => this.getData(event, item.id)}
            valid={item.config.valid}
            touched={item.config.touched}
          />
        ))}
        {!this.props.load ? (
          <Button btn="btn btn-success">ورود</Button>
        ) : (
          <Loading />
        )}
      </form>
    );
    for(let key in this.state.FormData){
      if(this.props.isAuth || this.state.FormData[key].valid){
        form = <Redirect to="/" />
      } else{
        alert("لطفا اطلاعات صحیح را وارد نمایید")
      }
    }
    // if (this.props.isAuth) {
    //   form = <Redirect to="/" />;
    // }

    return (
      <div className="container" style={{ minHeight: 600 }}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 backg">
            <h4 style={{ color: "white" }}>لطفا اطلاعات خود را وارد نمایید</h4>
            {form}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    load: state.auth.loading,
    isAuth: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, pasword) => dispatch(authAction.auth(email, pasword))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
