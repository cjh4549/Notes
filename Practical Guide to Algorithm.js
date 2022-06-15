// Space and Time Complexity

// Big O

// Just look for a for loop. One for loop equals O(n). If there is no loop, it's constant. 
// What if we are doing a lot of stuff in the for loop, does that matter? 
// NOPE

// Big O doesn't care about all the coefficients.

// Nested loops = Big(n2) 
// This can quickly go out of control. 

function makeTuples(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]]);
    }
  }
  return answer;
}

// Constant time = O(1)
function getMiddleOfArray(array) {
  return array[Math.floor(array.length / 2)];
}

// Log (ex. Recursion)
// It does take more time between 10 items in an array vs 1000, but not as much

// The interviewer might ask what's the Big O of the function you wrote.
// The key is to look for a number of loops, but also how much longer would it take with more inputs. 

// Big O in real life
// If you have a function to sort and filter comments, few comments wouldn't matter.
// But if it's a website like Reddit with thousands of comments, writing a Big(n2) function would be a disaster.


// Spatial Complexity
// How much RAM and memory are you using? How much stuff are you creating? 

// Linear
// Let's say there are 10 items in an array, and for each item, you have to create 10 more arrays.
// This can quickly churn up memory and you want to always avoid linear complexity.
// Usually have to do with creating more arrays.
// O(n)

// Logarithmic
// Every item you iterate, you are creating less items. Ex) 100 -> 12 more arrays, 10 -> 7 more arrays...
// O(log n)

// Constant
// You create a same amount of new arrays (ex. 5) no matter how many items in an array (100 vs 10000). 
// O(1)

// Quadratic
// What if we had an app that calculates a distance between two zip codes?

// Spatial complexity can be ignored if memory is not much of an issue with algorithms.
