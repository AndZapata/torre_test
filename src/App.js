import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar.component';
import Home from './components/home.component';
import Footer from './components/footer.component';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // single state of true
      username: '',
      features: [],
      techSkills: [],
      techCompany: ''
    };
  }

  // Handle diferent states filling the product description
  handleInputChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchPeople = async e => {
    const {
      username,
      features,
      techSkills,
      techCompany
    } = this.state;
    const userDisplay = {
      username,
      features,
      techSkills,
      techCompany
    };
    await axios.post(`http://localhost:5000/company`, userDisplay)
      .then(
        console.log(e)
      )
  };

  render() {
    return (
      <Router>
        <div className='d-flex flex-column' style={{ height: '100vh' }}>
          <Navbar />
          <Switch>
            <>
              <Route path='/' render={props => <Home {...props} username={this.state.username} features={this.state.features} techSkills={this.state.techSkills} techCompany={this.state.techCompany} onHandleInput={this.handleInputChange} searchPeople={this.searchPeople} />} />
            </>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
