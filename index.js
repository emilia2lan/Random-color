const randomColor = require('randomcolor'); // a hex code for a hex color
const chalk = require('chalk'); // a chalk code 

//console.log(process.argv[2]);
//console.log(process.argv[3]);

const myColor = randomColor({
    luminosity: process.argv[3],
    hue: process.argv[2]
 });

//prints a hex color in a colored square
console.log(chalk.hex(myColor)('##################################'));
console.log(chalk.hex(myColor)('##################################'));
console.log(chalk.hex(myColor)('##################################'));
console.log(chalk.hex(myColor)('##########            ############'));
console.log(chalk.hex(myColor)('##########   '+myColor+'  ############'));
console.log(chalk.hex(myColor)('##########            ############'));
console.log(chalk.hex(myColor)('##################################'));
console.log(chalk.hex(myColor)('##################################'));
console.log(chalk.hex(myColor)('##################################'));