var greet = function (greeting) {
    return function (name) {
        return greeting + ' ' + name + '!';
    };
};

var sayHelloTo = greet('Hello');
sayHelloTo('Douglas');  // Hello Douglas!