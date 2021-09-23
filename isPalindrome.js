console.clear()

function isPalindrome(word) {
  if (word === '') return //guard clause
  const reversed = word
    .split('')
    .reverse()
    .join('')
  
  return reversed === word
}

const word = 'racecar'
const palindrome = isPalindrome(word)
console.log(palindrome) // 'true or false'