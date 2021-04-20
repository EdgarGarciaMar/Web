
const update = ()=>{/*funcion flecha que se llama en html*/
const text = document.querySelector("#text")
const view = document.querySelector("#view")
view.srcdoc=text.value/*le mandamos al id view accediento a srcdoc los valores del textarea */
}