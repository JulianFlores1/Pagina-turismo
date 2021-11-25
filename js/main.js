const menu = document.querySelector('.menu-navegacion');
const hamburguer = document.querySelector('.hamburguer');



hamburguer.addEventListener('click', () =>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer ){

    menu.classList.toggle("spread")}
})