import React from 'react';
const scaleNames = {  
  c: 'Celsius',  
  f: 'Fahrenheit'
};


// console.log(tryConvert('abc', toCelsius));
// console.log(tryConvert('10.22', toFahrenheit));

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;    
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>        
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;