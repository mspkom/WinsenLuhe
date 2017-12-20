var tools = require('../lib/tools');

const start = 'WINSEN (LUHE)';
const input = 'WL';
const output = tools.getWinsenLuhe(start, input);

console.log(input , '=>', output);
