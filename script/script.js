const botonAccion = document.getElementById('menu-burger');
const menuDesplegable = document.getElementById('menu-lateral');

botonAccion.addEventListener('click', ()=>{
    
    menuDesplegable.classList.toggle('aparece')
    if(menuDesplegable.contains('aparece')){
        menuDesplegable.remove('aparece')
    }
});
