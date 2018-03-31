const Bakery = ((() => {
    return class Bakery {
        constructor() {
            this.requiredBreads = []; 
        }
        orderBreadType(breadType) {
            this.requiredBreads.push(breadType); 
        }
        pickUpBread(breadType) {
            console.log("Pickup of bread " + breadType + " requested");
            if (!this.breads) {
              this.createBreads();
            }
            return this.breads.filter((bread) => {
                return bread.breadType === breadType;
            })[0]; 
        }
        createBreads() {
            this.breads = this.requiredBreads.map((requiredBread) => {
                return new Bread(requiredBread);
            });
        }
  };
})());