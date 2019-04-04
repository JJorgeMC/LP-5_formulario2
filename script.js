var productos = new Array();
const igv = 0.18;
var total;
var totalIgv;
const filas = document.getElementById('filas');
function respuestaBoton(){
    agregarProducto();
    vaciarTabla();
    generarFilas();
    //mostrarProductos();
}
function agregarProducto(){
    var nombre = document.getElementById('producto').value;
    var precio = document.getElementById('precio').value;
    var cantidad = document.getElementById('cantidad').value;
    var subtotal = precio*cantidad;

    productos[productos.length] = new Array(nombre, precio, cantidad, subtotal);
    alert(productos[productos.length-1].join(','));
}
function vaciarTabla(){
    document.getElementById('filas').innerHTML = "";
}
function mostrarProductos(){
    for(var  i = 0; i < productos.length; i++){
        var texto = document.createElement('span');
        texto.innerHTML = productos[i].join(',');
        document.getElementById('mostrar').appendChild('texto');
    }
}
function generarFilas(){
    for(var i=0; i < productos.length; i++){
        var fila = document.createElement('tr');
        fila.innerHTML = "<td>"+(i+1)+"</td><td>"+productos[i][0]+"</td><td>"+productos[i][1]+"</td><td>"+productos[i][2]+"</td><td>"+productos[i][3]+"</td><td>"+""+"</td>";
        filas.appendChild(fila);
    }
    alert('fin');
}