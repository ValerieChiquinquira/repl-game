let readlineSync = require('readline-sync');
console.log( "Welcome to Soldier Field: Home of Da Bears" );
console.log( "\n you are the coach of the Chicago Bears. \n you are in the playoffs. on the 40 yard line. \n down by 40 \n 7 seconds on the clock. \n no timeouts choose your players" );
console.log("your options are:\n Goff. he is accuracte but not explosive \n Winston, inaccurate but explosive \n Newton, great run but can't throw");

let qb1 = readlineSync.question(" who are you putting in the game as your qb ");
let qb = qb1.toUpperCase();
console.log(" you need a rb. you need to choose from: \n howard, a big man who always gets a couple yards \n Cohen, shifty pass catcher \n Henry, fast as shit" );

let rb1 = readlineSync.question("who is your rb?");
let rb = rb1.toUpperCase();

console.log("You need a wide receiver. Your options are: \n Agohlor catches only 50% of the passes \n Thomas: consistent \n Hopkins: jumpball winner");

let wr1 = readlineSync.question("Who is your receiver? ");
let wr = wr1.toUpperCase();
console.log("You have two options: You can pass or you can rush. Consider your players and choose wisely.")
let rushOrPass1 = readlineSync.question ("rush or pass?");
let rushOrPass = rushOrPass1.toUpperCase();

//setting up for a pass play or a rush play. if none are choosen, the error would be to check again.
if (rushOrPass === "PASS"){
  passPlay();
} else if (rushOrPass === "RUSH") {
  rushPlay();
} else {
  console.log("check with your coach");

}

//if a passing play, go to this function
function passPlay  () {
  if (qb === "WINSTON"){
    //if my qb is winstion and he passes to agholor, it results in a win.
    if (wr === "AGHOLOR"){
    console.log ('you win, mofo. Ya\' got super lucky');
    // if my qb is winston but these guys, it results in a loss.
    } else if (wr === "HOPKINS" || wr === "THOMAS"){
      console.log ('sorry, sometimes not even the best can make the catches');
      //if a wr is given that is not an option, asked to check players.
    } else {
      console.log("check your players");
      
    }
  }
  
  else if (qb === "GOFF") {
    if (wr === "AGHOLOR"){      
    console.log ('you lose. why did you think that was a good idea?');
    } else if (wr === "HOPKINS" || wr === "THOMAS") {
      console.log ("TD, you win game. quelle surprise");
    } else {
      console.log("check your players");
  }
}

  else if (qb === "NEWTON") {
    if (wr == "HOPKINS") { 
    console.log("win. hell yeah. super nice catch");
    } else if (wr === "THOMAS" || wr === "AGHOLOR") {
      console.log("loser, but don't feel bad.");
    } else {
    console.log("make sure you have the right players");
  }
  } else {
    console.log("try again, coach");
  }
}

  
  function rushPlay () {
    if (qb === "WINSTON"){
      //if my qb is winstion and he passes to agholor, it results in a win.
      if (rb === "HOWARD"){
      console.log ('you win. what did you expect?');
      // if my qb is winston but these guys, it results in a loss.
      } else if (rb === "COHEN" || rb === "HENRY"){
        console.log ('lost. better luck next time');
        //if a wr is given that is not an option, asked to check players.
      } else {
        console.log("check your players")
      }
    }
    
    else if (qb === "GOFF") {
      if (rb === "COHEN"){      
      console.log ('cohen loves to go sidewise.');
      } else if (rb === "HOWARD" || rb === "HENRY") {
        console.log ("TD, you win game. big boys get stuff done");
      } else {
        console.log("check your players");
    }
  }
  
    else if (qb === "NEWTON") {
      if (rb === "COHEN") { 
       console.log("win. he's very sneaky and shifty");
      } else if (rb === "HENRY" || rb === "HOWARD") {
        console.log("surprise. newton tried to rush and he got creamed");
      } else{
       console.log("make sure you have the right players");
      } 
      
    }
    else {
    console.log("try again, coach");
    } 
    
    
    
  }


