class CaffeineBeverage {
    prepareRecipe() {
        this.boilWater();
        this.brew();
        this.pourOnCup();
        this.customerWantsCondiments()
            .then((wantsCondiments) => {
                if (wantsCondiments) {
                    this.addCondiments();
                }
            });
    }

    boilWater() {
        console.log("Put water on fire until the water starts boiling!");
    }

    pourOnCup() {
        console.log("Put beverage on Cup!");
    }

    brew() {
        throw new Error("This method mus be overwritten!");
    }

    addCondiments() {
        throw new Error("This method mus be overwritten!");
    }

    customerWantsCondiments() {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
}

export default CaffeineBeverage;