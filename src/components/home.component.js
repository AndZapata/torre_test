import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div className="container text-center mt-4">
        <h1>Looking for Top 10 people</h1>
        <div className="d-flex justify-content-center mt-4">
          <div className="input-group input-group-lg col-5">
            <div className="input-group-prepend">
              <span className="input-group-text" style={{ backgroundColor: "#20B6C9", color: "#ffffff" }} id="inputGroup-sizing-default">Name</span>
            </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="username" onChange={this.props.onHandleInput} value={this.props.username} />
          </div>
          <div className="btn-group col-4">
            <button type="button" className="btn btn-light dropdown-toggle" style={{ backgroundColor: "#20B6C9", color: "#ffffff" }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.props.onDisplayCompanies}>
              Companies
 </button>
            <div className="dropdown-menu col-11" style={{height: "40vh", overflowY: "scroll"}}>
              <ul className="list-group">
                {this.props.techCompany.map(item => (
                  <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.techCompany}
                  <input className="form-check-input" type="checkbox" onClick={this.props.onHandleInput} name="techCompanyId" defaultValue={item._id} />
                </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="btn btn-light col-3" style={{ backgroundColor: "#20B6C9", color: "#ffffff" }} onClick={this.props.searchPeople}>Search</div>
        </div>
      </div>
    );
  }
}

export default Home;
