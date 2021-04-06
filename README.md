# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tomfream/lotide`

**Require it:**

`const _ = require('@tomfream/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head(arr): Take in a single array as an argument, and returns it's head (first) element. 
* tail(arr): Take in a single array as an argument, and returns it's tail (without first element) elements. 
* middle(arr): Take in a single array as an argument, and returns the single middle element if the array is an odd length, and the middle two elements if the array is even length. 
* countLetter(str): Take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* countOnly(arr, obj): Given an array and an object. It will return an object containing counts of everything that the input object listed. 
* findKey(obj, cb): Takes in an object and a callback. Scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* findKeyByValue(obj, value): takes in an object and a value. Scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* flatten(arr): Given an array with other arrays inside, flatten it into a single-level array.
* letterPositions(str): Takes in a string and returns all the indices (zero-based positions) in the string where each character is found.
* map(arr, cb): Takes in an arrayy to map and a callback function. Will return a new array based on the results of the callback function.
* takeUntil: Takes in an array and a callback function. Returns a slice of the array with elements taken from the beginning until the callback returns a truthy value.
* without(source, itemsToRemove): Takes in a source array and a itemsToRemove array. Returns a new array with only those elements from source that are not present in the itemsToRemove array.