var tools = require('../lib/tools');

const start = 'WINSEN (LUHE)';
const input = 'A';
const stop = tools.getStop(start, input);

console.log(stop);
