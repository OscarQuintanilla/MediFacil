import React, { Component } from 'react';
import './App.css';
import fire from './firebase';
import Login from './login';

class Home extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="Home">
        {this.state.user ? (
          <p>Hola Cayola</p>
        ) :
          (
            <Login />
          )}
      </div>
    );
  }
}
export default Home;