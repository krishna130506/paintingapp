 drawings = []
  db_drawing = [] 
start = false;
//var clr;
function setup() {
    var canvas = createCanvas(400,400);
    database = firebase.database();
   // clr = new clear();
   var clearButton = select('#clearButton')
    clearButton.mousePressed(clearDrawing);

}

function draw() {
    background(0);
    
if(start){
    db_drawing.push(createVector(mouseX,mouseY));
}
    
    stroke(255);
    strokeWeight(4);
    noFill();
        beginShape();
        for (var i = 0; i < db_drawing.length; i++) {
             vertex(db_drawing[i].x, db_drawing[i].y); 
             endShape();

             }
    
//clr.display();
 // drawSprites();

}
function mousePressed() { 
    start = true;
   var point = { 
        x: mouseX, 
        y: mouseY 
    }
     drawings.push(point); 
     var drawingRef = database.ref('drawing') 
    drawingRef.set({
        x:mouseX,
        y:mouseY
    })
     
    }
function mouseReleased() {
    start = false;
}

function clearDrawing() {
    db_drawing = [];
    drawings = [];
}