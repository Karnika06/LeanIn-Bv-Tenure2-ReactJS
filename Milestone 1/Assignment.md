### 20 Questions

Ans 1 - 
```
const arr = Array()
```
Ans 2 - 
```
const numbers = [2, 12.4, 6.6, 6, 10.6, 5,4] 
```
Ans 3 - 
```
var n=numbers.length
```
Ans 4 -
```
var n=numbers.length
start = numbers[0]
end = numbers[n]
mid = numbers[n/2]
```
Ans 5 - 
```
const mixedDataTypes=['karnika','12', 'student',6,'bv', 12.45]
mixedDataTypes.length
```
Ans 6 - 
```
const itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
```
Ans 7 - 
```
console.log(itCompanies)
```
Ans 8 - 
```
const n=itCompanies.length
console.log(n)
```
Ans 9 - 
```
console.log(itCompanies[0])
console.log(itCompanies[n])
console.log(itCompanies[n/2])
```
Ans 10 - 
```
for (let i = 0; i <n; i++) {
  console.log(itCompanies[i]);
}
```
Ans 11 -
```
for (let i = 0; i <n; i++) {
  console.log(itCompanies[i].toUpperCase());
}
```
Ans 14 - 
```
const dog = {}
```
Ans 15 - 
```
console.log(dog)
```
Ans 16 -
```
const dog = {
    name : 'Tuffy',
    legs: 4,
    color: 'Brown',
    age: 10,
    bark: function() {
    return 'woof woof'
    },
}
```  
Ans 17 - 
```
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())
```
Ans 27 -
```
function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    
}
```
Ans 28 - 
```
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
```
Ans 29 - 
```
function factorial(n) {
  if (n == 0) 
    return 1;
  return n * factorial(n - 1);
}
```
Ans 30 -
```
function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}
```
Ans 31 - 
```
function average(array) {
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
```
