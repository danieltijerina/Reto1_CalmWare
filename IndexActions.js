
/*if(contador != 0){
	var contador = 0;
}*/

//var contador = document.getElementById("resultado").innerHTML;

/*document.getElementById("resultado").innerHTML = contador;
document.getElementById("disponibilidad").innerHTML = contador;*/

//document.getElementById("resultado").innerHTML = 0;

//alert(contador);

var quit = false;

something();

function something() {
    if(quit) {
       return;
    } 
    quit = true;
    
    var contador = 0;
    alert("jala");
}

function cambiarDisp(){
    window.location.href = "disponibilidad.html";
  }

function cambiarIni(){
	window.location.href = "Index.html";
}

function cambiarSes(){
	window.location.href = "iniciarSesion.html";
}

function ponerContador() {
	alert(contador);
	document.getElementById("disp").innerHTML = contador;
}

function entrar(){
	if(document.getElementById("usuario").value == "admin1"){
		if(document.getElementById("contra").value == "admin1"){
			window.location.href = "admin.html";
		}
	}
}

function entradaSalida(tipo){

	if(tipo == 1){
		document.getElementById("resultado").innerHTML++;
	}
	else{
		if(contador > 0){
			document.getElementById("resultado").innerHTML--;
		}
	}

	//alert(contador);

	//document.getElementById("resultado").innerHTML = contador;

}

function guardar() {
	var contador = document.getElementById("resultado").innerHTML;
	window.location.href="index.html";
	//alert(document.getElementById("resultado").innerHTML);
	document.getElementById("disp").innerHTML = "lksd";
	alert(contador);
}