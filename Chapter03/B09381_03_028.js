const greetings = ['hello', 'dog', 'goodbye'];

const removeDog = (item) => {
    return item !== 'dog';
};
const filterGreetings = (greetings) => greetings.filter(removeDog);

filterGreetings(greetings); // ['hello', 'goodbye']