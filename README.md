![Header](Assets/logo.png)

# About

**ANECHOICHAMBER** is a university project built in [p5.js](https://p5js.org/) during the course *Creative Coding* at the Politecnico di Milano.<br> The goal was to develop an interactive app depicting the audio sensations you feel when entering an anechoic chamber.

# Contents

- [Project idea](#project-idea)
- [Developement](#developement)
- [Keys interaction](#keys-interaction)
- [Challenges](#challenges)
- [Team](#team)

# Project idea

The theme we chose is the **anechoic chamber**, a room covered with audio-absorbent material, able to gain a level of silence below 0db. The user has the chance to take an experience otherwise impossible without having access to one of these chambers, which are very expensive to build, not many around the world, and quite difficult to have access to.

# Developement
To create the room, we designed it as a background image in Cinema4D.<br>
To code the app we mostly used Javascript (with [p5.js](https://p5js.org/))—relying thoroughly on the background image function—and in support to it we also used HTML and CSS.

The following examples were written using this library.

## **Create the room**

![cinema](Assets/render.gif)

* **Room movement**

![Room movement](Assets/movement.gif)

```
{background(0)
  x1=mouseX/30
  y1=mouseY/30
  push()
  translate(-x1,-y1)
  scale(1.04,1.04)
  backgroundImage(camera1)
  
  start()
  
  image(splashscreen,windowWidth/2-((windowWidth/1.5)/2),windowHeight/2-((windowWidth/2.8)/2),windowWidth/1.5,windowWidth/2.8) 
  pop()}
```
* **Blink**

![Blink](Assets/blink.gif)

```
function blink(){
  noStroke()
  fill(0)
  if (keyIsPressed === true) {

  var1+=35
  rect(0,-windowHeight/2+var1-35,windowWidth,windowHeight/2)
  if (var1 > windowHeight/2+1){
  var1=windowHeight/2+1;
  }} else {
  
    
  var1-=35
  rect(0,-windowHeight/2+var1-35,windowWidth,windowHeight/2)
  if (var1 < 0){
  var1=0;
  }} 
}
```
## **Create animation**

* **Lungs**

![Lungs](Assets/lungs.gif)

```
function Breath() {
  
   var vol1 = analyser1.getLevel()*2;
   
   
  if ((codice ===0)&&(keyIsPressed === true)) {breathdiff+=0.01/2} else {if(breathdiff<=0){breathdiff=0} else {breathdiff=breathdiff-0.025 } }


   breath.setVolume(0.2+breathdiff+avanzamento/15+loser)
   
   push()
   noFill();
   if (keyIsPressed === false) {noStroke()} else {
   stroke(255,255,255,breathdiff*200)
   strokeWeight(10);
   line(width/2,height/2-200-vol1*200,width/2,height/2+200-vol1*800);
   strokeWeight(1);
   quad(width/2-15,height/2+270+vol1*10,width/2-100-vol1*500,height/2+230+vol1*100,width/2-50-vol1*500,height/2-50-vol1*100,width/2-15,height/2-120-vol1*10);
   quad(width/2+15,height/2+270+vol1*10,width/2+100+vol1*500,height/2+230+vol1*100,width/2+50+vol1*500,height/2-50-vol1*100,width/2+15,height/2-120-vol1*10);
   pop()
   }

   if ((avanzamento>2)&&(codice!=1)&&(codice!=3)&&(avanzamento<5)&&(keyIsPressed === true)) {push(); fill(255); noStroke(); text('Keep holding A',width/2,windowHeight-35); pop()}


}
```


* **Heart**

![Heart](Assets/heart.gif)

```
function Heartbeat() {
   noFill();
   stroke(255);
   strokeWeight(1);
   var vol2 = analyser2.getLevel();
   ellipse (width/2,height/2,500-vol2*800);

   noStroke();
   fill(255);
   ellipse(width/2,height/2,vol2*200);
 
}
```
* **Gnash**

![Gnash](Assets/gnash.gif)

```
function Gnash() {
   var vol3 = analyser3.getLevel();
   noFill();
   stroke(255);
   strokeWeight(10);
   line(width/2+220+vol3*1200-125,height/2-70,width/2-220+vol3*1200-125,height/2-70);
   line(width/2-220-vol3*1200+125,height/2+170,width/2+220-vol3*1200+125,height/2+170);

   strokeWeight(1);
   rect(width/2+220+vol3*1200-175,height/2-52,100,100);
   rect(width/2+110+vol3*1200-175,height/2-52,100,100);
   rect(width/2+vol3*1200-175,height/2-52,100,100);
   rect(width/2-110+vol3*1200-175,height/2-52,100,100);
   rect(width/2-220+vol3*1200-175,height/2-53,100,100);
   
   rect(width/2+220-vol3*1200+75,height/2+53,100,100);
   rect(width/2+110-vol3*1200+75,height/2+53,100,100);
   rect(width/2-vol3*1200+75,height/2+53,100,100);
   rect(width/2-110-vol3*1200+75,height/2+53,100,100);
   rect(width/2-220-vol3*1200+75,height/2+53,100,100);

}
```

* **Skin**

![Skin](Assets/skin.gif)

```
function Skin() {
   var vol4 = analyser4.getLevel();
   noFill();
   stroke(255);
   strokeWeight(1);
   polygon(width/2-75,height/2-75,60-vol4*200,6);
   
   strokeWeight(10);
   line(width/2-75+10*vol4*50,height/2-75,width/2-75-10*vol4*50,height/2-75);

}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
```
* **Stomach**

![Stomach](Assets/stomach.gif)

```
function Stomach() {
   var vol5 = analyser5.getLevel();
   
   fill(255);
   ellipse(width/2,(height/2+80)-100*vol5*20,20,20);
   ellipse(width/2-60,(height/2+80)-100*vol5*10,10,10);
   ellipse(width/2+60,(height/2+80)-100*vol5*15,15,15);
   
   fill(30);
   stroke(255);
   strokeWeight(1);
   arc(width/2,height/2,260,260,0,PI);
   bezier(width/2-130,height/2,width/2,height/2+65*vol5*15,width/2,height/2-65*vol5*15,width/2+130,height/2);

}
```

* **Joints**

![Joints](Assets/joints.gif)

```
function Joint() {
   var vol6 = analyser6.getLevel();
   noFill();
   stroke(255);
   strokeWeight(1);
   ellipse(width/2,height/2,150,150);
   fill(255);
   ellipse(width/2,height/2,30,30);
   
   noFill();
   strokeWeight(10);

   line(width/2+vol6*100,height/2-90,width/2+vol6*500,height/2-200);
   arc(width/2,height/2,175,175,(3*PI/2-PI/4)+vol6*3,-PI/4+vol6*3);
   
   line(width/2+vol6*100,height/2+90,width/2+vol6*500,height/2+200);
   arc(width/2,height/2,175,175,PI/4-vol6*3,3*PI/4-vol6*3);
  
}
```


* **Blood**

![Blood](Assets/blood.gif)

```
function Blood() {
  
  var vol7 = analyser7.getLevel()*4000;
  
  if ((codice ===9)&&(avanzamento>17)) {blooddiff+=0.01/2} else {if(blooddiff<=0){blooddiff=0} else {blooddiff=blooddiff-0.025 } }
  
  
  blood.setVolume(0.02+blooddiff+avanzamento/15+loser)

  if (keyIsPressed === false) {noFill(); noStroke()} else{
  
  fill(255,255,255,blooddiff*200)
  noStroke()
  ssss++
  A=1
  B=1
  for(i=0; i<40; i++){
   particella(A++,20+B--)
  }
  if(vol7===0){ssss=0}
  function particella(x,y){
  s = ssss+vol7*x
  push()
  translate(s,height/2)
  rotate(s/90)
  ellipse(s/3,0,y)
  pop()}
}
```

* **Brain**

![Brain](Assets/brain.gif)

```
function Brain() {
   noFill();
   stroke(255);
   var spectrum = fft.analyze();

   beginShape();
   for (i = 0; i<spectrum.length; i++) {
   vertex(i, map(spectrum[i]*3, 0, 255, height/2, 0));
   }
   endShape();
   
}

```


## Keys interaction

![Keys](Assets/keys.gif)

```
{
function aa()     {if (key === 'a') {a=1}}
function bb()     {if (key === 'b') {b=2}}
function cc()     {if (key === 'c') {c=3}}
function dd()     {if (key === 'd') {c=4}}
function ee()     {if (key === 'e') {c=5}}
function ff()     {if (key === 'f') {c=6}}
function gg()     {if (key === 'g') {c=7}}
function hh()     {if (key === 'h') {c=8}}
}
```

## Challenges
The main challenge was to develop a coherent interaction, therefore we had to code a whole sequence for keeping track of the many keys pressed together. 
The second challenge was to find or to create appropriate sounds to convey the actual experience of a true chamber. Finally, when we finished all the different animations, another issue began when we had to put it all together.

# Team
**ANECHOICHAMBER** is developed by:
* Ruggero Accardo
* Emilio La Mura
* Tobia Scapin

### And you, do you know what sounds your body really makes?
Share this on social media if you managed to resist till the end, using the hashtag **#anechoichamber**
