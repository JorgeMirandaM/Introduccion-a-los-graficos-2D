function ponerPixel(contexto, x,y, color){
    contexto.fillStyle = color;
    contexto.fillRect(x, y, 1, 1);
} 


function dibujar(event){

  var canvas = document.getElementById("lienzo");
  var contexto = canvas.getContext("2d");

  var form = document.getElementById("f"); //accedemos al formulario

  var radio = parseInt(form.elements["radio"].value); //obtenemos el valor de la abscisa

  var c = form.elements["c"].value; //obtenemos el color

  //circulo amarillo con radio de 50 pixeles.
  //cuyo centro esta definido por las coodenadas del clic del rat�n
  circulo(event.offsetX, event.offsetY, radio, contexto, c);

}

//Implementaci�n del algoritmo de Bresenham para circulos 
function circulo(xc, yc, radio, contexto, color){
  var x = radio*(-1);
  var y = 0;
  var r=radio;
  var err = 2-2*radio;
  do{
    ponerPixel(contexto, xc-x, yc+y, color);
    ponerPixel(contexto, xc-y, yc-x, color);
    ponerPixel(contexto, xc+x, yc-y, color);
    ponerPixel(contexto, xc+y, yc+x, color);
    r=err;
    if(r>x) err+=++x*2+1; if(r<=y) err+=++y*2+1;
  }while(x<0);

}








