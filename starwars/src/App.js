import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Characters from './components/Characters';
import Pages from './components/Pages';
import Dogs from './components/DogsPage/Dogs'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      url: 'https://swapi.co/api/people/?page=',
      current: 1,
      firstPage: 'https://swapi.co/api/people/',
      dog: ''
    };
  }

  nextPage = (url, current) => {
    this.getCharacters(`${url}${current + 1}`)
    this.setState({ current: this.state.current + 1 })
  }

  prevPage = (url, current) => {
    this.getCharacters(`${url}${current - 1}`)
    this.setState({ current: this.state.current - 1 })
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
    this.getDogs(`https://dog.ceo/api/breed/hound/images/random`)
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getDogs = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ dog: data.message });
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  render() {
    
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Pages 
                url = { this.state.url }
                current = { this.state.current }
                nextPage = { this.nextPage }
                prevPage = { this.prevPage }
              />
              <Characters
                characters = { this.state.starwarsChars }
              />
            </React.Fragment>
          )} />
          <Route path="/dogs" render={props =>(
            <Dogs 
              dog = { this.state.dog }
            />
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
