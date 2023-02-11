//variáveis do ator
let xAtor = 100; 
let yAtor = 366;
let velocidadeDoAtor = 4;
//variavel da colisao
let colisao = false;
function mostrarEmovimentaAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30); 
  if (keyIsDown(UP_ARROW)){
    yAtor -= velocidadeDoAtor;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(bloqueio()){
     yAtor += velocidadeDoAtor; 
    }
  }
}
function verificaColisao(){
    for(let i=0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], wCarros, hCarros, xAtor, yAtor, 15)
    if (colisao){
   retornaInicio();
      if ( pontoMaiorQzero()){
          meusPontos -=1;
      }
      colisaoSound.play();
    }
  }
}
function retornaInicio(){
  yAtor = 366
}
function pontoMaiorQzero(){
  return meusPontos > 0;
}
function bloqueio(){
  return yAtor < 366;
}