const compose = (...fns) => fns.reverse().reduce((prevFn, nextFn) =>
    value => nextFn(prevFn(value)),
    value => value
);
const hyphenate = (word) => word.match(new RegExp(`.{1,${Math.ceil(word.length/2)}}`, 'g')).join('-');

const reverse = (word) => word.split('').reverse().join('');

const toUpperCase = (word) => word.toUpperCase();

const composed = compose(hyphenate, reverse, toUpperCase);

const words = ['web', 'design', 'patterns'];

words.map(composed); // ["BE-W", "NGI-SED", "SNRE-TTAP"]