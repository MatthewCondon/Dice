var totalDice;
var sumOfDice = 0;
var ones = 0;
var twos = 0;
var threes = 0;
var fours = 0;
var fives = 0;
var sixes = 0;

//boolean value
var win;

//for "rolling"
var mouseCount = 0;

//special function - number is decided by person, using a random bottom and top value was crashing it
/*
var luckyNumBot = sumOfDice - 15;
var luckyNumTop = sumOfDice + 15;
var luckyNum = random(luckyNumBot,luckyNumTop);
*/
var luckyNum = 73;

//boolean for roll button
var clicked = false;

let img1; //happy
let img2; //bored

var h;
var w;

//vars for canvas size
var x = 800;
var y = 700; //y variable must be 100 less than x

function preload() {
  //images taken from google creative commons license
  img1 = loadImage("happy_face.png"); //"happy face"
  img2 = loadImage("bored_face.png"); //"bored face"
}

function setup() {
  background(0);
  setInterval(draw, 2000); //timer
  createCanvas(x, y); //scaled, height must be 100 less than width
  //extra info - some canvas sizes will produce dice not easily visible on screen. in that case, make canvas wider but not taller.
  noLoop();
  r = 0;
  g = 0;
  b = 0;
}

function draw() {
  background(0);
  h = height / 2;
  w = width * 0.98;
  noStroke();
  sumOfDice = 0;
  totalDice = 0;
  ones = 0;
  twos = 0;
  threes = 0;
  fours = 0;
  fives = 0;
  sixes = 0;
  for (var y = 0; y < h; y += 160) {
    for (var x = 0; x < w; x += 115) {
      var dice = new Die(10 + x, 10 + y);
      /*
      if (clicked) {
        dice.diceRoll();
        clicked = false;
      }
      
      if (
        mouseX > 25 &&
        mouseX < 225 &&
        mouseY > height / 1.35 &&
        mouseY < height / 1.35 + 100 &&
        mouseIsPressed
      ) {
      */
      dice.diceRoll();
      //}
      dice.diceShow();
      sumOfDice = 0;
      totalDice = 0;

      totalDice = ones + twos + threes + fours + fives + sixes + 1;
      sumOfDice =
        ones +
        twos * 2 +
        threes * 3 +
        fours * 4 +
        fives * 5 +
        sixes * 6 +
        dice.getValue();
      noStroke();
      if (dice.getValue() == 1) {
        ones++;
        r = random(255);
        g = random(255);
        b = random(255);
      } else if (dice.getValue() == 2) {
        twos++;
        r = random(255);
        g = random(255);
        b = random(255);
      } else if (dice.getValue() == 3) {
        threes++;
        r = random(255);
        g = random(255);
        b = random(255);
      } else if (dice.getValue() == 4) {
        fours++;
        r = random(255);
        g = random(255);
        b = random(255);
      } else if (dice.getValue() == 5) {
        fives++;
        r = random(255);
        g = random(255);
        b = random(255);
      } else if (dice.getValue() == 6) {
        sixes++;
        r = random(255);
        g = random(255);
        b = random(255);
      }
    }
  }
  barButtonEtc();
  youGotLucky();
}

function barButtonEtc() {
  fill("grey");
  rect(0, height / 1.5, width, height);
  fill("gold");
  rect(width * 0.03125, height / 1.35, width * 0.25, height * 0.1428);
  fill("black");
  textSize(width * 0.0375);
  textFont("Georgia");
  text("Roll", width * 0.1187, height / 1.35 + height * 0.0857);

  textStyle(BOLDITALIC);
  textSize(width * 0.0375);
  fill(19, 84, 20);
  text("Stats:", width * 0.4375, height / 1.35);
  textSize(width * 0.025);
  fill(0, 49, 128);
  textStyle(NORMAL);
  //left column
  text(
    "Total Dice: " + totalDice,
    width * 0.3125,
    height / 1.35 + height * 0.04285
  );
  text("1's: " + ones, width * 0.3125, height / 1.35 + height * 0.07142);
  text("2's: " + twos, width * 0.3125, height / 1.35 + height * 0.1);
  text("3's: " + threes, width * 0.3125, height / 1.35 + height * 0.1285);
  //right column
  text(
    "Sum of Dice: " + sumOfDice,
    width * 0.5,
    height / 1.35 + height * 0.04285
  );
  text("4's: " + fours, height * 0.5714, height / 1.35 + height * 0.07142);
  text("5's: " + fives, height * 0.5714, height / 1.35 + height * 0.1);
  text("6's: " + sixes, height * 0.5714, height / 1.35 + height * 0.1285);
  //bottom middle
  fill(171, 0, 17);
  textStyle(BOLDITALIC);
  text("Lucky Number: 73", width * 0.375, height / 1.35 + height * 0.2);
  textStyle(NORMAL);
  text(
    "Are you lucky enought to roll it?",
    width * 0.325,
    height / 1.35 + height * 0.2285
  );
}

function youGotLucky() {
  //bored face
  image(img2, width * 0.725, height * 0.6857, width / 4, width / 4);
  if (sumOfDice === luckyNum) {
    //text winner
    textSize(150);
    fill("gold");
    stroke(0, 13, 255);
    strokeWeight(10);
    text("WINNER", width / 2 - width * 0.375, height / 2 - height * 0.07142);

    //happy face
    image(img1, width * 0.725, height * 0.6857, width / 4, width / 4);
  }
}

function mousePressed() {
  redraw();
  //mouseCount++;
  //console.log(mouseCount);
  //why does it turn on if clicked everywhere... why not just the box
  /*if (
    mouseX > 25 &&
    mouseX < 225 &&
    mouseY > height / 1.35 &&
    mouseY < height / 1.35 + 100
  ) {
    clicked = true;
  } else clicked = false;
  */

  r = random(255);
  g = random(255);
  b = random(255);
  ones = 0;
  twos = 0;
  threes = 0;
  fours = 0;
  fives = 0;
  sixes = 0;
}

class Die {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.value = int(random(1, 7));
  }

  diceRoll() {
    this.value = int(random(1, 7));
  }

  diceShow() {
    fill("white");
    rect(this.x, this.y, 100, 100, 15);
    noStroke();
    if (this.value == 1) {
      fill(r, g, b);
      ellipse(this.x + 50, this.y + 50, 15, 15);
    } else if (this.value == 2) {
      fill(r, g, b);
      ellipse(this.x + 25, this.y + 25, 15, 15);
      ellipse(this.x + 75, this.y + 75, 15, 15);
    } else if (this.value == 3) {
      fill(r, g, b);
      ellipse(this.x + 25, this.y + 25, 15, 15);
      ellipse(this.x + 50, this.y + 50, 15, 15);
      ellipse(this.x + 75, this.y + 75, 15, 15);
    } else if (this.value == 4) {
      fill(r, g, b);
      ellipse(this.x + 25, this.y + 25, 15, 15);
      ellipse(this.x + 75, this.y + 25, 15, 15);
      ellipse(this.x + 25, this.y + 75, 15, 15);
      ellipse(this.x + 75, this.y + 75, 15, 15);
    } else if (this.value == 5) {
      fill(r, g, b);
      ellipse(this.x + 25, this.y + 25, 15, 15);
      ellipse(this.x + 75, this.y + 25, 15, 15);
      ellipse(this.x + 50, this.y + 50, 15, 15);
      ellipse(this.x + 25, this.y + 75, 15, 15);
      ellipse(this.x + 75, this.y + 75, 15, 15);
    } else if (this.value == 6) {
      fill(r, g, b);
      ellipse(this.x + 25, this.y + 25, 15, 15);
      ellipse(this.x + 75, this.y + 25, 15, 15);
      ellipse(this.x + 25, this.y + 50, 15, 15);
      ellipse(this.x + 75, this.y + 50, 15, 15);
      ellipse(this.x + 25, this.y + 75, 15, 15);
      ellipse(this.x + 75, this.y + 75, 15, 15);
    } else {
      fill(r, g, b);
    }
  }
  getValue() {
    return this.value;
  }
}
