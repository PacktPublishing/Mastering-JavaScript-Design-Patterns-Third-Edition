class Iterator {
    constructor(items) {
        if(typeof items[Symbol.iterator] !== 'function') {
            const keys = Object.keys(items);
            items[Symbol.iterator] = () => {
                return {
                    next: () => {
                        return { value: items[keys.shift()], done: keys.length === 0 }; 
                    }
                };
            };
        }
        return items[Symbol.iterator]();
    }
}

export default Iterator;