import React from 'react';

class ButtonContainer extends React.Component {
  handleButtonClick = (n) => {
    this.props.handleButtonClick(n);
  }

  numbers = () => {
    return this.props.numbers.map(n => {
      return (<NumberButton
                number={n}
                handleButtonClick={this.handleButtonClick}
              />)
    })
  }

  operations = () => {
    return this.props.operations.map(n => {
      return (<OperationButton
                operation={n}
                handleButtonClick={this.handleButtonClick}
              />)
    })
  }

  render() {
    return (
      <div>
        {this.operations()}
        <br/>
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
