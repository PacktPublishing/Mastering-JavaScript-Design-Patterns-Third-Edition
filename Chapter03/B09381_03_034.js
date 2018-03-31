const { Map } = require('immutable');
const map = Map({ a: { fullname: 'John Doe' }, b: { fullname: 'Jane Doe' } });
const set1 = map.set('a', { fullname: 'James Sullivan' });
const set2 = map.set('a', { fullname: 'Joe McCloud' });

set1.get('a') !== set2.get('a') && set1.get('b') === set2.get('b');    // true