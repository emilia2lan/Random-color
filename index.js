var randomColor = require('randomcolor'); // import the script from randomColor
var color = randomColor(); // a hex code for an attractive color

const chalk = require('chalk'); // import the script from chalk
const log = console.log;

//console.log(process.argv[2]);
const myColor = process.argv[2];

// Returns a hex code for a light blue
const inputColor = randomColor ({
    luminosity: 'light',
    hue: myColor
 });
 
 //console.log(myColor);
//console.log(inputColor);

 let stringHash = '';
 let i = 0;
 do {
     stringHash = stringHash + '#';
    i++;
} while (i < 31);

 //console.log(stringHash);

 let stringHashsht = '';
 let a = 0;
 do {
     if (a < 5 || a >= 26) {
         stringHashsht = stringHashsht + '#';
    }else {
        stringHashsht = stringHashsht + '';
    }
    a++;
    } while (a < 31);
  //console.log(stringHashsht);

 for (const myColor = process.argv[2]) {
     chalk.hex(myColor);
 }

console.log(stringHash);
console.log(stringHash);
console.log('####       '+ '       ' + '        #####');
console.log('####       '+ inputColor + '        #####');
console.log('####       '+ '       ' + '        #####');
console.log(stringHash);
console.log(stringHash);
console.log(stringHash);

