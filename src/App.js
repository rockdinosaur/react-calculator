import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'

class App extends Component {
  state = {
    currentDisplay: 0,
    entered: [],
  }

  handleButtonClick = (n) => {
    this.setState({entered: this.state.entered.concat(n)});
  }

  render() {
    return (
      <div>
        <Display
          entered={this.state.entered}
        />
        <ButtonContainer
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default App;
