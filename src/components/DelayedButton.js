// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{

   handleClick = (event)=> {
     event.persist();
     setTimeout(() => {
       this.props.onDelayedClick(event);
     },this.props.delay);
   }

   render(){
     return(
       <div>
          <button type="button" onClick={this.handleClick}>Click Me!</button>
       </div>
     );
   }
}

export default DelayedButton;
