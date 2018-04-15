class HumanBeing {
    constructor(config) {
        this.skinColor = config.skinColor;
        this.hairColor = config.hairColor;
        this.height = config.height;
        this.weight = config.weight;
        this.gender = config.gender;
        // And more data.
    }
}

var me = new HumanBeing({ skinColor: 'pale', hairColor: 'brown', height:'173cm', weight: '100kg', gender: 'male'});

var clone = Object.assign(new HumanBeing({}), me);

me === clone; // false but the data they contain is the same.