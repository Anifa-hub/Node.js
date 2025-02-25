const areas = require('./shape.js')
 const radius = 2;
 const length= 4;

 const circle = areas.circleArea(radius);
 const square = areas.squareArea(length);

 console.log(`The area of the circle is ${circle}`);
 console.log(`The area of the square is ${square}`);
