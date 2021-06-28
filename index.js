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
head: head,
tail: tail,
middle: middle,
assertArrayEqual: assertArrayEqual,
assertEqual: assertEqual,
assertObjectsEqual : assertObjectsEqual,
eqArrays: eqArrays,
eqObjects: eqObjects,
findKey: findKey,
findKeyByValue: findKeyByValue,
takeUntil: takeUntil,
without: without,
letterPositions: letterPositions,
countLetters: countLetters,
map: map

};