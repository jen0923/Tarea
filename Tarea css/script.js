function toggleBloque() {
   var demo =document.getElementById("operacionesContenedor");
if  (demo.style.display ==="none")   {
    demo.style.display = "block";
    document.getElementById ("toggleBloque").textContent= "ocultar texto"
} else {
    demo.style.display = "none";
    document.getElementById("toggleBloque").textContent= "Mostrar texto"
   }
}
function validarVacios(resultado,operacion) {
        if(!isNaN(resultado)) {
            imprimirMensaje(operacion,resultado);
        } else {
            document.getElementById('result').textContent = "Debe ingresar valores numericos";
        }
    }

    function sumar() {
        var Numero1= Number(document.getElementById ("myNumber1").value);   
        var Numero2= Number(document.getElementById ("myNumber2").value);   
        var respuesta = Numero1+Numero2;   
        document.getElementById("result").value=respuesta;

    }
    function restar() {
        var numero1= Number(document.getElementById ("myNumber1").value);   
        var numero2= Number(document.getElementById ("myNumber2").value);   
        var respuesta = numero1 - numero2;   
        document.getElementById("result").value=respuesta;
        
    }
    function multiplicar() {
        var Numero1= Number(document.getElementById ("myNumber1").value);   
        var Numero2= Number(document.getElementById ("myNumber2").value);   
        var respuesta = Numero1*Numero2;   
        document.getElementById("result").value=respuesta;
        
    }
    function imprimirMensaje(operacion, resultado) {
        document.getElementById("result").textContent = "El resultado de la" + operacion +"es" + resultado;
    

        var result= Number(document.getElementById ("result").value);   
     

    }
