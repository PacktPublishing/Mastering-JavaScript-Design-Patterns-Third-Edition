import Interpreter from './Interpreter';

class DecimalToRomanInterpreter extends Interpreter{
    interpret(context) {
        let input = context.input;
        if(input <= 0) {
            return false;
        } else {
            const romanDecimals = { 
                M:1000,
                CM:900,
                D:500,
                CD:400,
                C:100,
                XC:90,
                L:50,
                XL:40,
                X:10,
                IX:9,
                V:5,
                IV:4,
                I:1
            };
            for(let key in romanDecimals) {
                while(input >= romanDecimals[key]) {
                    context.output += key;
                    input -= romanDecimals[key];
                }
            }
            return true;
        }
    }
}

export default DecimalToRomanInterpreter;