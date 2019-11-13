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
      techSkills: [],
      techCompany: [],
      techCompanyId: '',
      usersObject: []
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
      techCompanyId
    } = this.state;
    await axios
      .get(`http://localhost:5000/stack/${techCompanyId}`)
      .then(response => {
        response.data.applicationData.forEach(async item => {
          await this.setState({ techSkills: [...this.state.techSkills, item] });
        });
        response.data.utilities.forEach(async item => {
          await this.setState({ techSkills: [...this.state.techSkills, item] });
        });
        response.data.devOps.forEach(async item => {
          await this.setState({ techSkills: [...this.state.techSkills, item] });
        });
        response.data.bussinessTools.forEach(async item => {
          await this.setState({ techSkills: [...this.state.techSkills, item] });
        });
      })
      .catch(err => console.log(err));
    await axios.post('http://localhost:5000/comparison', {
      username
    })
      .then(async res => {
        await res.data.forEach(async user => {
          await axios.post(`http://localhost:5000/comparison/${user.publicId}`, {
            userId: user.publicId
          })
            .then(async res => {
              let newA = []
              for (let i of res.data) {
                for (let j of this.state.techSkills) {
                  if (i === j) {
                    newA.push(i)
                  }
                }
              }
              let unique = [...new Set(newA)]
              if (unique.length > 0) {
                await axios.post(`http://localhost:5000/data`, {
                  username: user.publicId,
                  name: user.name,
                  strengths: unique,
                  picture: user.picture
                })
                  .then(async res => {
                    await this.setState({
                      usersObject: [...this.state.usersObject, res.data]
                    })
                  })
                  .catch(err => console.log(err));
              }
            })
            .catch(err => console.log(err));
        })
      })
      .catch(err => console.log(err))
  };

  displayCompanies = async () => {
    axios.get(`http://localhost:5000/stack`)
      .then(async res => {
        res.data.forEach(async item => {
          await this.setState({
            techCompany: [...this.state.techCompany, item]
          })
        })
      })
      .catch(async err => { console.log(err); })
  }

  render() {
    return (
      <Router>
        <div className='d-flex flex-column' style={{ height: '100vh' }}>
          <Navbar />
          <Switch>
            <>
              <Route path='/' render={props => <Home {...props}
              username={this.state.username}
              techSkills={this.state.techSkills}
              techCompany={this.state.techCompany}
              techCompanyId={this.state.techCompanyId}
              onHandleInput={this.handleInputChange}
              searchPeople={this.searchPeople}
              onDisplayCompanies={this.displayCompanies}
              usersObject={this.state.usersObject}
              />} />
            </>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
