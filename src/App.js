import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
import Drilldown from 'react-router-drilldown';
import Header from './components/Header.js';
import Home from './components/Home.js';
import styled from 'styled-components';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router
        history={history}
        >
          <div>
            <Header page=""/>
            <Drilldown>
              <Route exact path="/" component={Home}/>
            </Drilldown>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
