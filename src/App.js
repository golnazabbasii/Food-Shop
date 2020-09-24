import React from "react";
import "./App.css";
import Layout from "./hoc/layout/layout";
import FoodBuilder from "./components/food/foodbuilder";
import Payment from "./components/payment/payment"
import { Route, Switch } from "react-router-dom";
import Login from "./components/contactData/login";
import Logout from "./components/contactData/logout"

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={FoodBuilder} />
          <Route path="/payment" component={Payment} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
