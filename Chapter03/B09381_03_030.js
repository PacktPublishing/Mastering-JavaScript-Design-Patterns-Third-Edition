/*
 * filterByTwoMatches 
 * Gets a bill as a parameter and returns true if it has two product matches.
 * @param {Object} bill 
 * @returns boolean
 */
export const filterByTwoMatches = (bill) => bill.items.productMatches === 2;