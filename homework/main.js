//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/

let dog_string = "Hello Max, my name is Dog,dog and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

/*
function = findWords
parameters (sting, names)
need a variable to keep tracking my index in the array
x = 0
to see inside my list need while, but will do (do while)
now that im inside need to match(compare the
 */


function findWords(dog_string, dog_names) {
    let dog_index = 0;
    do {
        if (dog_string.includes(dog_names[dog_index])) {
            console.log(`Matched ${dog_names[dog_index]}`);
        } else {
            console.log("No Match");
        }
        dog_index++;
    } while (dog_index < dog_names.length);
}

findWords(dog_string, dog_names);

//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given
let my_array = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

//
function replaceEvens(my_array) {
    let this_array = 0;
    do {
        if (this_array % 2 === 0) {
            my_array.splice(this_array, 1, "even index");
        }
        this_array++;
    } while (this_array < my_array.length);

    /*
    first try
    simple output

    console.log(my_array)
    is not sending as shown belo

    second try using join method
    ok this is working as expected but i need to add outside info
    ok ok ok, tick to set f string's ``*/
    console.log(`my_array = ["${my_array.join('","')}"]`);

    /* well now that i copy/paste the example output it paste with an escape character
     ("arr == [\"even index\",\"Baseball\",\"even index\",\"Goku\",\"even index\",\"Rodger\"]")
     so im wondering if instead hardcoding i can preset the backslash */
    console.log(`my_array = [\"${my_array.join('","')}\"]`);
}

// they are printing exact the same i gues goal has been met.
replaceEvens(my_array);

/*
Expected output
Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


for the second part  codewars will be listed below this


There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
 */

//How good are you really?
function betterThanAverage(classPoints, yourPoints) {
    let totalClassPoints = 0;
    for (let i = 0; i < classPoints.length; i++) {
        totalClassPoints += classPoints[i];
        console.log(totalClassPoints);
    }

    // Calculate the class average
    let classAverage = totalClassPoints / classPoints.length;
    console.log(classAverage);
    // Your points (assuming yourPoints is always a single-element array)
    let yourScore = yourPoints[0];
    console.log(yourPoints);

    // Check if your score is better than the class average
    return yourScore > classAverage;
    console.log();
}

const classPoints = [100, 40, 34, 57, 29, 72, 57, 88];
const yourPoints = [20];
const result = betterThanAverage(classPoints, yourPoints);

console.log(result);// first i need to sum classPoint
// sum + your points
//count clssPoint =+ 1
// yourPoint is fixed

//                                                        second Kata
/*
* Function 1 - hello world
*
* Make a simple function called greet that returns the most-famous "hello world!".
* Style Points
* Sure, this is about as easy as it gets. But how clever can you be to create the most creative
* "hello world" you can think of? What is a "hello world" solution you would want to show your friends?
*/

function greet() {
    return 'hello world!';
}

console.log(greet());
