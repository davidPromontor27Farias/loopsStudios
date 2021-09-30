import {modDark} from './app.js';

//selectores
const carrito = document.querySelector('.carrito');
const carritoTabla = document.querySelector('.tbody');
const listadoArticulo = document.querySelector('.productos-card');
const listadoTelefonos = document.querySelector('.productos-card-telefonos');
const listadoLaptops = document.querySelector('.cards-computadoras');
const oscuroIcon = document.querySelector('.mod-dark');
export let carritoCompra = [];



agregar();
function agregar(){

    listadoArticulo.addEventListener('click', agregarComida);
    listadoTelefonos.addEventListener('click', agregarComida);
    listadoLaptops.addEventListener('click', agregarComida);
    modDark(oscuroIcon);
    carrito.addEventListener('click', eliminarArticulo);

    document.addEventListener('DOMContentLoaded', () => {
        carritoCompra = JSON.parse(localStorage.getItem('carrito')) || []
        console.log(carritoCompra);
        contenidoInfoHTML();
    })
}

function agregarComida(e){
    if(e.target.classList.contains('btn-agregar')){

        //Obtenemos el card completo
        const articulo = e.target.parentElement.parentElement;
        
        const alerta = document.createElement('P');
        alerta.classList.add('alerta-agregado');
        alerta.textContent = 'Se ha agregado un producto a tu carrito';
        listadoArticulo.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);


        leerDatos(articulo);
        
    }
}

function leerDatos(articulo){
    const infoArticulo = {
        img: articulo.querySelector('img').src,
        titulo: articulo.querySelector('.nombre-articulo').textContent,
        precio: articulo.querySelector('.titulo-precio').textContent,
        id: articulo.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //Verificamos que el articulos existan
    const existeArticulo = carritoCompra.some( articulo => articulo.id === infoArticulo.id);

    if(existeArticulo){
        const articulos = carritoCompra.map(articulo => {

            //S ya hay un articulo en el carrito igual se incrementara la cantidad en uno
            if(articulo.id === infoArticulo.id){
                articulo.cantidad++;
                return articulo;
            }
            else{
                //si no se pasara tal y como esta
                return articulo;
            }
        })

        carritoCompra = [...articulos];

    }
    else{
        //si no existe pues se agrega tal cual normal
        carritoCompra = [...carritoCompra, infoArticulo];
     
    }

    contenidoInfoHTML();
}


function contenidoInfoHTML(){

    limiarHTML();

    carritoCompra.forEach(articulo => {
        const {img, precio, cantidad, id, titulo} = articulo;
        const rows = document.createElement('tr');
        rows.classList.add('filas-tabla');
        rows.innerHTML = `
            <td>
                <img class="img-articulo" src="${img} ">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td class="boton-accion">
                <a href="#" class="borrar-curso" data-id="${id}">x</a>
            </td>
        `
        carritoTabla.appendChild(rows);
    });
    addStorage();
}

function limiarHTML(){
    while(carritoTabla.firstChild){
        carritoTabla.removeChild(carritoTabla.firstChild);
    }
}
function eliminarArticulo(e){
    //aplicamos delegation para observar por un elemento
    if(e.target.classList.contains('borrar-curso')){
        e.preventDefault();

        const articuloEliminado = e.target.getAttribute('data-id');
        carritoCompra = carritoCompra.filter(articulo => articulo.id !== articuloEliminado);

        contenidoInfoHTML();
    }
}

function addStorage(){
    localStorage.setItem('carrito', JSON.stringify(carritoCompra));
}


