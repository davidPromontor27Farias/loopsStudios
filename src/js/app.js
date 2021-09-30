
const cerrar = document.querySelector('.icono-cerrar');
const navegacion = document.querySelector('.navegacion-mobile');
const modoOscuro = document.querySelector('.modo-oscuro');
const quitarAccion = document.querySelector('.boton-all');
const quitarAccion2 = document.querySelector('.boton-down')
const enlaces = document.querySelectorAll('.nav-global a');



document.addEventListener('DOMContentLoaded', ()=>{
        cerrar.addEventListener('click', ()=>{
            if(navegacion.classList.contains('mostrar')){
                navegacion.classList.remove('mostrar');
                cerrar.src = '/images/icon-hamburger.svg';
                
            }
            else{
                navegacion.classList.add('mostrar');
                cerrar.src = '/images/icon-close.svg';
            }
        })

        modDark(modoOscuro);
        elemento(quitarAccion);
        elemento(quitarAccion2);
        ScrollNav();

});


function ScrollNav(){
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', e => {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });

        })

    })
};
    
export function modDark(elemento){
    elemento.addEventListener('click', ()=>{
        document.body.classList.toggle('oscuro-agregado');


        if(document.body.classList.contains('oscuro-agregado')){
            localStorage.setItem('oscuroModo', 'true');
        }
        else{
            localStorage.setItem('oscuroModo', 'false');
        }
    });

    if(localStorage.getItem('oscuroModo') == 'true'){
        document.body.classList.add('oscuro-agregado');
    }
    else{
        document.body.classList.remove('oscuro-agregado');
    }
}
function elemento(elem){
    elem.addEventListener('click', e =>{
        e.preventDefault();
    });

}

