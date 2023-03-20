class Juego {
 
  todasLasPreguntas = [];
  todasLasRespuestas = [];
  todasLasCorrectAnswer = [];
  contadorPregunta = 0;
  contadorAcierto = 0;
  contadorFallo = 0;
  contadorPuntos = 0;
  contadorEspecial = 1;
  totalTime = 0;

  constructor(nombre,rondas) {
    this.name = nombre;
    this.numeroRondas=rondas
    this.cargarPagPal();
    this.mostrarTiempo();
    this.listaPreguntas();
    this.listaRespuesta();
    this.listaRespuestaCorrectas();
    this.mostrarPregunta();
    this.mostrarBotones();
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
    enunciado.textContent = "ENUNCIADO PREGUNTA";
    enunciado.className = "enunciado";
    contenedorHijo.appendChild(enunciado);
    let formularioJuego = document.createElement("div");
    formularioJuego.className = "contenedorForm";
    contenedorHijo.appendChild(formularioJuego);
    let contenedorTiempo = document.createElement("span");
    contenedorTiempo.className = "contenedorTiempo";
    contenedorJuego.appendChild(contenedorTiempo);
  }
  mostrarTiempo() {
    let totalTime = 120;
    let divTiempo = document.querySelector(".contenedorTiempo");
    divTiempo.textContent = totalTime;

    function updateClock() {
      if (totalTime == 0) {
        alert("Final ");

        finalJuego();
      } else {
        totalTime -= 1;
        divTiempo.textContent = totalTime;

        setTimeout(updateClock, 1000);
      }
    }
    updateClock();
  }

  mostrarBotones() {
    if (this.contadorPregunta < this.numeroRondas) {
      let array = this.todasLasRespuestas[this.contadorPregunta];
      array.forEach((element, index) => {
        let boton = document.createElement("button");
        boton.textContent = element;
        boton.className = "botoncito";
        boton.setAttribute("data-posicion", `${index}`);
        boton.onclick = this.comprobarResultado.bind(this);
        document.querySelector(".contenedorForm").appendChild(boton);
        this.id++;
      });
    } else {
      this.finalJuego();
    }
  }

  comprobarResultado(e) {
    let eleccion = e.target.dataset.posicion;
    let divTiempo = document.querySelector(".contenedorTiempo");
    if (eleccion == this.todasLasCorrectAnswer[this.contadorPregunta]) {
      alert("correcta");
      this.contadorAcierto++;
      this.contadorPregunta++;
      this.totalTime= 120-divTiempo.textContent;

      this.nuevaRespuesta();
    } else {
      alert("incorrecta");
      this.contadorFallo++;
      this.contadorPregunta++;
      this.totalTime= 120-divTiempo.textContent;
      this.nuevaRespuesta();
    }
  }

  mostrarPregunta() {
    for (let i = 0; i < this.numeroRondas; i++) {
      if (i == this.contadorPregunta) {
        let enunciado = document.querySelector(".enunciado");
        enunciado.textContent = this.todasLasPreguntas[i];
      }
    }
  }

  listaPreguntas() {
    for (var clave in preguntas) {
      if ((clave = "questions")) {
        for (let i = 0; i < preguntas[clave].length; i++) {
          const respuesta = preguntas[clave][i].question;
          this.todasLasPreguntas.push(respuesta);
        }
      }
    }
  }
  listaRespuesta() {
    for (var clave in preguntas) {
      if ((clave = "questions")) {
        for (let i = 0; i < preguntas[clave].length; i++) {
          const respuesta = preguntas[clave][i].answers;
          this.todasLasRespuestas.push(respuesta);
        }
      }
    }
  }

  listaRespuestaCorrectas() {
    for (var clave in preguntas) {
      if ((clave = "questions")) {
        for (let i = 0; i < preguntas[clave].length; i++) {
          const respuesta = preguntas[clave][i].correctAnswer;
          this.todasLasCorrectAnswer.push(respuesta);
        }
      }
    }
  }

  nuevaRespuesta() {
    let formulario = document.querySelector(".contenedorForm");
    formulario.innerHTML = "";
    if (this.contadorPregunta <= this.todasLasRespuestas.length) {
      this.listaRespuestaCorrectas();
      this.mostrarPregunta();
      this.mostrarBotones();
    } else {
      this.finalJuego();
    }
  }

  finalJuego() {
    console.log("FIN DEL JUEGO");

    new PantallaFinal(
      this.name,
      this.totalTime,
      this.contadorAcierto,
      this.contadorFallo,
      this.contadorPregunta
    );
  }
}
