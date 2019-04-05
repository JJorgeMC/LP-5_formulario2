var productos = new Array();
const igv = 0.18;
const filas = document.getElementById('filas');
//METODOS PRINCIPALES/////////////////////////////////////////////////////////////////////////////
function respuestaBoton(){
    if(areBoxesFilled){
        agregarProducto();
        vaciarTabla();
        generarFilas();
        limpiarCajas();
    }
    //mostrarProductos();
}
//METODOS AGREGAR/////////////////////////////////////////////////////////////////////////////////
function agregarProducto(){
    var nombre = document.getElementById('producto').value;
    var precio = document.getElementById('precio').value;
    var cantidad = document.getElementById('cantidad').value;
    var subtotal = precio*cantidad;

    productos[productos.length] = new Array(nombre, precio, cantidad, subtotal);
    alert(productos[productos.length-1].join(','));
}
//METODOS ELIMINAR////////////////////////////////////////////////////////////////////////////////
function respuestaEliminar(index){
    if(confirm('Desea eliminiar el producto: '+productos[index][0])){
        productos.splice(index,1);
        vaciarTabla();
        generarFilas();
        limpiarCajas();
    }
    

}

//METODOS MODIFICAR///////////////////////////////////////////////////////////////////////////////
function respuestaModificar(index){
    document.getElementById('producto').value = productos[index][0];
    document.getElementById('precio').value = productos[index][1];
    document.getElementById('cantidad').value = productos[index][2];
    let boton = document.getElementById('sp_boton');
    
    boton.innerHTML = '<input id="boton" type="button" value="Modificar" onclick="respuestaBotonModificar('+index+')">';
    
}
function modificarProducto(index){
    productos[index][0] = document.getElementById('producto').value;
    productos[index][1] = document.getElementById('precio').value;
    productos[index][2] = document.getElementById('cantidad').value;
    productos[index][3] = parseFloat(productos[index][1]) * parseInt(productos[index][2]);

    let boton = document.getElementById('sp_boton');
    boton.innerHTML = '<input type="button" id="boton" value="Agregar" onclick="respuestaBoton()"></input>';
    
}
function respuestaBotonModificar(index){
    if(areBoxesFilled){
        modificarProducto(index);
        vaciarTabla();
        generarFilas();
        limpiarCajas();
    }
}
//METODOS AUXILIARES//////////////////////////////////////////////////////////////////////////////
function generarFilas(){
    let subtotala = 0;
    for(var i=0; i < productos.length; i++){
        var fila = document.createElement('tr');
        fila.innerHTML = "<td>"+(i+1)+"</td><td>"+productos[i][0]+"</td><td>"+productos[i][1]+"</td><td>"+productos[i][2]+"</td><td>"+productos[i][3]+'</td><td><a href="#" onclick="respuestaModificar('+i+')"><i class="fas fa-pencil-alt"></i></a><a href="#" onclick="respuestaEliminar('+i+')"><i class="fas fa-times"></i></a></td>';
        filas.appendChild(fila);
        subtotala+=parseFloat(productos[i][3]);
    }
    document.getElementById('subtotal').innerHTML = subtotala
    document.getElementById('igvtotal').innerHTML = subtotala*igv;
    document.getElementById('total').innerHTML = subtotala + subtotala*igv;

}
function vaciarTabla(){
    document.getElementById('filas').innerHTML = "";
}
function areBoxesFilled(){
    let estado = false;
    if(document.getElementById('producto').value != "" && document.getElementById('precio').value != "" && document.getElementById('cantidad').value != ""){
        estado = true;
    }else{
        var form =  document.getElementById('formulario').getElementsByTagName('input');
        for(var i = 0; i < form.length-1; i++){
            if(form[i].value == ""){
                alert(i+'vacio');
                
            }
        }
    }
    return estado;
}
function limpiarCajas(){
    document.getElementById('producto').value = "";
    document.getElementById('precio').value = "";
    document.getElementById('cantidad').value = "";
}