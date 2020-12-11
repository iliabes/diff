let str = 'word1 word2 word3 Word3 1 2 3 '

console.log(str.match(/word/ig))
console.log(str.replaceAll(/word/ig,'$` bla'))