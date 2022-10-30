// Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

// An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or non-decreasing.

// Non-increasing elements aren't necessarily exclusively decreasing; they simple don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

// Note that empty arrays and arrays of one element are monotonic.

// Sample input: array =[-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

// Sample output: true

//Naive approach: we can loop through the array and keep an increasing and decreasing counter. For each index, we can check if it's either increasing, decreasing or equal in comparison to the value at the index that came before it. If neither the increasing or decreasing counter equal the length of the input array, we can return true. We can also return true if the input array is empty or has a length of 1.

//After some thought and working through the details of the above logic, using booleans for increasing and decreasing is probably a better approach. We use a loop and at every index we check whether its increasing or decreasing. We can then return either boolean as the result.

function isMonotonic(array) {
  // Write your code here.
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }
  return isNonDecreasing || isNonIncreasing;
}
