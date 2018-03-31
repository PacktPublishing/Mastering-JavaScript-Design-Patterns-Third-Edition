const memoize = (fn) => {
    let cache = {};
    return (...args) => { // Use rest arguments to get an array
        let n = args[0]; // Get the first argument.
        if (n in cache) {
            return cache[n];  // Returns the cached value
        } else {
             let result = fn(n); // Executes the function 
             cache[n] = result;  // Caches the result.
             return result;
        }
    }
}