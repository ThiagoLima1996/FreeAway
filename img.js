//variaveis do cenario
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let colisaoSound;
let placarSound;
let trilhaSound;
function preload(){
  imagemEstrada = loadImage("img/estrada.png");
  imagemAtor = loadImage("img/ator-1.png");
  imagemCarro1 =     loadImage("img/carro-1.png");
  imagemCarro2 =     loadImage("img/carro-2.png");
  imagemCarro3 =     loadImage("img/carro-3.png");
  colisaoSound =          loadSound("sound/colidiu.mp3");
  placarSound =           loadSound("sound/pontos.wav");
  trilhaSound =           loadSound("sound/trilha.mp3");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
}