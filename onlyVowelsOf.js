console.clear()

function onlyVowelsOf(word){
  return word
    .match(/[aeiou]/gi) //global match + case-insensitive
    .join('')
}

const word = 'thisissomeword'
const wordWithOnlyVowels = onlyVowelsOf(word)
console.log(wordWithOnlyVowels) // iioeo