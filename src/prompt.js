/* eslint-disable no-console */

console.log('----------------------------------------');
console.log('WINSEN (LUHE)');

const rl = require('readline');
const tools = require('./tools');

const prompts = rl.createInterface(process.stdin, process.stdout);
const question = 'Nummernschild: ';

prompts.question(question, (value) => {
  const val = value.toUpperCase();
  const start = 'WINSEN (LUHE)';
  const stop = tools.getStop(start, val);

  console.log('RESULT =>: %s', stop);
  console.log('----------------------------------------');

  process.exit();
});
