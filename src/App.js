
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main_Content from './components/Main_Content';
import { Link } from 'react-router';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main_Content />
        <Footer />
      </div>
    );
  }
}

export default App;