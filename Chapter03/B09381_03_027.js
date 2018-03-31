const greetings = ['hello', 'dog', 'goodbye'];

const filterGreetings = (greetings) => {
    const filteredGreetings = [];
    for(let i = 0; i < greetings.length; i++) {
        let greeting = greetings[i];
        if(greeting !== 'dog') {
           filteredGreetings.push(greeting);
        }
    }
    return filteredGreetings;
}

filterGreetings(greetings); // ['hello', 'goodbye'];