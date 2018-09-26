import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Button } from "@alchemyalcove/ether";
import React from "react";
import Readme from "./readme";
import SetupCSS from "./setupCSS";
import SideNav from "./sidenav";
import Style from "./app.style";

class App extends React.Component {
  render() {
    return(
      <Style className="app">
        <h1>Ether - Component Library</h1>
        <BrowserRouter>
          <div className="main-container">
            <SideNav/>
            <div className="main-body">
              <Switch>
                <Route path="/setupCSS" component={SetupCSS}/>
                <Route path="/readme" component={Readme}/>
                <Redirect path="/" to="/readme"/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Style>
    );
  }
}

export default App;
