//New file terrain.js

//Create constructor Tile

var elementsNature = ["grass","rocks","water"];
var conditionOfElement = ["burning", "normal","frozen"];


function Tile (x,y){
    this.x = x;
    this.y = y;
    this.height =  Math.ceil(Math.random()*3);
    this.type =  elementsNature[Math.floor(Math.random()*elementsNature.length)];
    this.condition = conditionOfElement[Math.floor(Math.random()*conditionOfElement.length)];
    this.freeze = function (){
        if (this.condition ==="burning"){
            this.condition = "normal";
        }
        if (this.condition === "normal"){
            this.condition = "frozen";
        }
        if (this.condition == "frozen"){
            this.height = this.height + 1;
        }
    };
    this.burn = function (){
        if (this.condition === "frozen"){
            this.condition = "normal";
        }
        if (this.condition === "normal"){
            this.condition = "burning";
        }
        if (this.condition == "burning"){
            this.height = this.height - 1;
            if (this.height <0){
                this.height === 0;
            }
        }
    };
    
    
}

//Create the map 20*20

function newMap (num1,num2){
    var map=[];
    for (var a=0;a<20;a++){
        var newArray = [];
        //map[a]= newArray;
        map.push(newArray);
        for (var b=0;b<20;b++){
            //newArray[b] = new Tile (a,b);
            newArray.push(new Tile(a,b));
        }
        
    };
    return map;
    
}


var thisIsTheMap = newMap();

//return map visually

function seeTheMap(x){
    
  var row = "";
    
    for(var a = 0 ; a < 20 ; a++){
        
        for(var b = 0 ; b < 20 ; b++){
            
            row += x[a][b].height() +" ";
        }
        
       return row;
        
    }
}

seeTheMap(thisIsTheMap);

//Go thru all the map again, randomly burning and freezing some tiles.
//Then, re-output the map in the same way again


 this.freeze = function (){
        if (this.condition ==="burning"){
            this.condition = "normal";
        }
        if (this.condition === "normal"){
            this.condition = "frozen";
        }
        if (this.condition == "frozen"){
            this.height = this.height + 1;
        }
    };
    this.burn = function (){
        if (this.condition === "frozen"){
            this.condition = "normal";
        }
        if (this.condition === "normal"){
            this.condition = "burning";
        }
        if (this.condition == "burning"){
            this.height = this.height - 1;
            if (this.height <0){
                this.height === 0;
            }
        }
        
    }      
        
        
        
        
function burnTile(){
    
    
    
}
Tile.burn(Math.floor(Math.random()*19),Math.floor(Math.random()*19));


+function freezeTile(){
+    newMap(x,y).burn()
+    var randomX = Math.floor(Math.random() * 19);
+    var randomY = Math.floor(Math.random() * 19);
+    board[randomX][randomY].freeze();
+}


// When you think you are done, add a label to the pull request on GitHub called "ready for review". This will notify us to check your code.