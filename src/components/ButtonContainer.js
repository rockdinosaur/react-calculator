import React from 'react';

class ButtonContainer extends React.Component {
  handleButtonClick = (n) => {
    this.props.handleButtonClick(n);
  }

  numbers = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => {
      return (<NumberButton
                number={n}
                handleButtonClick={this.handleButtonClick}
              />)
    })
  }

  render() {
    return (
      <div>
        {this.numbers()}
      </div>
    )
  }
}

class NumberButton extends React.Component {
  handleButtonClick = () => {
    this.props.handleButtonClick(this.props.number);
  }

  render() {
    return (
      <button onClick={this.handleButtonClick}>
        {this.props.number}
      </button>
    )
  }
}

class OperationButton extends React.Component {
  handleButtonClick = () => {
    this.props.handleButtonClick(this.props.operation);
  }

  render() {
    return (
      <button onClick={this.handleButtonClick}>
        {this.props.operation}
      </button>
    )
  }
}

export default ButtonContainer;
