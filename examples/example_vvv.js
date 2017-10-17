var tools = require('../lib/tools');

const start = 'WINSEN (LUHE)';
const input = 'AOÖ';
const output = tools.getStop(start, input);

console.log(input , '=>', output);
