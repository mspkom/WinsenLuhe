var tools = require('../lib/tools');

const start = 'WINSEN (LUHE)';
const input = 'KIÖ';
const output = tools.getWinsenLuhe(start, input);

console.log(input , '=>', output);
