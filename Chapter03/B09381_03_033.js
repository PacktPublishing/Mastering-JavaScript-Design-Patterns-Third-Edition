import bills from './bills';
import { flattenBill } from './mappers';
import { filterByTwoMatches } from './filters';
import { finalReport } from './reducers';

/**
 * getCappuccinoMuffinData
 * Gets an array of bills and returns an object with all the expected data.
 * 1. It maps the object to flatten the items object in something more manageable.
 * 2. It filters the array to get a subset of elements that have consumed a muffin
 * and a cappuccino.
 * 3. It reduces all the information to a single object with all the data.
 * @param {Array} bills 
 * @returns Object
 */
const getCappuccinoMuffinData = (bills) => {
    return bills
            .map(flattenBill)
            .filter(filterByTwoMatches)
            .reduce(finalReport.reducer, finalReport.initialValue);
};

console.log(getCappuccinoMuffinData(bills)); 
// { waiters: { Sophia :1, Lorenzo :2}, totalAmount :16.5, averageTicket :5.5, billsAmount :3 }