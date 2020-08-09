var child, parent, database;
var appState = "start", form,start,app;

function setup(){
    canvas = createCanvas(300,500);
    database = firebase.database();
    start= new Start();
    start.page();
}
function draw(){
    background(255,223,0);
}