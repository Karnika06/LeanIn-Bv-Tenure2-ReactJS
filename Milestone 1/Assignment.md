### 20 Questions

Ans 1- 
const arr = Array()

Ans 2- const numbers = [0, 3.1, 9.8, 3, 9.6, 10] 

Ans 3- var n=numbers.length


Ans 4- 
var n=numbers.length
start = numbers[0]
end = numbers[n]
mid = numbers[n/2]

Ans 5- const mixedDataTypes=['karnika','12', 'student',6,'bv', 12.45]
       mixedDataTypes.length

Ans 6- 

const itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

Ans 7- console.log(itCompanies)

Ans 8- const n=itCompanies.length
console.log(n)

Ans 9- console.log(itCompanies[0])
console.log(itCompanies[n])
console.log(itCompanies[n/2])

Ans 10- for (let i = 0; i <n; i++) {
  console.log(itCompanies[i]);
}

Ans 11-for (let i = 0; i <n; i++) {
  console.log(itCompanies[i].toUpperCase());
}

Ans 14- var dog = {}

Ans 15- console.log(dog)

Ans 27- 
function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    
}

Ans 28- 
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

Ans 29- function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

Ans 30- 
function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

Ans 31- function average(array) {
    var num=0;
    for (var i=1;i<=array.length;i++) 
    if(Number.isInteger(array[i])==false)
    {
    console.log("not a integer value");
    }
    num=num+array[i];
    var divide=num/array.length;
    console.log(divide);
}

Ans 45-
find() - used to find all the descendant elements of the selected element. 
filter()- used to filters all the elements and returns the element that matches and the element that do not match are removed.
findIndex()- returns the index of the first element in the array that satisfies the provided testing function.

Ans 46- every() function in JavaScript is used to checks whether all the elements of the array satisfy the given condition or not. 
The some() method in JavaScript is used to check whether at least one of the elements of the array satisfies the given condition or not.