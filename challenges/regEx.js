let str = "This is a 1253234great day for this week";
let regEx = /[a-f2-5]/gi;
// excluding some characters in the match
regEx = /[^1-9aeiou]/gi;
str = "Mississipsi";
regEx = /s+/g;

str = "Goooaaaaal";
regEx = /Go*/;
let result = str.match(regEx);
// lazy matching
str = "hello_world";
regEx = /[./-_]/;
result = str.match(regEx);
console.log(result);

// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

// samjam48

// Love vs friendship

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

// J or nor J

// The Hunger Games - Foxes and Chickens (Poison)

// Old MacDingle had a farm. So old MacDingle decided to lay fox bait around the farm to poison the foxes.

// Given the initial configuration of foxes and chickens what will the farm look like the next morning after the hungry foxes have been feasting?

// dinglemouse

// The Greatest Warrior

// Create a class called Warrior which calculates and keeps track of their level and skills, and ranks them as the warrior they've proven to be.

// BurstNova

// Hard Sudoku Solver

// There are several difficulty of sudoku games, we can estimate the difficulty of a sudoku game based on how many cells are given of the 81 cells of the game. Write a function that solves sudoku puzzles of any difficulty.
// f.rodrigues
