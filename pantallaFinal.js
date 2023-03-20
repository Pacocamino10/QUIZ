class PantallaFinal {


  constructor(nombre,tiempo,aciertos, fallos,total) {
    this.name=nombre;
    this.tiempoTotal=tiempo;
  this.aciertos=aciertos;
  this.fallos=fallos;
  this.total=total;
    this.cargarPagPal();
    this.mostrarPuntos();
  }


  cargarPagPal() {
    document.body.innerHTML = "";
    let contenedorJuego = document.createElement("div");
    contenedorJuego.className = "contenedorJuego";

    let contenedorHijo = document.createElement("div");
    contenedorHijo.className = "contenedorHijo";
    document.body.appendChild(contenedorJuego);
    contenedorJuego.appendChild(contenedorHijo);

    let enunciado = document.createElement("h1");
    enunciado.textContent = "FIN DEL JUEGO";
    enunciado.className = "enunciado";
    contenedorHijo.appendChild(enunciado);

    let formularioJuego = document.createElement("div");
    formularioJuego.className = "contenedorForm";
    contenedorHijo.appendChild(formularioJuego);
    let botonsalir=document.createElement('button')
    botonsalir.onclick=("click",this.funcionEjecutarBoton)
    botonsalir.textContent="SALIR"
    contenedorHijo.appendChild(botonsalir)
    
  }
  funcionEjecutarBoton(){
    document.body.innerHTML="";
    new pantallaInicio();

  }

  mostrarPuntos(){
    console.log(this);
    let divNombre= document.createElement('div')
    divNombre.className="divAciertos"
    divNombre.textContent=" NOMBRE: "+this.name;
    

    let divAciertos= document.createElement('div')
    divAciertos.className="divAciertos"
    divAciertos.textContent=" TOTAL ACIERTOS:"+this.aciertos+" aciertos.";
    
    let divFallos= document.createElement('div')
    divFallos.className="divFallos"
    divFallos.textContent="TOTAL FALLOS: "+this.fallos+" fallos.";

    let divPuntos = document.createElement('div')
    divPuntos.className="divPuntos"
    divPuntos.textContent="TOTAL PREGUNTAS: "+this.total+" preguntas.";

    let divTiempo = document.createElement('div')
    divTiempo.className="divTiempo"
    divTiempo.textContent="TOTAL TIEMPO: "+this.tiempoTotal+" segundos.";

    let contenedor = document.querySelector('.contenedorForm');
    console.log(contenedor);

    contenedor.appendChild(divNombre);
    contenedor.appendChild(divAciertos);
    contenedor.appendChild(divFallos);
    contenedor.appendChild(divPuntos);
    contenedor.appendChild(divTiempo);
    



  }
}
