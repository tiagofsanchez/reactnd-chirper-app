import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" exact activeClassName="active">
              New Tweet
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
