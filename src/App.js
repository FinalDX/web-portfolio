import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <Layout>
        <Home />
        <Projects />
        <Contact />
      </Layout>
    );
  }
}

export default App;
