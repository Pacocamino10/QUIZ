# EL GRAN QUIZ

> El gran proyecto ha llegado, esta vez en forma de Quiz, para ello has de estar preparad@ porque la cosa comienza a complicarse

## Descripción

La aplicación deberá mostrar una pantalla de bienvenida, en ella un botón que de paso al juego, este será de preguntas y respuestas. Para ello, deberás pintar un formulario con una pregunta y 4 posibles respuestas, solo una de ellas será la correcta.

Cuando el jugador seleccione una pregunta, deberás mostrar si esta es la correcta, en caso de haber acertado deberás mostrar la siguiente pregunta. Si la respuesta has fallado, deberás decidir la funcionalidad, ya sea pasar a la siguiente pregunta o dar otro intento al jugador.

Una vez el juego haya terminado una pantalla de fin se deberá mostrar, en esta, la puntuación deberá aparecer, en el caso de que te atrevas, tambien un top 10 la acompañará.

## Especificaciones

* El código deberá de hacerse en Programación Orientada a Objetos.
* Las preguntas deben provenir de un json (abajo tienes varios ejemplos)
* Se deben pintar tantas preguntas como vengan en el json, en su defecto, se puede preguntar al jugador cuantas quiere ver
* Actualmente tan solo van a existir 4 respuestas, pero puedes adaptar el código por si el día de mañana vienen más o menos
* Actualmente solo hay una respuesta correcta, pero puedes adaptar el código por si el día de mañana hay más (las respuestas correctas serían un array)

### Clases que te recomiendo crear

1. Clase PantallaIncio
2. Clase Juego (por si el día de mañana quieres varios juegos a la vez)
3. Clase Pregunta
4. Clase PantallaFinal

## Bonus

* Añadir el tiempo que lleva el jugador de juego
* Poner un tiempo máximo por pregunta
* Guardar puntuación del jugador (localStorage)
* Hacer un top10 jugadores
* Añadir opción de volver a jugar

### Clases recomendadas para el bonus

1. Clase Tiempo
2. Clase Top10

## Ejemplos de preguntas

```javascript
const preguntas = {
    "questions": [
        {
            "question": "How do you round the number 7.25, to the nearest integer?",
            "answers": [
                "Math.round(7.25)",
                "round(7.25)",
                "Math.rnd(7.25)",
                "rnd(7.25)"
            ],
            "correctAnswer": 0
        },
        {
            "question": "Which operator is used to assign a value to a variable?",
            "answers": [
                "x",
                "-",
                "=",
                "*"
            ],
            "correctAnswer": 0
        },
        {
            "question": "How do you write \"Hello World\" in an alert box?",
            "answers": [
                "msgBox(\"Hello World\");",
                "alert(\"Hello World\");",
                "alertBox(\"Hello World\");",
                "msg(\"Hello World\");"
            ],
            "correctAnswer": 0
        },
        {
            "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
            "answers": [
                "document.getElement(\"p\").innerHTML = \"Hello World!\";",
                "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
                "#demo.innerHTML = \"Hello World!\";",
                "document.getElementByName(\"p\").innerHTML = \"Hello World!\";"
            ],
            "correctAnswer": 2
        },
        {
            "question": "What is the correct syntax for referring to an external script called \"xxx.js\"?",
            "answers": [
                "<script href=\"xxx.js\">",
                "<script src=\"xxx.js\">",
                "<script name=\"xxx.js\">",
                "<script declare=\"xxx.js\">"
            ],
            "correctAnswer": 2
        }
    ]
}
```

```javascript
const preguntas = {
    "questions": [
        {
            "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
            "answers": [
                "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
                "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
                "#demo.innerHTML = \"Hello World!\";",
                "document.getElement(\"p\").innerHTML = \"Hello World!\";"
            ],
            "correctAnswer": 2
        },
        {
            "question": "Which event occurs when the user clicks on an HTML element?",
            "answers": [
                "onmouseover",
                "onmouseclick",
                "onclick",
                "onchange"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Where is the correct place to insert a JavaScript?",
            "answers": [
                "Both the <head> section and the <body> section are correct",
                "The <footer>",
                "The <body> section",
                "The <head> section"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Inside which HTML element do we put the JavaScript?",
            "answers": [
                "<script>",
                "<js>",
                "<javascript>",
                "<scripting>"
            ],
            "correctAnswer": 2
        },
        {
            "question": "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
            "answers": [
                "if i =! 5 then",
                "if (i <> 5)",
                "if i <> 5",
                "if (i != 5)"
            ],
            "correctAnswer": 3
        },
        {
            "question": "How does a FOR loop start?",
            "answers": [
                "for (i <= 5; i++)",
                "for i = 1 to 5",
                "for (i = 0; i <= 5; i++)",
                "for (i = 0; i <= 5)"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Which operator is used to assign a value to a variable?",
            "answers": [
                "x",
                "*",
                "-",
                "="
            ],
            "correctAnswer": 0
        }
    ]
}
```

## JSONS que no necesariamente tienen 4 respuestas

```javascript
const questions = {
    "questions": [
        {
            "question": "How does a WHILE loop start?",
            "answers": [
                "while (i <= 10)",
                "while i = 1 to 10",
                "while (i <= 10; i++)"
            ],
            "correctAnswer": 0
        },
        {
            "question": "Which event occurs when the user clicks on an HTML element?",
            "answers": [
                "onclick",
                "onchange",
                "onmouseclick",
                "onmouseover"
            ],
            "correctAnswer": 1
        },
        {
            "question": "What is the correct way to write a JavaScript array?",
            "answers": [
                "var colors = [\"red\", \"green\", \"blue\"]",
                "var colors = \"red\", \"green\", \"blue\"",
                "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
                "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")"
            ],
            "correctAnswer": 2
        },
        {
            "question": "What will the following code return: Boolean(10 > 9)",
            "answers": [
                "NaN",
                "true",
                "false"
            ],
            "correctAnswer": 1
        },
        {
            "question": "How do you call a function named \"myFunction\"?",
            "answers": [
                "call myFunction()",
                "myFunction()",
                "call function myFunction()"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Is JavaScript case-sensitive?",
            "answers": [
                "True",
                "False"
            ],
            "correctAnswer": 0
        },
        {
            "question": "How to write an IF statement in JavaScript?",
            "answers": [
                "if (i == 5)",
                "if i == 5 then",
                "if i = 5",
                "if i = 5 then"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Where is the correct place to insert a JavaScript?",
            "answers": [
                "The <body> section",
                "Both the <head> section and the <body> section are correct",
                "The <head> section",
                "The <footer>"
            ],
            "correctAnswer": 2
        },
        {
            "question": "The external JavaScript file must contain the <script> tag.",
            "answers": [
                "True",
                "False"
            ],
            "correctAnswer": 0
        },
        {
            "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
            "answers": [
                "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
                "document.getElement(\"p\").innerHTML = \"Hello World!\";",
                "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
                "#demo.innerHTML = \"Hello World!\";"
            ],
            "correctAnswer": 3
        }
    ]
}
```

```javascript
const questions = {
    "questions": [
        {
            "question": "How does a FOR loop start?",
            "answers": [
                "for i = 1 to 5",
                "for (i = 0; i <= 5; i++)",
                "for (i <= 5; i++)",
                "for (i = 0; i <= 5)"
            ],
            "correctAnswer": 0
        },
        {
            "question": "How do you write \"Hello World\" in an alert box?",
            "answers": [
                "alertBox(\"Hello World\");",
                "msg(\"Hello World\");",
                "alert(\"Hello World\");",
                "msgBox(\"Hello World\");"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Which operator is used to assign a value to a variable?",
            "answers": [
                "*",
                "-",
                "x",
                "="
            ],
            "correctAnswer": 2
        },
        {
            "question": "Inside which HTML element do we put the JavaScript?",
            "answers": [
                "<js>",
                "<javascript>",
                "<script>",
                "<scripting>"
            ],
            "correctAnswer": 1
        },
        {
            "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
            "answers": [
                "document.getElement(\"p\").innerHTML = \"Hello World!\";",
                "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
                "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
                "#demo.innerHTML = \"Hello World!\";"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Where is the correct place to insert a JavaScript?",
            "answers": [
                "The <head> section",
                "Both the <head> section and the <body> section are correct",
                "The <body> section",
                "The <footer>"
            ],
            "correctAnswer": 0
        },
        {
            "question": "How can you detect the client's browser name?",
            "answers": [
                "client.navName",
                "navigator.appName",
                "browser.name"
            ],
            "correctAnswer": 2
        },
        {
            "question": "How do you call a function named \"myFunction\"?",
            "answers": [
                "call function myFunction()",
                "call myFunction()",
                "myFunction()"
            ],
            "correctAnswer": 2
        },
        {
            "question": "What is the correct syntax for referring to an external script called \"xxx.js\"?",
            "answers": [
                "<script name=\"xxx.js\">",
                "<script declare=\"xxx.js\">",
                "<script src=\"xxx.js\">",
                "<script href=\"xxx.js\">"
            ],
            "correctAnswer": 0
        },
        {
            "question": "What is the correct way to write a JavaScript array?",
            "answers": [
                "var colors = \"red\", \"green\", \"blue\"",
                "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
                "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
                "var colors = [\"red\", \"green\", \"blue\"]"
            ],
            "correctAnswer": 1
        }
    ]
}
```
