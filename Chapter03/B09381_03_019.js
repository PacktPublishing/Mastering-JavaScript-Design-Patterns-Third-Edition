let x = [a,b,c,d];
let y = x.map(ƒ);

/* ƒ receives three parameters 
 * 1. item
 * 2. index of the item in the array.
 * 3. the array that map is iterating.
 * 
 * ƒ returns a new item that will be added to the new array.
*/

x === y; // false