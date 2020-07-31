import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import { Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  
  render () {
    return (
      <Layout> 
        <Switch>
          <Route path="/Contact" component={Contact} />
          <Route path="/Projects" component={Projects} />
          <Route path="/" exact component={Home} />
          <Redirect from="/" to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default App;
