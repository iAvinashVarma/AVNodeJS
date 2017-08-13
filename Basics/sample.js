function Person(first, middle, last, age){
    this.firstName = first;
    this.middleName = middle;
    this.lastName = last;
    this.age = age;
}

function addNumber(a,b){
    return a + b;
}

var printCountry = function(){
    console.log("My country is India!");
}

var jitendra = new Person("Jitendra", "Dinkar", "Jawale", 27);
var goutham = new Person("Goutham", "Varma", "Datla", 27);
console.log(jitendra);
console.log(goutham);
console.log("Addition: " + addNumber(10,20));
setTimeout(printCountry, 5000);