const element = document.querySelector("#canvas");
//contexto
const ctx = element.getContext("2d");
//calculo automatico para tomar el tamaño de ventana completa segun el dispositivo
const w = document.body.clientWidth;
const h = document.body.clientHeight;
element.width = w;
element.height = h;
// array de 300 que se une cuando hay un 0 y deja un espacio
const position = Array(300).join(0).split("");


const initmatrix = () => {
    //color de fondo
    ctx.fillStyle = "rgba(0,15,2,0.15)";//color semi transparente(color R 0,Saturacion en verde 15,Saturacion en azul 2, Transparencia 0.15)
    ctx.fillRect(0, 0, w, h);
    //color de texto
    ctx.fillStyle = "#4caf50";
    ctx.font = "15pt";

    position.map((y, index) => {
        const text = String.fromCharCode(1e3 + Math.random() * 30);//Al cambiar el charcode cambian las letras 1e5 chino,1e2 español, etc
        const x = (index * 15) + 15;
        canvas.getContext("2d").fillText(text, x, y);
        y > 100 + Math.random() * 1e5 ? position[index] = 0 : position[index] = y + 15;// ? Simbolo ternario
    })
};

setInterval(initmatrix, 60);

