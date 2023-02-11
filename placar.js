let meusPontos = 0;
function placar(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width/5, 27);
}
function marcaPontos(){
  if(yAtor < 15){
    meusPontos +=1;
    retornaInicio();
    placarSound.play();
  }
}
