import Context from './Context';
import DecimalToRomanInterpreter from './DecimalToRomanInterpreter';

const context = new Context(1988);

const d2RInterpreter = new DecimalToRomanInterpreter();

d2RInterpreter.interpret(context);

console.log(context.output);