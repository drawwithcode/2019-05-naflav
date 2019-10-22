var myRec = new p5.SpeechRec("en-UK");
var myVoice = new p5.Speech();

let flower;
myRec.continuous = true;

function preload() {
  thief = loadImage('1.jpg');
  thief2 = loadImage('2.jpg');
  thief3 = loadImage('3.jpg');

  myVoice.setLang("en-UK");
}


function setup() {

  createCanvas(windowWidth, windowHeight);
  myRec.start();

  myVoice.speak("WELCOME. TAKE A SEAT AND STAY CALM.");

}
var gamescreen = 0;

function draw() {
  if (gamescreen == 0) {
    Menu();
  } else if (gamescreen == 1) {
    Game();
  } else if (gamescreen == 2) {
    gameOver();
  } else if (gamescreen == 3) {
    gameOverdois();
  } else if (gamescreen == 4) {
    Win();
  }
}

function Menu() {
  background(56);
  textSize(17);
  textAlign(CENTER);
  textFont("Roboto Mono");
  fill("#E2F574");
  text("IT'S A COLD WEDNESDAY MORNING.", width / 2, height / 2 - 30);
  text("ONLY YOU HAVE THE POWER TO FINALLY UNCOVER WHO IS THE CRIMINAL BEHIND THE KILLINGS THAT TOOK PLACE IN THE SUMMER OF 2019 AND SENTENCE HIM TO DEATH PENALTY.", width / 2, height / 2);
  text("WILL YOU BRING YOUR PEOPLE JUSTICE, OR WILL YOU BRING AN INNOCENT MAN DOWN JUST BECAUSE OF HIS LOOKS?", width / 2, height / 2 + 25);
  text('PRESS Enter TO ENTER THE INQUISITION ROOM', width / 2, height / 2 + 70);

}

function Game() {
  clear();
  background("#E2F574");
  image(thief, width / 2 - 550, height / 2 - 200, 200, 200);
  image(thief2, width / 2 - 100, height / 2 - 200, 200, 200);
  image(thief3, width / 2 + 350, height / 2 - 200, 200, 200);

  fill("#4856D7");

  textSize(30);
  text('say LEFT for', width / 2 - 450, height / 2 + 50);
  textSize(50);
  text('BIG-TUNIA', width / 2 - 450, height / 2 + 100);

  textSize(30);
  text('say MIDDLE for', width / 2, height / 2 + 50);
  textSize(50);
  text('ROUND-BOY', width / 2, height / 2 + 100);

  textSize(30);
  text('say RIGHT for', width / 2 + 450, height / 2 + 50);
  textSize(50);
  text('DEMON', width / 2 + 450, height / 2 + 100);


  fill("red");
  textSize(50);
  text('WHO IS  THE CRIMINAL', width / 2, height / 2 + 200);

  if (myRec.resultString == 'left') {
    myVoice.speak("SEE YOU IN HELL")

    gamescreen = 2;
  }
  if (myRec.resultString == 'middle') {
    myVoice.speak("WHATEVER")

    gamescreen = 3;
  }
  if (myRec.resultString == 'right') {
    myVoice.speak("GOOD ONE")

    gamescreen = 4;
  }
}

function showResult() {
  if (myRec.resultValue == true) {
    background(255);
    text(myRec.resultString, width / 2, height / 2);
    //myVoice.interrupt = checkbox.elt.checked;
    // debug printer for voice options
    console.log(myRec.resultString);
  }
}

//screens

function keyPressed() {
  if (keyCode == ENTER) {
    gamescreen = 1;
  }
}

function gameOver() {
  clear();
  background("#F63F15");
  fill(56);
  textSize(60);
  text("BIG-TUNIA WILL HAUNT YOU", width / 2, height / 2 - 100);
  textSize(20);
  text("SURE, HE WAS ALL ABOUT GOSSIP AND DIDN'T GO EASY ON YOU, BUT HE DIDN'T KILL ANYONE.", width / 2, height / 2);
  text("YOUR CHAIR FEELS WEIRD.", width / 2, height / 2 + 50);
  text("IT SEEMS THAT UNDER YOUR SEAT THERE'S A REMOTE THAT ALLOWS YOU TO GO BACK IN TIME BY CLICKING Enter.", width / 2, height / 2 + 75);
  text("EVERYONE DESERVES A SECOND CHANCE... SHOULD YOU TAKE IT? OR DO YOU CHOOSE TO LIVE WITHOUT REGRETS?", width / 2, height / 2 + 100);
  myRec.resultString = 0;
}

function gameOverdois() {
  clear();
  background("#F63F15");
  fill(56);
  textSize(60);
  text("WRONG, BUT OK", width / 2, height / 2 - 100);
  textSize(20);
  text("YEAH NO ONE LIKED HIM, BUT WHAT A BAD TAKE.", width / 2, height / 2);
  text("YOUR CHAIR FEELS WEIRD.", width / 2, height / 2 + 50);
  text("IT SEEMS THAT UNDER YOUR SEAT THERE'S A REMOTE THAT ALLOWS YOU TO GO BACK IN TIME BY CLICKING Enter.", width / 2, height / 2 + 75);
  text("YOU ALWAYS HAD A SPECIAL FEELING FOR ROUND-BOY... SHOULD YOU TURN BACK? OR MOVE ON?", width / 2, height / 2 + 100);
  myRec.resultString = 0;
}

function Win() {
  clear();
  background("#4856D7");
  fill(56);
  textSize(60);
  text("WE'RE FINALLY FREE", width / 2, height / 2 - 100);
  textSize(20);
  text("NOT THAT IT WAS HARD WITH A NAME LIKE THAT.", width / 2, height / 2);
  text("YOUR CHAIR FEELS WEIRD.", width / 2, height / 2 + 50);
  text("IT SEEMS THAT UNDER YOUR SEAT THERE'S A REMOTE THAT ALLOWS YOU TO GO BACK IN TIME BY CLICKING Enter.", width / 2, height / 2 + 75);
  text("YOU THINK MAYBE BIG-TUNIA WAS WHISPERING MEAN THINGS ABOUT YOUR GARDENING ABILITIES... NO ONE WOULD KNOW, RIGHT?", width / 2, height / 2 + 100);
  myRec.resultString = 0;

}
