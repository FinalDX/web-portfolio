import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import { Route } from 'react-router-dom';

class App extends Component {
  
  render () {
    return (
      <Layout> 
        <Route path="/Contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
        <Route path="/" exact component={Home} />
      </Layout>
    );
  }
}

export default App;
