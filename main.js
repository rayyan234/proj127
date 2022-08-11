song1="";
song2="";



function preload(){
song1=loadSong("music.mp3");
song2=loadSong("music2.mp3");
}


function setup(){
    canvas = createCanvas(600,530);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}


function draw(){
image(video,0,0,600,530);
}


function play(){
    song.play();
}