const color = document.querySelector("#color")//referencia de variable color en html por id en js
const Salida = document.querySelector("#salida")//Referencia al id salida en html


color.addEventListener("input",()=>{//Funcion flecha
    const value= color.value//guarda el color en hexadecimal
    Salida.innerHTML = value//imprime en el doc el color en exadecimal
    Salida.style.background= value //cambia el color al color del selector en el recuadro
    Salida.style.color = "#FFFFFF" //cambia el color de las letras del color
})