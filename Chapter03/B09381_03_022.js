let x = [a,b,c,d];
let y = x.reduce(ƒ, 0); // 

/* ƒ receives 4 parameters 
 * 1. accumulator 
 * 2. current value
 * 3. index
 * 4. the array that reduce is iterating.
 * 
 * ƒ returns the accumulated data 
*/

x === y; // false