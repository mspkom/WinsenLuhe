console.log('----------------------------------------');
console.log('WINSEN (LUHE)');

const rl = require('readline');
const tools = require('./tools');

let prompts = rl.createInterface(process.stdin, process.stdout);
let question = 'Nummernschild: ';

prompts.question(question, function(value) {
	const val = value.toUpperCase();
	const start = 'WINSEN (LUHE)';
	const stop = tools.getStop(start, val);

	console.log('RESULT =>', stop);
	console.log('----------------------------------------');

	process.exit();
});
