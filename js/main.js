/*let element = document.getElementById("totalPrecio");
element.innerHTML="Total en precio";*/

//let txtNombre = document.getElementById("Name");
//txtNombre.value = "Taquitos";
//console.log(txtNombre.value);
//let txtNumber = document.getElementById("Number");

/*let campos = document.getElementsByClassName("campo");
campos[0].value="Taquitos al pastor light=Mexicana";
//console.log(campos[0].value);
//console.log(campos.length);
//console.log(campos);
for (let i=0; i<campos.length; i++){
    campos[i].style.border="red thin solid";
}//for 

let spans = document.getElementsByTagName("span");
for(let i=0; i<spans.length; i++){
    console.log(spans[i].textContent);
}//for i*/

/*let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");*/

/*cuerpoTabla[0].innerHTML = `<tr>
<th scope="row">1</th>
<td>Taquito de arrachera</td>
<td>5</td>
<td>$ 50.00</td>
</tr>`;*/
/*let agregar = document.getElementById("btnAgregar");
agregar.addEventListener("click", (event) =>{
    console.log("click en el boton agregar", event.target);
}
);*/
/*function agregarElementos{
    //lo que quiere que haga
}*/
//agregar.onclick = 
//console.log(agregar);

 // console.log(txtNombre.value, txtNumber.value);

let contador = 0;
let costoTotal = 0;
let totalEnProductos = 0;
let element = document.getElementById("totalPrecio");
element.innerHTML="Total en precio";

let total= document.getElementById("precioTotal");

let txtNombre = document.getElementById("Name");

let txtNumber = document.getElementById("Number");

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");
function validarNombre(){
    if (txtNombre.value.length <3) {
        return false;
    }//if
    return true;
}// validarNombre
function validarCantidad(){
    if(txtNumber.value.length==0) {
        return false;
    }// if
     if (isNaN(txtNumber.value)){
        return false;
     }//if

     if (parseFloat(txtNumber.value)<=0) {
        return false;
     }//if
     return true;
}// validarCantidad
let agregar = document.getElementById("btnAgregar");
agregar.addEventListener("click", (event) =>{
    event.preventDefault();
    if ((! validarNombre()) || (! validarCantidad())){
        let lista="";
        if (!validarNombre()){
            txtNombre.style.border="red thin solid";
            lista+="<li> Se debe escribir un nombre valido</li>";
        }//
        if (!validarCantidad()){
            txtNumber.style.border="red thin solid";
            lista+="<li> Se debe escribir una cantidad valida</li>";
        } 
        document.getElementById("alertValidacionesTexto").innerHTML=`Los campos deben ser llamados correctamente <ul>${lista} </ul>`;
        document.getElementById("alertValidaciones").style.display="block";
        setTimeout( function(){
        document.getElementById("alertValidaciones").style.display="none";
        },
        5000
        );
        return false;
    }//if
    txtNumber.style.border="";
    txtNombre.style.border="";
    document.getElementById("alertValidaciones").style.display="none";
    contador++;
    document.getElementById("contadorProductos").innerHTML=contador;
    localStorage.setItem("contadorProductos", contador);
    let precio = Math.floor((Math.random() * 50)*100)/100;
    let cantidad= parseFloat(txtNumber.value);
    totalEnProductos += (cantidad<1)?Math.ceil(cantidad):parseInt(cantidad);
    document.getElementById("productosTotal").innerHTML = totalEnProductos
    localStorage.setItem("productosTotal", totalEnProductos);
    costoTotal += (precio*cantidad);
    total.innerHTML = `$ ${costoTotal.toFixed(2)}`;
    localStorage.setItem("precioTotal", costoTotal.toFixed(2));
    let tmp = `<tr>
    <th scope="row">${contador}</th>
    <td>${txtNombre.value}</td>
    <td>${txtNumber.value}</td>
    <td>$ ${precio.toFixed(2)}</td>
    </tr>`;
    //console.log(tmp);
    cuerpoTabla[0].innerHTML += tmp;
    txtNumber.value="";
    txtNombre.value="";
    txtNombre.focus();
}
);
txtNombre.addEventListener("blur", (event)=>{
    event.target.value = event.target.value.trim();
}
);
txtNumber.addEventListener("blur", (event)=>{
    event.target.value = event.target.value.trim();
}
);

window.addEventListener("load", function(){
    if(localStorage.getItem("contadorProductos")!=null) {
           contador = parseInt(localStorage.getItem("contadorProductos"));
           document.getElementById("contadorProductos").innerHTML=contador;
     }//if contadorProductos
     if(localStorage.getItem("precioTotal")) {
       costoTotal = parseInt(localStorage.getItem("precioTotal"));
       document.getElementById("precioTotal").innerHTML=costoTotal;
     }//if precioTotal
       if(localStorage.getItem("productosTotal")) {
           totalEnProductos = parseInt(localStorage.getItem("productosTotal"));
           document.getElementById("productosTotal").innerHTML=totalEnProductos;
     }//if productosTotal
   }
   );


