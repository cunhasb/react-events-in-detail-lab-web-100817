// Code CoordinatesButton Component Here

import React from 'react';

class CoordinatesButton extends React.Component{

  handleClick = (event) => {
    let coordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordinates)

  }
  render(){
    return(
      <div>
        <button type="button" onClick={this.handleClick}>Click Me!</button>
      </div>

    );
  }
}

export default CoordinatesButton;
