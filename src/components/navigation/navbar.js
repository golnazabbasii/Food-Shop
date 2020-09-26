import React, { Component } from "react";
import Wrapper from "../../hoc/wrapper/wrapper";
import { connect } from "react-redux";

import Menu from "./menu";
import Classes from "./navigation.module.css";
import BackDrop from "../../UI/backdrop/backdrop";
import img from "../logo/images/pizza.jpg";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false
    };
  }

  toggle = () => this.setState({ toggleMenu: !this.state.toggleMenu });
  toggle1=() => this.state.toggleMenu;
  render() {
    return (
      <Wrapper>
        {this.state.toggleMenu ? <BackDrop hide={this.toggle} /> : null}

        <div className={Classes.pad}>
          <header>
            <nav className={this.state.toggleMenu ? Classes.nav : null}>
              {this.state.toggleMenu ? null : (
                <p className={Classes.menuToggle} onClick={this.toggle}>
                  <span className={Classes.iconDrawer}></span>
                </p>
              )}
              {this.state.toggleMenu ? (
                <div className={Classes.border}>
                  <img src={img} className={Classes.img} alt="لوگو" />
                </div>
              ) : null}
              <ul className={Classes.ul}>
                <NavLink to="/" exact activeClassName={Classes.myactive}>
                  <Menu class={this.state.toggleMenu ? null : Classes.li} clicked={this.toggle}>
                    صفحه ی اصلی
                  </Menu>
                </NavLink>
                <NavLink to="/payment" activeClassName={Classes.myactive}>
                  <Menu class={this.state.toggleMenu ? null : Classes.li} clicked={this.toggle}>
                    پرداخت نهایی
                  </Menu>
                </NavLink>
                {!this.props.token ? (
                  <NavLink to="/login" activeClassName={Classes.myactive}>
                    <Menu class={this.state.toggleMenu ? null : Classes.li} clicked={this.toggle}>
                      ورود
                    </Menu>
                  </NavLink>
                ) : (
                  <NavLink to="/Logout" activeClassName={Classes.myactive}>
                    <Menu class={this.state.toggleMenu ? null : Classes.li}>
                      خروج
                    </Menu>
                  </NavLink>
                )}
              </ul>
            </nav>
          </header>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(Navigation);
