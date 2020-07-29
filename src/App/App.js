import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm'

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
                  <SearchForm />
                </div>
              )}
            />
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}


export default App;
