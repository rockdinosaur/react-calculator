import React from 'react';

class Display extends React.Component {
  render() {
    return(
      <div>
        {this.props.entered.join(', ')}
      </div>
    )
  }
}

export default Display;
