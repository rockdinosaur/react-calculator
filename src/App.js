import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'


class App extends Component {
  NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  OPERATIONS = ['+', '-', '*', '/'];

  state = {
    currentDisplay: 0,
    entered: [],
  }

  handleButtonClick = (n) => {
    //get top of stack
    let lastEntered = this.state.entered[this.state.entered.length - 1];

    //know if operation or number
    if (this.NUMBERS.includes(n) && this.NUMBERS.includes(lastEntered)) {
      let newNumber = lastEntered.concat(n);
      this.setState((prevState) => {
        const newStack = prevState.entered.slice(0, -1).concat(newNumber);
        return {entered: newStack};
      });
    } else {
      this.setState({entered: this.state.entered.concat(n)});
    }
  }

  render() {
    return (
      <div>
        <Display
          entered={this.state.entered}
        />
        <ButtonContainer
          operations={this.OPERATIONS}
          numbers={this.NUMBERS}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default App;
