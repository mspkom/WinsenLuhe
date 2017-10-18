/* eslint-disable no-console */

console.log('----------------------------------------');
console.log('WINSEN (LUHE)');

const rl = require('readline');
const tools = require('./tools');

const prompts = rl.createInterface(process.stdin, process.stdout);
const question = 'Nummernschild: ';

prompts.question(question, (value) => {
  const input = value.toUpperCase();
  const base = 'WINSEN (LUHE)';
  const result = tools.getWinsenLuhe(base, input);

  console.log('RESULT =>: %s', result);
  console.log('----------------------------------------');

  process.exit();
});
