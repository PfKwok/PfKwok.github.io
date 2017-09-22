/*
alert("Welcom to JS class.")

var student_1 = "Kate M"
var student_2 = "Emily B"

var welcome_msg = "Hello.. " + student_1 + " & " + student_2 + "!"
console.log(welcome_msg)


function greet(nameOfPerson) {
    var greeting_message = "Welcome, Mr. " + nameOfPerson
    console.log(greeting_message)
}

greet("Bala")


function doubleTheGivenName(name) {
    return name + " " + name
}

function combine(nameA, nameB) {
    var answer = doubleTheGivenName(nameA) + " | " + doubleTheGivenName(nameB)
    return answer
}

console.log( combine("Kate", "AZ") )


for (var index = 99; index > 90; index--) {
    console.log(index);
    
}

var index = 0;
while (index < 10) {
    console.log(index)
    index++

}
*/


var bottles;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of beer on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of beer on the wall.");
    }
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
}