var tools = require('../lib/tools');

const start = 'WINSEN (LUHE)';
const input = 'AÜ';
const output = tools.getWinsenLuhe(start, input);

console.log(input , '=>', output);
