var database;
var form, player, game;
var gamestatesketch = 0;
var playercountsketch;
var allplayers;
var car1, car2, car3, car4;
var car1i, car2i, car3i, car4i, tracki;
var cars;

function preload()
{
    car1i = loadImage("images/car1.png");
    car2i = loadImage("images/car2.png");
    car3i = loadImage("images/car3.png");
    car4i = loadImage("images/car4.png");
    tracki = loadImage("images/track.jpg");  
}

function setup()
{
    createCanvas(displayWidth-50, displayHeight+50);
    database = firebase.database();

    game = new Game();
    game.readgamestate();
    game.start();


}

function draw()
{

    if(playercountsketch === 4)
    {
        game.updategamestate(1);
    }
    if(gamestatesketch === 1)
    {
        clear();
        game.play();
    }
    if(gamestatesketch === 2)
    {
        game.end();
    }
}    