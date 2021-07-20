
eventListener();
function eventListener(){
    const cerrar = document.querySelector('.icono-cerrar');
    const navegacion = document.querySelector('.navegacion');
    const modoOscuro = document.querySelector('#modo-oscuro');
    
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

    modoOscuro.addEventListener('click', ()=>{
        document.body.classList.toggle('oscuro-agregado');
    });

    //hola mundo
}