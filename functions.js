//This is the new file called functions.js

//This orders an array by length on a decending order.


function sortLongestString(a,b){
   
   return b.length - a.length;
}

var yourArray = ["Allo","Bonjour", "Comment ca va?"];

yourArray.sort(sortLongestString);



//Sort address book by name length.

var emails = [
  { name: 'Ulaize', email: "ulaize@email.com" },
  { name: 'David', email: "david@email.com" },
  { name: 'Maraie Hellene', email: "mariehellene@email.com" },

];

function emailOrdering (a, b) {
  if ( b.name.length < a.name.length ) {
    return 1;
  }
  if (a.name.length > b.name.length) {
    return -1;
  }
  return 0;
};

emails.sort(emailOrdering);

//function that returns the square of a number.

var someNum = [3,4,5,6];

function square(num){
  
  return num*num;
}

someNum.map(square);

//Using .map I have created a formula that squares each number in a group of numbers.

var housemates = [
  { num: 26},
  { num: 76 },
  { num: 48 }

];

function squareAge (value,index) {
  return value.num*value.num;
};

housemates.map(squareAge);

