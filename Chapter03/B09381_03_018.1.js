const greet = (greeting) => (name) => `${greeting} ${name}!`;

var sayHelloTo = greet('Hello');
sayHelloTo('Douglas');  // Hello Douglas!