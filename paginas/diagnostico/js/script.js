let preguntas = ["¿Con qué frecuencia te has sentido abrumado(a) o has tenido pensamientos de que no podrás cumplir con todas tus obligaciones académicas (entregas, exámenes, trabajos)?",
            "¿Con qué frecuencia has experimentado malestares físicos como dolor de cabeza, tensión muscular, fatiga excesiva o problemas de sueño relacionados con la carga de estudio?",
            "¿Con qué frecuencia has notado que postergas (procastinas) tus actividades académicas importantes o evitas situaciones relacionadas con la escuela/universidad debido a la ansiedad que te generan?",
            "¿Con qué frecuencia sientes que el volumen de tareas, trabajos y la dificultad de los exámenes excede tu capacidad para prepararte y realizarlos adecuadamente?",
            "¿Con qué frecuencia, ante el exceso de trabajo académico, optas por aislarte o encerrarte en ti mismo(a) en lugar de buscar apoyo en compañeros, profesores o familia?"
        ];
let contenedor_preguntas = document.querySelector("#formulario-preguntas-diagnostico");

function crearPregunta(){
    const escalasConfig = [
        {valor: "1"},
        {valor: "2"},
        {valor: "3"},
        {valor: "4"},
        {valor: "5"}
    ];

    preguntas.forEach((textoPregunta, index) => {

        const contenedor_pregunta = crearElemento('div', {class : 'contenedor_pregunta'});

        const pregunta = crearElemento('label',{
            textContent: textoPregunta,
            class: 'pregunta',
            htmlFor: textoPregunta
        });

        const rango = crearElemento('input',{
            type: 'range',
            class: 'rango-pregunta',
            name: textoPregunta,
            min: 1,
            value: 1,
            max: 5,
            step: 1
        });

        const escalas = crearElemento('div',{ class: 'escalas'});

        escalasConfig.forEach(escala => {
            escalas.appendChild(crearElemento('span', {
                textContent : escala.valor 
            }));
        });

        [pregunta, rango, escalas].forEach(el =>contenedor_pregunta.appendChild(el));
        contenedor_preguntas.appendChild(contenedor_pregunta);
    });

}

function crearElemento(tag, atributos = {}){
    const elemento = document.createElement(tag);
    
    Object.entries(atributos).forEach(([key, value]) => {
        if(key === 'class'){
            elemento.classList.add(value);
        }else{
            elemento[key] = value;
        }
    });
    return elemento;
}

function enviarRespuestas(event){
    event.preventDefault();

    const formulario = document.querySelector("#formulario-preguntas-diagnostico");

    const formData = new FormData(formulario);

    const datos = Object.fromEntries(formData.entries());

    localStorage.setItem("Diagnostico", datos);
    Iniciar();
    console.log(datos); 
}

crearPregunta();

function Iniciar(event){
    window.location.href="../juego/index.html";
}
console.log(localStorage.getItem("respuesta formulario"));