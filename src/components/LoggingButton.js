import React from 'react';
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
    alert('You clicked submit.');
  }

  render() {
    // This syntax ensures `this` is bound within handleClick    
    return (      
      <button onClick={() => this.handleClick()}>        
      Click me
      </button>
    );
  }
}

export default LoggingButton;