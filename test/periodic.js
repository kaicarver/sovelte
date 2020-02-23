// Testing Hanzi module

// IDEA: would be nice to make this self-documenting
// by displaying the command, then executing it
// like a Jupyter notebook,
// but command-line...

console.log("Testing periodic-table module basic functionality\n");

let pt = require('periodic-table');

// entire dataset
let elements = pt.all();
//console.log(elements);

// single elements by name
console.log(elements.Helium);

// single elements by symbol
console.log(pt.symbols.He);

// single elements by atomic number
console.log(pt.numbers[2]);

let util = require('periodic-table/util');

// atomic mass of molecule
// atomicMass("[Element][Number] [Element][Number] ...")
// parenthesis around elements not supported..yet
let waterMass = util.atomicMass("H2 O");
let organicMass = util.atomicMass("C12 H22 O11");
