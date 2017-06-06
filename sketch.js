var d = 100;
var greyColorPicker = 0;
var colorMode = false;
var greenColorPicker = 0;

var speed = 0;
var easing = 2;
var opacity = 40;

var c;
var button1, button2, button3, button4;
var count = 0;

var drawingMode = true;

function setup() {
	//Canvas Element
	c = createCanvas(960, 500);
	c.parent('p5Canvas');
	background(55);
	noStroke();

	//Button Elements
	button1 = createDiv('<p class="keyName">1</p>');
	button2 = createDiv('<p class="keyName">2</p>');
	button3 = createDiv('<p class="keyName">E</p>');
	button4 = createDiv('<p class="keyName">S</p>');
	button5 = createDiv('<p class="keyName">C</p>');

	button1.class('icon');
	button2.class('icon');
	button3.class('icon');
	button4.class('icon');
	button5.class('icon');

	button1.parent('key1');
	button2.parent('key1');
	button3.parent('key1');
	button4.parent('key1');
	button5.parent('key1');

	button1.mouseClicked(mode1);
	button2.mouseClicked(mode2);
	button3.mouseClicked(erase);
	button4.mouseClicked(saveState);
	button5.mouseClicked(colorToggle);
	colorMode = false;
}

function draw() {
	var target = dist(mouseX, mouseY, pmouseX, pmouseY); // This draws only when you click and combines easing and speed to create a more realiztic tool.
	speed += (target - speed) * easing;
	//strokeWeight(speed);
	if (drawingMode == true) {
		noStroke();
		if (colorMode == false){
			if (mouseIsPressed) {
				if (greyColorPicker == 0) {
					fill(200, opacity);
					greyColorPicker++;
				} else if (greyColorPicker == 1) {
					fill(125, opacity);
					greyColorPicker++;
				} else if (greyColorPicker == 2) {
					fill(75, opacity);
					greyColorPicker = 0;
				}
				triangle(mouseX + random(-d, d), mouseY - random(-d, d), mouseX + random(-d, d), mouseY + random(-d, d), mouseX - random(-d, d), mouseY + random(-d, d));
			}
		} else {
			if (mouseIsPressed) {
				if (greenColorPicker == 0) {
						fill(128, 128, 0);
						greenColorPicker++;
					} else if (greenColorPicker == 1) {
						fill(153, 139, 35);
						greenColorPicker++;
					} else if (greenColorPicker == 2) {
						fill(104, 94, 23, opacity);
						greenColorPicker = 0;
					}
					triangle(mouseX + random(-d, d), mouseY - random(-d, d), mouseX + random(-d, d), mouseY + random(-d, d), mouseX - random(-d, d), mouseY + random(-d, d));
				}
		}
	} else {
		if (mouseIsPressed) {
			noFill();
			if (colorMode == false){
				stroke(255, opacity);
				quad(mouseX + random(-d*2, d*2), mouseY + random(-d*2, d*2), mouseX + random(-d*2, d*2), mouseY + random(-d*2, d*2), mouseX + random(-d*2, d*2), mouseY + random(-d*2, d*2), mouseX + random(-d*2, d*2), mouseY + random(-d*2, d*2));
			} else {
				stroke(128, 128, 0, opacity);
				quad(mouseX + random(-d*2, d*2), mouseY + random(-d*2, d*2), mouseX + random(-d*2, d*2), mouseY + random(-d*2, d*2), mouseX + random(-d*2, d*2), mouseY + random(-d*2, d*2), mouseX + random(-d*2, d*2), mouseY + random(-d*2, d*2));
			}
		}
	}
}

function keyPressed() {
	if (keyCode == 83) {
		saveCanvas(c, 'drawing' + count, 'png');
		count++;
	}

	if (keyCode === 69) {
		background(55);
	}

	if (keyCode === 49) {
		drawingMode = true;
	}

	if (keyCode === 50) {
		drawingMode = false;
	}
}

function mode1() {
	drawingMode = true;
}

function mode2() {
	drawingMode = false;
}

function erase() {
	background(55);
}

function saveState() {
	saveCanvas(c, 'drawing' + count, 'png');
	count++;
}

function colorToggle () {
	if (colorMode == true) {
		colorMode = false;
	} else if (colorMode == false) {
		colorMode = true;
	}
}