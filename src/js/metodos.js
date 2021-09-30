
//selectores
const cuerpoTabla = document.querySelector('.cuerpo');
const contenidoAlerta = document.querySelector('.contenido-alerta');
//traernos los productos del localStorahe
document.addEventListener('DOMContentLoaded', ()=>{
    productosStorage();

})

function productosStorage(){
    let productos = JSON.parse(localStorage.getItem("carrito"));
    console.log(productos);
    
    if(productos.length === 0){
        const alerta = document.createElement('h1');
        const contenedorCompra = document.querySelector('.contenedor-compra');
        alerta.classList.add('nada-mostrar');
        contenedorCompra.style.display = 'none';
        alerta.textContent = "No hay nada para mostrar en su carrito, intenta agregando algo."
        contenidoAlerta.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
            window.location.href = 'carrito.html';
        }, 3000);
        return;
    }
    const contenidoAlerta2 = document.querySelector('.contenido-alerta');
    contenidoAlerta2.style.display = 'none';

    productos.forEach(producto => {
        const {img, titulo, precio,cantidad} = producto;
        const rows = document.createElement('tr');
        rows.classList.add('info-resumida');
        rows.innerHTML = `
            <td>
                <img src="${img}" class="img-producto">
            </td>
            <td>
                <h1 class="titulo-producto">${titulo}</h1>
            </td>
            <td>
                <h1 class="precio-producto">${precio}</h1>
            </td>
            <td>
                <h1 class="cantidad-producto">${cantidad}</h1>
            </td>

        `;
        
        cuerpoTabla.appendChild(rows);
    })

    totalApagar(productos);

}

function totalApagar(productos){

    let sumaTotal = [];
    productos.forEach((producto) => {
        const { precio, cantidad } = producto;
        let precioCorto = parseFloat(precio.substring(3));
        sumaTotal.push(precioCorto * cantidad);

    })

    cantidadTotal(sumaTotal);
}

function cantidadTotal(cantidades){
    const pagoAlerta = document.querySelector('.alerta-pago');
    let suma = cantidades.reduce( (acumulador, cantidades) => acumulador + cantidades);
    pagoAlerta.textContent = `Tu total a pagar es MXN ${suma}.00`;
}