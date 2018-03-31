let tags = ['packt', 'structural', 'packt', 'behavioral', 'es6', 'patterns', 'es6', 'es6'];
let reducedTags = {};
const reducer = (accumulator,tag) => {
    var tagInAccumulatorValue = accumulator[tag];
    accumulator[tag] = tagInAccumulatorValue ? tagInAccumulatorValue + 1 : 1;
    return accumulator;
};

const tagProcessor = (tags) => tags.reduce(reducer, reducedTags);

tagProcessor(tags); // {packt: 2, structural: 1, behavioral: 1, es6: 3, patterns: 1}