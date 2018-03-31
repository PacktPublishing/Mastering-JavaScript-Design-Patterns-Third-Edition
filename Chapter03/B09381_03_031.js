export const flattenItems = {
    /**
     * flattenItems.reducer
     * Gets two parameters the accumulator and the item and returns an accumulator.
     * On each iteration it adds the cost of the product and if the description matches 
     * 'cappuccino' or 'muffin' it increments productMatches.
     * @param {Object} accumulator 
     * @param {Object} item 
     * @returns Object
     */
    reducer(accumulator, item) {
        if(['cappuccino', 'muffin'].includes(item.description)) {
            const productMatches = accumulator.productMatches;
            accumulator.productMatches = productMatches > 0 ? productMatches + 1 : 1;
        }
        accumulator.cost += item.cost;
        return accumulator;
    },
    // Initial accumulator value
    initialValue: { productMatches: 0, cost: 0 }
};

export const finalReport = {
    /**
     * finalReport.reducer
     * Gets three parameters, the accumulator, the bill and the index
     * If it's the first time we find a waiter we add it to the waiters
     * object and we set the value to one, in any other case we just add one
     * Increases the amount of bills and we increase the total amount with
     * the value of the cost of the bill.
     * At the end it gets the average of the ticket.
     * @param {Object} accumulator 
     * @param {Object} bill 
     * @param {Number} index 
     * @returns Object
     */
    reducer(accumulator, bill, index) {
        const waiter = accumulator.waiters[bill.waiter];
        accumulator.waiters[bill.waiter] = waiter > 0 ? waiter + 1 : 1;
        accumulator.billsAmount++;
        accumulator.totalAmount += bill.items.cost;
        accumulator.averageTicket = accumulator.totalAmount / (index + 1);
        return accumulator;
    },
    // Initial accumulator value
    initialValue: { waiters: {}, totalAmount: 0, averageTicket: 0, billsAmount: 0 }
};