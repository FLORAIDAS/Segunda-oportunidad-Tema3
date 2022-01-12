var selectedRow = null;
function onFormSubmit(){
event.preventDefault();
var Datos = LeerInfo();
if(selectedRow == null){
    Insertar(Datos);
}else{
Actualizar(Datos);

}   
limpiar();
}

function LeerInfo(){
    var Datos= {};
    Datos["Numero"] = document.getElementById("Numero").value;
    Datos["Nombre"] = document.getElementById("Nombre").value;
    Datos["Oficina"] = document.getElementById("Oficina").value;
    Datos["Sueldo"] = document.getElementById("Sueldo").value;
    return Datos;

}

function Insertar(data){
    var table = document.getElementById('Encabezados').getElementsByTagName('tbody')[0];
    var nuevaFila = table.insertRow(table.length);
    var celda1 = nuevaFila.insertCell(0);
    celda1.innerHTML = data.Numero;
    var celda2 = nuevaFila.insertCell(1);
    celda2.innerHTML = data.Nombre;
    var celda3 = nuevaFila.insertCell(2);
    celda3.innerHTML = data.Oficina;
    var celda4 = nuevaFila.insertCell(3);
    celda4.innerHTML = data.Sueldo;
    var celda5 = nuevaFila.insertCell(4);
    celda5.innerHTML = `<button onClick='Editar(this)
    ' class="modificar"> Modificar </button> <button onClick='Eliminar(this)
    ' class="eliminar"> Eliminar </button>`
}

function Editar(td){
   selectedRow = td.parentElement.parentElement;
   document.getElementById('Numero').value = selectedRow.cells[0].innerHTML;
   document.getElementById('Nombre').value = selectedRow.cells[1].innerHTML;
   document.getElementById('Oficina').value = selectedRow.cells[2].innerHTML;
   document.getElementById('Sueldo').value = selectedRow.cells[3].innerHTML;
}

function Actualizar(Datos){
selectedRow.cells[0].innerHTML = Datos.Numero;
selectedRow.cells[1].innerHTML = Datos.Nombre;
selectedRow.cells[2].innerHTML = Datos.Oficina;
selectedRow.cells[3].innerHTML = Datos.Sueldo;

}

function Eliminar(td){
   if(confirm('¿Quiere eliminará el registro de la tabla?')){
    row = td.parentElement.parentElement;
    document.getElementById('Encabezados').deleteRow(row.rowIndex);
   }
   limpiar();
}

function limpiar(){
    document.getElementById('Numero').value = '';
    document.getElementById('Nombre').value = '';
    document.getElementById('Oficina').value = '';
    document.getElementById('Sueldo').value = '';
}