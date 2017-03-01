const readline = require('readline');
var a= require('./q4p2.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your age in dd/mm/yyyy format ', (answer) => {
  console.log('your age as on today is '+ a.findDate(answer));
});
