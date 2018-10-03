import { NavLink, withRouter } from "react-router-dom";
import React from "react";
import Style from "./sidenav.style";

class SideNav extends React.Component {
  render() {
    return(
      <Style className="sidenav">
        <ul>
          <li>
            <NavLink to="/readme">Readme</NavLink>
          </li>
          <li>
            <NavLink to="/setupCSS">Setup CSS</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Buttons</NavLink>
          </li>
          <li>
            <NavLink to="/grid">Grid System</NavLink>
          </li>
        </ul>
      </Style>
    );
  }
}

export default withRouter(SideNav);
