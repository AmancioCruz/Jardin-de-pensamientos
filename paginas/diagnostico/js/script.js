let preguntas = ["pregunta 1","pregunta 2"];
let contenedor_preguntas = document.querySelector("#formulario-preguntas-diagnostico");

function crearPregunta(){
    const escalasConfig = [
        {valor: "1 (Nunca)"},
        {valor: "2"},
        {valor: "3 (Moderado)"},
        {valor: "4"},
        {valor: "5 (Mucho)"}
    ];

    preguntas.forEach(textoPregunta => {
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

        [pregunta, rango, escalas].forEach(el =>contenedor_preguntas.appendChild(el));
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

    const formulario = document.querySelector("#preguntas");

    const formData = new FormData(formulario);

    const datos = Object.fromEntries(formData.entries());

    console.log(datos);  
}

crearPregunta();