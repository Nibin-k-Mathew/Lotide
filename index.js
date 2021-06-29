// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArrayEqual = require('./assertArrayEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const takeUntil = require('./takeUntil');
const without = require('./without');
const letterPositions = require('./letterPositions');
const countLetters = require('./countLetters');
const map = require('./map');

module.exports = {
head,
tail,
middle,
assertArrayEqual,
assertEqual,
assertObjectsEqual, 
eqArrays,
eqObjects,
findKey,
findKeyByValue,
takeUntil,
without,
letterPositions,
countLetters,
map
};