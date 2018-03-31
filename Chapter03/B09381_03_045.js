const hyphenate = (word) => word.match(new RegExp(`.{1,${Math.floor(word.length/2)}}`, 'g')).join('-');

const reverse = (word) => word.split('').reverse().join('');

const toUpperCase = (word) => word.toUpperCase();

const words = ['web', 'design', 'patterns'];

let newWords = words.map(hyphenate);
newWords = newWords.map(reverse);
newWords = newWords.map(toUpperCase);


newWords; // ["B-E-W", "NGI-SED", "SNRE-TTAP"]