var tools = require('../lib/tools');

const start = 'WINSEN (LUHE)';
const input = 'A';
const output = tools.getStop(start, input);

console.log(input , '=>', output);
