import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact path="/"
              component={() => (
                <div className="search-page">
                  <Header />
                </div>
              )}
            />
          </Switch>
        </BrowserRouter>
        <h1>this is my app</h1>
      </div>
    )
  }
}


export default App;
