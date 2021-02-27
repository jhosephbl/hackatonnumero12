var numPantalla="0";
var pantallaConNumero="si"
var usarPunto="no";
var numEspera=0;
var operapendiente="";
var solucion="";

function ingresarnumero (x){

    if(x!="."){
        if(numPantalla=="0" || pantallaConNumero=="si"){
            document.Calculadora.txtboxnros.value=x;
            numPantalla=x;
        }

        else if(x!="."){
            document.Calculadora.txtboxnros.value+=x;
            numPantalla+=x;

        }
    }

    if(x=="." && usarPunto=="no" && numPantalla=="0"){
        document.Calculadora.txtboxnros.value="0.";
        numPantalla=x;
        usarPunto="si";
    }

    else if(x=="." && usarPunto=="no"){
        document.Calculadora.txtboxnros.value +=x;
        numPantalla +=x;
        usarPunto="si";
    }

    else if(x=="." && usarPunto=="si"){
        
    }

    pantallaConNumero="no"
}


function ingresaroperacion(y){
    if(operapendiente==""){
        numEspera=document.Calculadora.txtboxnros.value;
        document.Calculadora.txtboxnros.value+=y;
        operapendiente = y;
        pantallaConNumero = "no";
        numPantalla = "";
        usarPunto = "no";
    }

}

function resultado(){
    if(operapendiente != ""){
        solucion=numEspera+operapendiente+numPantalla;
        document.Calculadora.txtboxnros.value=eval (solucion);
        numPantalla=eval(solucion);
        pantallaConNumero="si";
        operapendiente="";
        usarPunto="no";

    }

}

function limpiar(){
    numPantalla="0";
    pantallaConNumero="si"
    usarPunto="no";
    numEspera=0;
    operapendiente="";
    solucion="";
    document.Calculadora.txtboxnros.value="0"
}



	