// Testing Hanzi module

// IDEA: would be nice to make this self-documenting
// by displaying the command, then executing it
// like a Jupyter notebook,
// but command-line...

console.log("Testing Hanzi module basic functionality\n");

//Require
var hanzi = require("hanzi");
//Initiate
hanzi.start();

let decomposition;

// Character decomposition
// 3 levels of decomposition (can specify which type in optional type parameter):
// 1 - "Once" (only decomposes character once),
// 2 - "Radical" (decomposes character into its lowest radical components),
// 3 - "Graphical" (decomposes into lowest forms, will be mostly strokes and small indivisable units)
decomposition = hanzi.decompose('爱');
console.log(decomposition);
decomposition = hanzi.decompose('爱', 1);
console.log(decomposition);
decomposition = hanzi.decompose('爱', 2);
console.log(decomposition);
decomposition = hanzi.decompose('爱', 3);
console.log(decomposition);
decomposition = hanzi.decomposeMany('爱橄黃');
console.log(decomposition);

console.log("Lookup a character in the dictionary:");
console.log(hanzi.definitionLookup('雪'));
console.log("Search the dictionary based on input (I don't get search type 'only'...):");
console.log(hanzi.dictionarySearch('雪'));
console.log("Search, then puts entries in three categories by frequency (so really another kind of search?):");
console.log(hanzi.getExamples('橄'));
console.log("Return an array of characters that are segmented based on a longest match lookup:");
console.log(hanzi.segment("我們都是陌生人。"));
console.log("Return all possible pinyin data for a character:");
console.log(hanzi.getPinyin('的'));
console.log("Return frequency data for a character based on the Junda corpus:")
console.log(hanzi.getCharacterFrequency('热'));
console.log("Get a character based on its position the frequency list:")
console.log(hanzi.getCharacterInFrequencyListByPosition(111));
console.log("Return an array of characters with the given component:")
console.log(hanzi.getCharactersWithComponent('囗'));
console.log("Return an object that displays all possible combinations of phonetic regularity relationship of the character to all its components")
console.log(hanzi.determinePhoneticRegularity('洋'));
console.log("Return a short, usually one-word, meaning of a radical:")
console.log(hanzi.getRadicalMeaning('氵'));
