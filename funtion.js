class pantallaInicio {
  seleccion = document.getElementById("preguntas");
  constructor() {
    // creo contenedor
    let div = document.createElement("div");
    div.className = "contenedor";

    //creo h1
    let h1 = document.createElement("h1");
    h1.className = "texto";
    h1.textContent = "EL GRAN QUIZ";

    //añado elementos
    document.body.appendChild(div);
    document.querySelector(".contenedor").appendChild(h1);
    this.miniFormulario();

    //añado boton
    let boton = document.createElement("button");
    boton.addEventListener("click", this.funcionEjecutar);
    boton.textContent = "INICIO";
    boton.className = "botonInicio";
    document.querySelector(".contenedor").appendChild(boton);
  }

  miniFormulario() {
    //creo formulario
    let formulario = document.createElement("FORM");

    ////Crear el objeto label de Nombre
    let name = document.createElement("label");
    name.textContent = "INTRODUCE TU NOMBRE";
    formulario.appendChild(name);

    //crear imputNOMBRE
    let resultadoNombre = document.createElement("input");
    resultadoNombre.setAttribute("type", "text");
    resultadoNombre.className = "nombre";
    formulario.appendChild(resultadoNombre);
    formulario.appendChild(document.createElement("br"));

    ////Crear el objeto label de NumeroP
    let number = document.createElement("label");
    number.textContent = "INTRODUCE NUMERO DE PREGUNTAS";
    number.id = "preguntas";

    formulario.appendChild(number);
    formulario.appendChild(document.createElement("br"));
    //crear imputNOMBRE
    let resultadoNumeroP = document.createElement("input");
    resultadoNumeroP.setAttribute("type", "number");
    resultadoNumeroP.className = "numero";

    formulario.appendChild(resultadoNumeroP);

    ////Crear el objeto caja de texto Nombres

    let contenedor = document.querySelector(".contenedor");
    contenedor.appendChild(formulario);
  }

  funcionEjecutar() {
    let numeroPreguntas = document.querySelector(".numero").value;
    if (numeroPreguntas > 0 && numeroPreguntas <= preguntas.questions.length) {
      let name = document.querySelector(".nombre").value;
      console.log(name);
      console.log(numeroPreguntas);
      if (name && numeroPreguntas) {
        new Juego(name, numeroPreguntas);
      }
    } else {
      alert(("introduce valores del 1 al "+preguntas.questions.length+ ""));
    }
  }
}
let inicio = new pantallaInicio();
