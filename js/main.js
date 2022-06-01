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

let element = document.getElementById("totalPrecio");
element.innerHTML="Total en precio";

let txtNombre = document.getElementById("Name");

let txtNumber = document.getElementById("Number");

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

let agregar = document.getElementById("btnAgregar");
agregar.addEventListener("click", (event) =>{
    let precio = Math.random() * 50;
    let tmp = `<tr>
    <th scope="row">1</th>
    <td>${txtNombre.value}</td>
    <td>${txtNumber.value}</td>
    <td>$ ${precio}</td>
    </tr>`;
    console.log(tmp);
    cuerpoTabla[0].innerHTML += tmp;
    txtNumber.value="";
    txtNombre.value="";
    txtNombre.focus();
}
);