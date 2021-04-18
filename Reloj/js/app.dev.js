
const getHora = () => {
const fecha = new Date
const tiempo = {
hora: fecha.getHours (),
minuto: fecha.getMinutes(),
segundo: fecha.getSeconds()
}
const ahora = `${tiempo.hora} : ${tiempo.minuto} : ${tiempo.segundo}`;
    
    document.querySelector (".reloj").innerHTML = ahora;
}

setInterval(() =>  getHora(),1000); 