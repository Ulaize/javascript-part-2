//This is the new file called functions.js

//This orders an array by length on a decending order.


function sortLongestString(a,b){
   
   return b.length - a.length;
}

var yourArray = ["Allo","Bonjour", "Comment ca va?"];

yourArray.sort(sortLongestString);




