var fundo;
var gameState = "jogar";

var player, playerIdle, playerRun;
var shot, shotImg;

function preload() {
  fundo = loadImage("images/ceu_escuro.png");

  playerIdle = loadImage("animations/idle/idle.gif");
  playerRun = loadImage("animations/run/runOnline.gif");

  shot = loadImage("images/blueFire.gif");
}
function setup() {
  createCanvas(1000, 600);

  player = createSprite(500, 300, 20, 20);
  player.addImage("idle", playerIdle);
  player.addImage("run", playerRun);
  player.scale = 0.4;
}

function draw() {
  background("black");
  image(fundo, 0, 0, 1000, 600);

  if ((gameState = "jogar")) {
    textAlign(CENTER);
    textSize(50);
    fill("#F2FF76");
    textFont("Georgia");
    text("✨Witch's Game✨", width / 2, 125);
  }

  controls();

  drawSprites();
}

function controls() {
  if (keyDown("d") || keyDown("right")) {
    player.x = player.x + 5;
    player.mirrorX(1);
    player.changeImage("run");
  } else if (keyDown("a") || keyDown("left")) {
    player.x = player.x - 5;
    player.mirrorX(-1);
    player.changeImage("run");
  } else if (keyDown("w") || keyDown("up")) {
    player.y = player.y - 5;
    player.changeImage("run");
  } else if (keyDown("s") || keyDown("down")) {
    player.y = player.y + 5;
    player.changeImage("run");
  } else {
    player.changeImage("idle");
  }
}
