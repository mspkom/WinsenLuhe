var tools = require('../lib/tools');

const start = 'WINSEN (LUHE)';
const input = 'AEÖ';
const stop = tools.getStop(start, input);

console.log(stop);
