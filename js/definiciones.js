export class Usuario{
    constructor(nombre, maestria, semestre){
        this.nombre = nombre;
        this.maestria = maestria;
        this.semestre = semestre;
    }
    ImprimirDatos(){
        console.log(this.nombre);
        console.log(this.maestria);
        console.log(this.semestre);
    }
}

