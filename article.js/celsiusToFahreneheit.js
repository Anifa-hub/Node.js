// // const { celsiusToFahrenheit } = require('./converters.js');
// const { celsiusToFahrenheit } = require('./converters.js');

// const celsiusInput = process.argv[2];
// const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
// console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);


const { celsiusToFahrenheit } = require('./converters.js');

const celsiusInput = process.argv[2]; 
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);
