import { Usuario } from "./def.js";
//falta agregar restricciones


export function Comenzar(event){
    event.preventDefault();
    console.log("hola");
    /*let datosFormulario = new FormData(formularioUsuario);
    
    const datos = Object.fromEntries(datosFormulario.entries());
        
    console.log(datos);

    usuarios.push(new Usuario(datos.nombre, datos.maestria, datos.semestre));
    
    usuarios.forEach(usuario=>{
        usuario.ImprimirDatos();
    });
    
    localStorage.setItem("Usuario JP", JSON.stringify(usuarios));*/

    //window.location.href = "../paginas/diagnostico/index.html"
    
}
