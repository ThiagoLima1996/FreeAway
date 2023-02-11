//funções do cenario
function setup() {
  createCanvas(500, 400);
  trilhaSound.loop();
}
//funções dos desenhos 
function draw() {
  background(imagemEstrada);
  mostrarEmovimentaAtor();
  mostrarCarros();
  movimentoCarros();
  loopDosCarros();
  verificaColisao();
  placar();
  marcaPontos();
}
