import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div className="container text-center mt-4">
        <h1>Looking for Top people</h1>
        <div className="row d-flex justify-content-center mt-4">
          <div className="input-group input-group-lg col-3 p-0">
            <div className="input-group-prepend">
              <span className="input-group-text"
                style={{ backgroundColor: "#20B6C9", color: "#ffffff" }}
                id="inputGroup-sizing-default"> Name </span>
            </div>
            <input type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="username" onChange={this.props.onHandleInput}
              value={this.props.username} />
          </div>
          <div className="btn-group col-2 p-0">
            <button type="button"
              className="btn btn-light dropdown-toggle"
              style={{ backgroundColor: "#20B6C9", color: "#ffffff" }}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={this.props.onDisplayCompanies}>
              Companies
 </button>
            <div className="dropdown-menu col-11"
              style={{ height: "40vh", overflowY: "scroll" }}>
              <ul className="list-group">
                {this.props.techCompany.map(item => (
                  <li key={item._id}
                    className="list-group-item d-flex justify-content-between align-items-center pl-5">
                    {item.techCompany}
                    <input className="form-check-input"
                      type="checkbox"
                      name="techCompanyId"
                      value={item._id}
                      onClick={this.props.onHandleInput} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button className="btn btn-light col-2"
            style={{ backgroundColor: "#20B6C9", color: "#ffffff" }}
            onClick={this.props.searchPeople}> Search </button>
          <button className="btn btn-light col-2"
            style={{ backgroundColor: "#3C7A89", color: "#ffffff" }}
            onClick={this.props.onNewSearch}> New Search </button>
        </div>
        <div className="container mt-3">
          <div className="row mx-auto">
            {this.props.usersObject.map(item => (
              <div className="col-lg-4 col-sm-6 mb-3" key={item._id}>
                <div className="card mx-auto shadow p-3 mb-5 bg-white rounded border-light"
                  style={{ maxWidth: "18rem" }}>
                  <img
                    src={item.picture}
                    className="card-img-top d-block img-fluid rounded mx-auto w-50 mt-3"
                    alt="Profile pic"
                  />
                  <div className="card-body">
                    <h4 className="card-title" >{item.name}</h4>
                    <ul className="list-group">
                      {item.strengths.map(strength => (
                        <li className="card-text list-group-item"
                          style={{ backgroundColor: "#E5F6F8" }}
                          key={strength}>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
