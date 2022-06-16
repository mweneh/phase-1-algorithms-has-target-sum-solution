function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers= {}
  for (const num of array){
    //console.log(seenNumbers)
    const complement = target- num

    if (complement in seenNumbers) return true
    seenNumbers[num] = true

  }
  return false 
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  create an object to track seen numbers
  iterate through each number
  identify complement for current number adding to target 
  check if our complement is a key in our seenNumbers
  if so return true else add it to the object 

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
