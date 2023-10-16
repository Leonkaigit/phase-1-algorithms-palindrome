function isPalindrome(word) {
  word = word.toLowerCase().replace(/\s/g, '');

  // Compare the word with its reverse to check for a palindrome
  return word === word.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("robot"));    // false
console.log(isPalindrome("A man a plan a canal Panama")); 
  // Write your algorithm here


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
