const Bread = ((() => {
    return class Bread {
        constructor(breadType) {
            this.breadType = breadType;
            //some complex, time consuming operation
            console.log("Bread " + breadType + " created.") 
        }
    };
})());