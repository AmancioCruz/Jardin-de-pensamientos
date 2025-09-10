
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

function redimencionarCanvas(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

window.addEventListener("resize", redimencionarCanvas);
redimencionarCanvas();

let dibujos = [];

function dibujarCirculo(event){
    console.log(event.offsetX);
    console.log(event.offsetY);

    dibujos.push(new Flor(event.offsetX, event.offsetY));
}



class Circulo{
    constructor(x,y,alto,ancho){
        this.x = x;
        this.y = y;
        this.alto = alto;
        this.ancho = ancho;
    }
    Dibujar(){
        ctx.fillRect(this.x, this.y, this.alto, this.ancho); 
        ctx.strokeRect(this.x, this.y, this.alto, this.ancho); 
    }
}

class Flor {
    constructor(x, y, escala = 10) {
        this.x = x;
        this.y = y;
        this.escala = escala;
        // Sprite simple de una flor en forma de matriz
        this.sprite = [
            [0,1,0],
            [1,2,1],
            [0,3,0]
        ];
        // Colores: 0 = vacío, 1 = pétalo, 2 = centro, 3 = tallo
        this.colores = {
            1: "pink",
            2: "yellow",
            3: "green"
        };
    }

    Dibujar() {
        for (let fila = 0; fila < this.sprite.length; fila++) {
            for (let col = 0; col < this.sprite[fila].length; col++) {
                const valor = this.sprite[fila][col];
                if (valor !== 0) {
                    ctx.fillStyle = this.colores[valor];
                    ctx.fillRect(
                        this.x + col * this.escala,
                        this.y + fila * this.escala,
                        this.escala,
                        this.escala
                    );
                    ctx.strokeRect(
                        this.x + col * this.escala,
                        this.y + fila * this.escala,
                        this.escala,
                        this.escala
                    );
                }
            }
        }
    }
}

function renderizarDibujos(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    dibujos.forEach(dibujo => {
    dibujo.Dibujar();
  });

  requestAnimationFrame(renderizarDibujos)

}

renderizarDibujos();