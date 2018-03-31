import { flattenItems } from './reducers';

/**
 * flattenBill
 * Gets a bill as a parameter and returns a new object with only
 * the needed for the purpose. 
 * The object contains two properties:
 * - waiter => Name of the waiter
 * - items => A new object with the cost of the whole bill and how many product matches the expected types
 * @param {Object} bill 
 * @returns Object
 */
export const flattenBill = (bill) => { 
    return {
        waiter: bill.waiter,
        items: bill.items.reduce(flattenItems.reducer, flattenItems.initialValue)
    };
};