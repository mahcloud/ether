import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Buttons from "./buttons";
import Grid from "./grid";
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
                <Route path="/readme" component={Readme}/>
                <Route path="/setupCSS" component={SetupCSS}/>
                <Route path="/buttons" component={Buttons}/>
                <Route path="/grid" component={Grid}/>
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
