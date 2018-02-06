////////// VARIABILI //////////

{var avanzamento=0
var space=0
var var1=0
var trasp=0
var trasp2=255
var loser=0
var ssss=0
var wrong=0}

/////// VARIABILI TASTI ///////

{
 a=0
 b=0
 c=0
 d=0
 e=0
 f=0
 g=0
 h=0
} 

/////// VARIABILI AUDIO ///////

{
var breath
var breathdiff=0
var analyser1
var heartbeat
var heartdiff=0
var analyser2
var gnash
var gnashdiff=0
var analyser3
var skin
var skindiff=0
var analyser4
var stomach
var stomachdiff=0
var analyser5
var joint
var jointdiff=0
var analyser6
var blood
var blooddiff=0
var analyser7
var brain
var braindiff=0
var fft

} 

///////////////////////////////

function preload(){
  
splashscreen= loadImage("assets/splash.png")
vuoto=        loadImage("assets/vuoto.png")
camera1 =     loadImage("assets/1.png")
breath =      loadSound("assets/breath.mp3")
heartbeat =   loadSound("assets/heartbeat2.mp3")
gnash =       loadSound('assets/gnash.mp3')
skin =        loadSound('assets/skin.mp3')
stomach =     loadSound('assets/stomach.mp3')
joint =       loadSound('assets/joint.mp3')
blood =       loadSound('assets/blood.mp3')
brain =       loadSound('assets/brain.mp3')
font=         loadFont('assets/UniversNextPro-Light.ttf')

}

///////////////////////////////

function setup() {
  createCanvas(windowWidth,windowHeight)
  textFont(font)
  textSize(18)
  textAlign(CENTER)
    
    analyser1 = new p5.Amplitude();
    analyser1.setInput(breath);
    breath.loop();
    
    analyser2 = new p5.Amplitude();
    analyser2.setInput(heartbeat);
    heartbeat.loop();
    
    analyser3 = new p5.Amplitude();
    analyser3.setInput(gnash);
    gnash.loop();
   
    analyser4 = new p5.Amplitude();
    analyser4.setInput(skin);
    skin.loop();
    
    analyser5 = new p5.Amplitude();
    analyser5.setInput(stomach);
    stomach.loop();
    
    analyser6 = new p5.Amplitude();
    analyser6.setInput(joint);
    joint.loop();
    
    analyser7 = new p5.Amplitude();
    analyser7.setInput(blood);
    blood.loop();
    
    fft = new p5.FFT();
    fft.setInput(brain);
    brain.loop();

}

//////////// DRAW /////////////

function draw() {
  
{aa()
bb()
cc()
dd()
ee()
ff()
gg()
hh()
codice=a+b+c+d+e+f+g+h
}
  
  
  if(keyIsPressed === true) { avanzamento+=0.01 } else {
  
  a=0;
  b=0;
  c=0;
  d=0;
  e=0;
  f=0;
  g=0;
  h=0;
  if(avanzamento<=0){avanzamento=0} else{avanzamento = avanzamento-0.025} 
  }
    
  //////background//////

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
  
  
  ///////blink///////
  
  {blink()
  push()
  translate(windowWidth,windowHeight)
  rotate(PI)
  blink()
  pop()} 
  
  //////////////////
  
  Stomach();

  Breath();

  Heartbeat();
  
  Gnash();

  totskin();

  Joint();

  Blood()

  Brain();


  strokeWeight(3)
  stroke(255)
  line(0,windowHeight-20,avanzamento*50,windowHeight-20)
  
  Lose();
  Finale();

  
  
}

// FUNZIONI AUDIO-ANIMAZIONI //


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

function Heartbeat() {
  
  var vol2 = analyser2.getLevel();
  
  if ((codice ===1)&&(avanzamento>2)) {heartdiff+=0.01/2} else {if(heartdiff<=0){hearthdiff=0} else {heartdiff=heartdiff-0.025 } }
  
   
   heartbeat.setVolume(0.2+heartdiff+avanzamento/15+loser)
   if (keyIsPressed === false) {noStroke()} else {
  
   noFill()
   stroke(255,255,255,heartdiff*200);
   strokeWeight(1);
   ellipse (windowWidth/2,windowHeight/2,500-vol2*800);
   
   noStroke();
   fill(255,255,255,heartdiff*200);
   ellipse(windowWidth/2,windowHeight/2,vol2*200);
   }
   
   
  if ((avanzamento>5)&&(codice!=3)&&(codice!=6)&&(codice!=7)&&(codice!=8)&&(codice!=9)&&(codice!=10)&&(keyIsPressed === true)) {push(); fill(255); noStroke(); text('Keep holding B',width/2,windowHeight-35); pop()}

   
  } 

function Gnash() {
   var vol3 = analyser3.getLevel();
   
   if ((codice ===3)&&(avanzamento>5)) {gnashdiff+=0.01/2} else {if(gnashdiff<=0){gnashdiff=0} else {gnashdiff=gnashdiff-0.025 } }

   gnash.setVolume(0.02+gnashdiff+avanzamento/15+loser)


   if (keyIsPressed === false) {noStroke()} else {
   noFill();
   stroke(255,255,255,gnashdiff*200);
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

  if ((avanzamento>8)&&(codice!=6)&&(avanzamento<11)&&(keyIsPressed === true)) {push(); fill(255); noStroke(); text('Keep holding C',width/2,windowHeight-35); pop()}


}

function totskin() {
  
  
  if ((codice ===6)&&(avanzamento>8)) {skindiff+=0.01/2} else {if(skindiff<=0){skindiff=0} else {skindiff=skindiff-0.025 } }

  skin.setVolume(0.02+skindiff+avanzamento/15+loser)

  
  if (keyIsPressed === false) {noStroke()} else {
  
   var vol4X = analyser4.getLevel();
   push()
   scale(1+vol4X*3,1);
   
   Skin(0,0);
   Skin(0,-110);
   Skin(0,110);
   Skin(-95,-55);
   Skin(-95,55);
   Skin(-95,165);
   Skin(95,-55);
   Skin(95,55);
   Skin(95,165);
   Skin(-190,-110)
   Skin(-190,0)
   Skin(190,-110)
   Skin(190,0);
   Skin(190,110)
   Skin(190,220);
   Skin(285,55);
  
  function Skin(x1,y1) {
  
   var vol4 = analyser4.getLevel();
   noFill();
   stroke(255,255,255,skindiff*200);
   strokeWeight(1);
   polygon(width/2-75+x1,height/2-75+y1,60-vol4*200,6);
   
   strokeWeight(10);
   line(width/2-75+x1+10*vol4*50,height/2-75+y1,width/2-75+x1-10*vol4*50,height/2-75+y1);


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

}
  pop()
  
}   
  
  if ((avanzamento>11)&&(codice !=7)&&(avanzamento<14)&&(keyIsPressed === true)) {push(); fill(255); noStroke(); text('Keep holding D and release C',width/2,windowHeight-35); pop()}

  
}

function Stomach() {
  
   var vol5 = analyser5.getLevel();
   
   if ((codice ===7)&&(avanzamento>11)) {stomachdiff+=0.01/2} else {if(stomachdiff<=0){stomachdiff=0} else {stomachdiff=stomachdiff-0.025 } }

   
   stomach.setVolume(0.02+stomachdiff+avanzamento/15+loser)

   
   if (keyIsPressed === false) {noFill(); noStroke()} else{
   noStroke()
   fill(255,255,255,stomachdiff*200);
   ellipse(width/2,(height/2+80)-80*vol5*20,20);
   ellipse(width/2-60,(height/2+80)-80*vol5*10,10);
   ellipse(width/2+60,(height/2+80)-80*vol5*15,15);
   fill(0,0,0,stomachdiff*900)
   stroke(255,255,255,stomachdiff*200);
   strokeWeight(1);
   arc(width/2,height/2,260,260,0,PI);
   bezier(width/2-130,height/2,width/2,height/2+65*vol5*15,width/2,height/2-65*vol5*15,width/2+130,height/2);
}
  if ((avanzamento>14)&&(codice !=8)&&(avanzamento<17)&&(keyIsPressed === true)) {push(); fill(255); noStroke(); text('Keep holding E and release D',width/2,windowHeight-35); pop()}

}

function Joint() {
   var vol6 = analyser6.getLevel();
   
   if ((codice ===8)&&(avanzamento>14)) {jointdiff+=0.01/2} else {if(jointdiff<=0){jointdiff=0} else {jointdiff=jointdiff-0.025 } }


   joint.setVolume(0.02+jointdiff+avanzamento/15+loser)

   if (keyIsPressed === false) {noFill(); noStroke()} else{
     
   noFill();
   stroke(255,255,255,jointdiff*200);
   strokeWeight(1);
   ellipse(width/2,height/2,150,150);
   fill(255,255,255,jointdiff*200);
   ellipse(width/2,height/2,30,30);
   
   noFill();
   strokeWeight(10);

   line(width/2+vol6*100,height/2-90,width/2+vol6*500,height/2-200);
   arc(width/2,height/2,175,175,(3*PI/2-PI/4)+vol6*3,-PI/4+vol6*3);
   
   line(width/2+vol6*100,height/2+90,width/2+vol6*500,height/2+200);
   arc(width/2,height/2,175,175,PI/4-vol6*3,3*PI/4-vol6*3);
   }
   
     if ((avanzamento>17)&&(codice !=9)&&(avanzamento<20)&&(keyIsPressed === true)) {push(); fill(255); noStroke(); text('Keep holding F',width/2,windowHeight-35); pop()}

   
}

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

  if ((avanzamento>20)&&(codice !=10)&&(avanzamento<23)&&(keyIsPressed === true)) {push(); fill(255); noStroke(); text('Keep holding G and release B',width/2,windowHeight-35); pop()}


}

function Brain() {
  
  if ((codice ===10)&&(avanzamento>20)) {braindiff+=0.01/2} else {if(braindiff<=0){braindiff=0} else {braindiff=braindiff-0.025 } }

  
  brain.setVolume(0.02+braindiff+avanzamento/15+loser)

  
  if (keyIsPressed === false) {noFill(); noStroke()} else{
   noFill();
   stroke(255,255,255,braindiff*200);
   push()
   translate(0,height/2);
   scale(1.6,1)
   
   if (avanzamento>23){spess++}else{spess=1}
   strokeWeight(spess)
   
   var spectrum = fft.analyze();
   beginShape();
   for (i = 0; i<spectrum.length; i++) {
   vertex(i, map(spectrum[i]*3, 0, 255, height/2, 0));
   }
   endShape();
   pop()
  }
}


// START-LOSE-FINALE //


function start(){
  
  push()
  noStroke()

  space++
  
  if(splashscreen===vuoto){
  fill(255,255,255,space*3)} else {noFill()}
  textSize(30)

  text("Tap SPACE to close your eyes",width/2,height/2+5)
 pop()
  
}

function Lose(){
  
  push()
  noStroke()
  fill(255,0,0,trasp)
  rect(0,0,width,height)
  fill(255,255,255,trasp)
  textSize(30)

  text("Maybe it is time to leave the room.",width/2,height/2+20)
  textSize(18)
  text("Refresh the page.",width/2,height/2+50)

  pop()
  
}

function Finale(){
  
  if((codice===10)&&(avanzamento>25)){
  trasp2=255
  push()
  noStroke()
  fill(255,255,255,trasp2)
  rect(0,0,width,height)
  fill(0,0,0,trasp2)
  textSize(30)

  text("Now you should know what true silence sounds like.",width/2,height/2+20)
  textSize(18)
  text("Refresh the page.",width/2,height/2+50)
  noLoop()
  breath.stop()
  heartbeat.stop()
  gnash.stop()
  skin.stop()
  stomach.stop()
  joint.stop()
  blood.stop()
  brain.setVolume(0.3)
  
  } else {trasp2=0}
  
}


// MAPPATURA TASTI //


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


// FUNZIONI UTILI //

function mousePressed(){
  
  if(splashscreen === vuoto){
     image(splashscreen,windowWidth/2-((windowWidth/1.5)/2),windowHeight/2-((windowWidth/2.8)/2),windowWidth/1.5,windowWidth/2.8)
  } else {  splashscreen = vuoto}
  
  
  
}
function keyReleased() {
   
   if(space!=0){space=0}
   
   if (avanzamento>2){
        wrong+=1
   }

  if (wrong>6){
      trasp=150
      loser=wrong
  } 
  

}
function backgroundImage(img) {
    
    var x = 0;
    var y = 0;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;
    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;
    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;
    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);
    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;
    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;
    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch, x, y, w, h);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}