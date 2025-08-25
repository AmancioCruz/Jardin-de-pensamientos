
function Comenzar(event){
    event.preventDefault();

    const formulario = document.querySelector("#formulario-registro");
    let formData = new FormData(formulario);
    
    const datos = Object.fromEntries(formData.entries());
        
    const json = JSON.stringify(datos);
    
    console.log(json);
    
    localStorage.setItem("respuesta formulario", json);

    window.location.href = "../paginas/diagnostico/index.html"
}