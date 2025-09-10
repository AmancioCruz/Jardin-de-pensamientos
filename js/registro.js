import { Usuario } from "./def.js";

let usuarios = [];
const formularioUsuario = document.querySelector("#formulario-registro");

export function Registrar(event){
    event.preventDefault();
    const datosFormulario =  new FormData(formularioUsuario);
    const datos = Object.fromEntries(datosFormulario.entries());
    usuarios.push(new Usuario(datos.nombre, datos.maestria, datos.semestre));
    usuarios.forEach(element => {
        element.ImprimirDatos();
    });

    localStorage.setItem("Usuario JP", JSON.stringify(usuarios));
    window.location.href = "../paginas/diagnostico/index.html";
}

