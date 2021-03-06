var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playing = false;
var playA = false;
var playS = false;
var playD = false;
var playF = false;

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  if (playing) {
    background(0, 255, 255);
  } if (playA) {
    fill('white');
    noStroke();
    for (i = 0; i < 10; i++) {
    	ellipse(random(100),random(100),10,10);
    }
  } else if (playS) {
    fill('red');
    rect(23,30,50,10);
  } else if (playD) {
    for (y = 0; y < 100; y += 5) {
      stroke('black');
      line(y, 0, y, 20);
    }
  } else if (playF) {
    stroke('black');
    for (x = 10; x < 100; x += 10) {
      noFill();
      stroke('yellow');
      ellipse(50,50, x, x);
    }
  } else {
    background(255, 0, 255);
  }
  noStroke();
  fill('black');
  text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playA = true;
  } else if (key == 'S') {
    osc = oscS;
    playS = true;
  } else if (key == 'D') {
    osc = oscD;
    playD = true;
  } else if (key == 'F') {
    osc = oscF;
    playF = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playA = false;
  } else if (key == 'S') {
    osc = oscS;
    playS = false;
  } else if (key == 'D') {
    osc = oscD;
    playD = false;
  } else if (key == 'F') {
    osc = oscF;
    playF = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
