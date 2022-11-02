//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

let findWords = (dog_string, dog_names) => {
    for (let i=0; i < dog_names.length; i++){
        if (dog_string.toLowerCase().split(/[,\s]+/).includes(dog_names[i].toLowerCase())){
            console.log(`${dog_names[i]}: Match`)
        } else {
            console.log(`${dog_names[i]}: No Match`)
        }
    }
}

//Call method here with parameters

let answer1 = findWords(dog_string, dog_names); //Not sure if this was exactly how I wanted the output to show as the actual answer1 is undefined


// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i=0; i < arr.length; i++){
        if (i % 2 == 0) {
            arr.splice(i,1,'even index')
        }
    } return arr
}

let answer2 = replaceEvens(arr);
console.log(answer2)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


/*
Get the Middle Chracter

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

function getMiddle(s)
{
  if (s.length%2 === 0){
    return s[(s.length/2)-1]+s[s.length/2]
  } else {
    return s[Math.floor(s.length/2)]
  }
}

console.log(getMiddle('Diante'))

/*
You're a square!

A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
Task

Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
Examples

-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false


*/

var isSquare = function(n){
    if (n < 0){
      return false;
    } if (n**(1/2) % 1 === 0){
      return true
    } else {
      return false
    }      
  }

console.log(isSquare(25))