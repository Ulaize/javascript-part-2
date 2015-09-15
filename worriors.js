//This is the start of worriors.js


function Worrior(name,gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon =  "wooden sword";
    this.power = (Math.random() * 100) + 1;
}

//In addition to that, every object that gets created should have the following methods:
//fight: will output to the console: " rushes to the arena with "
//faceoff: faceoff takes one argument called opponent. Based on the power of each opponent, 
//this method should output to the console which player won the fight based on their power. Be as creative as you like with the text of this method :)
//Finally, create a bunch of warriors and make them fight together.


Worrior.prototype = {
    fight: function() {
        console.log(this.name + " rushes in the arena with " + this.weapon);
    },
    faceoff: function(opponent) {
        if(this.power>opponent.power){
            console.log( this.name + " cut the head of the " + opponent.name + ", leaving a pool of blood behind him and cheering to the crowd");
            
        }
        
        else {
            
            console.log( this.name + " got distracted and " + opponent.name + " took the opportunity to stabb " + this.name + " in the stomach. Leaving the gutts to show");
        }
    }
};

var worrior1 = new Worrior("David", "M");
var worrior2 = new Worrior("Goliath", "M");

worrior1.fight();

worrior1.faceoff(worrior2);






//Then, do the following. Commit and push as often as you like 
//so that we can monitor the progress of your code in the pull request. Don't 
//hesitate to commit mistakes or incomplete code. When you think you are done, 
//add a label to the pull request on GitHub called "ready for review". 
//This will notify us to check your code.