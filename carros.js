//variaveis dos carros
let wCarros = 50;
let hCarros = 40;
let xCarros = [500, 500, 500, 500, 500, 500];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeDosCarros = [4, 6, 5, 10, 6.6, 4.6];
function mostrarCarros(){
  for(let i=0; i< imagemCarros.length; i=i+1){image(imagemCarros[i], xCarros[i], yCarros[i], wCarros, hCarros);}
}
function movimentoCarros(){
  for(let i=0; i< imagemCarros.length; i=i+1){
    xCarros[i] -= velocidadeDosCarros[i];
  }
}
function loopDosCarros(){
  for(let i=0; i< imagemCarros.length; i=i+1){
    if(fimDaEstrada(xCarros[i])){
    xCarros[i] = 600;
    } 
  }
}
function fimDaEstrada(xCarros){
  return xCarros < -40;
}