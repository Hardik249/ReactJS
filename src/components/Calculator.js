import React from 'react';
import BoilingVerdict from './BoilingVerdict.js';
import TemperatureInput from './TemperatureInput.js';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  console.log(temperature);
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: '', scale: 'c'};  
  }

  handleChange(e) {
    console.log(e);
    this.setState({temperature: e.target.value});
    // this.props.onTemperatureChange(e.target.value);
  }

  handleCelsiusChange(temperature) {
    console.log('t1', temperature);
    this.setState({scale: 'c', temperature});  
  }

  handleFahrenheitChange(temperature) {
    console.log('t2', temperature);
    this.setState({scale: 'f', temperature});  
  }

  render() {
    // const temperature = this.state.temperature;
    // const temperature = this.props.temperature;
    const scale = this.state.scale;    
    const temperature = this.state.temperature;    
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;    
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    console.log('1', celsius);
    console.log('2', fahrenheit);
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}          
          onTemperatureChange={this.handleCelsiusChange} />        
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}          
          onTemperatureChange={this.handleFahrenheitChange} />        
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
        {/*<TemperatureInput scale="c" />        
                <TemperatureInput scale="f" />*/}
      </div>
      /*<fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input          
        value={temperature}          
        onChange={this.handleChange} />        
        <BoilingVerdict          
        celsius={parseFloat(temperature)} />      
      </fieldset>*/
    );
  }
}

// class Calculator extends React.Component {
//   render() {
//     return (
//       <div>
//         <TemperatureInput scale="c" />        
//         <TemperatureInput scale="f" />      
//       </div>
//     );
//   }
// }

export default Calculator;