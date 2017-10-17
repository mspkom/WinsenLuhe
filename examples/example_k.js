var tools = require('../lib/tools');

const start = 'WINSEN (LUHE)';
const input = 'Z';
const output = tools.getStop(start, input);

console.log(input , '=>', output);
