function hasTargetSum(array, target) {
  const seenNumbers = {}
  for(let number of array){
    const complement = target - number
    if(seenNumbers[complement])return true

    seenNumbers[number] = true
  }
  return false
}

/* 
need to create a function that takes in two arguments, an array and a target number.
if two of the elements combined = the target number - return as true. else return false  




Write the Big O time complexity of your function here
o(n)
*/

/* 
  Add your pseudocode here
  create an empty object to hold the elements of the array we iterated through
  for current number, identify a complementry number(ex. element is 5, target is 25, subtract 5 from 25, complementry number is 20)
  look through oject to see if it has the complementry number 
  if yes = true
  if not keep iteratinf till the end and return false if no complementry numbers are found 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
