import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto">
        <div className="container-fluid bg-light">
          <div className="row">
            <div className="col-sm-6 mt-3">
              <p>
                Created by: <span>AndZapata514</span>
                <br />
                email: <span>andzapata514@gmail.com</span>
              </p>
            </div>
            <div className="col-sm-6 mt-4">
              <div className="page-footer float-right">
                <ul>
                  <a href="https://github.com/andzapata" style={{ color: "black" }}>
                    <i className="fab fa-github fa-2x p-2"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/paula-andrea-gutierrez-zapata-b77b00167/" style={{ color: "black" }}>
                    <i className="fab fa-linkedin-in fa-2x p-2"></i>
                  </a>
                  <a href="https://twitter.com/andzapata1" style={{ color: "black" }}>
                    <i className="fab fa-twitter fa-2x p-2"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
