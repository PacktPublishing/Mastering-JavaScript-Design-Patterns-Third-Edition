const Bakery = ((() => {
    return class Bakery {
        constructor() {
            this.requiredBreads = []; 
        }
        orderBreadType(breadType) {
            this.requiredBreads.push(breadType); 
        }
    };
})());