import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-light bg-light rounded"
      >
        <Link to="/">
          <div className="navbar-brand" style={letters}>
            <h3>BeHired</h3>
          </div>
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" style={letters}>
              <div className="nav-link" style={letters}>
                Home <span className="sr-only">(current)</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const letters = {
  color: "#20B6C9"
};

export default withRouter(Navbar);
