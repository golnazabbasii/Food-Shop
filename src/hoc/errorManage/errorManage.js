import React, { Component } from "react";
import Wrapper from "../wrapper/wrapper";
import Modal from "../..//UI/modal/modal";

const ErrorManage = (NameComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentDidMount() {
      this.reqinterceptors = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resinterceptors = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqinterceptors);
      axios.interceptors.request.eject(this.resinterceptors);
    }
    render() {
      return (
        <Wrapper>
          <Modal show={this.state.error}>
            {this.state.error ? (
              <p style={{ color: "white" }}>{this.state.error.message}</p>
            ) : null}
          </Modal>
          <NameComponent />
        </Wrapper>
      );
    }
  };
};

export default ErrorManage;
