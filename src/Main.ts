 /// <reference path="Proyecto.ts"/>


var areservacion:any[500][6] = [[1,"",,,"ACTIVO",0],[1,"",,,"ACTIVO",0],[1,"",,,"ACTIVO",0],[1,"",,,"ACTIVO",0],[1,"",,,"ACTIVO",0],[1,"",,,"ACTIVO",0],[1,"",,,"ACTIVO",0],[1,"",,,"ACTIVO",0],[1,"",,,"ACTIVO",0],[1,"",,,"ACTIVO",0]]; 

var afechas:any[20][500]=[[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]];
var acuartos:any[500][20]=[[1,"","","","","","","","","","","","","","","","","","","",""],[1,"","","","","","","","","","","","","","","","","","","",""],[1,"","","","","","","","","","","","","","","","","","","",""],[1,"","","","","","","","","","","","","","","","","","","",""],[1,"","","","","","","","","","","","","","","","","","","",""],[1,"","","","","","","","","","","","","","","","","","","",""] ];
var ireservacion:number;
var frmreservacion,frmcliente,frmfsalida,frmfentrada,frmboton01:any;
var frmestancia:any;
var iicuarto:any;
//var estatus.reservada,estatus.verifica,estatus.cancelado:boolean;
var frm: HTMLFormElement;
var frm_elements: HTMLFormControlsCollection;

var estatus = new reservacion.procesos(true,false,false,false);

let cuarto1 = new reservacion.Normal("Costo unitario de habitación en Planta Alta :");
let cuarto2 = new reservacion.Lujo("Costo unitario de habitación de Lujo :");

function Functioninicial() {    
    frm = <HTMLFormElement> document.getElementById("frm");
    frm_elements = <HTMLFormControlsCollection> frm.elements;
    event.preventDefault();
    ireservacion = 0;
    estatus.nueva = true;
    estatus.reservada = false;
    estatus.cancelado = false;
    estatus.verifica = false;
    inicializapantalla();
}

function inicializapantalla() {
    event.preventDefault();
        
    var fhoy = new Date();
    var fmanana = new Date();
    var dia1:any;
  //  document.getElementById("reservacion").innerHTML = "1";
    //  document.getElementById("cliente").innerHTML = "";
  //  dia1=(<HTMLInputElement>frm_elements["fentrada"]).value;    
  //  alert(dia1);
 //   fmanana.setDate(fmanana.getDate()+1);
 //   pendiente decir si en ese dia hay habitaciones disponibles
      
}

function nueva(){
    event.preventDefault();
    var vcuarto:any;
    var temres:number;
    temres = ireservacion + 1;
//    alert('Reservacion: ' +temres);
    estatus.nueva = true;
    
    estatus.reservada = false;
    estatus.verifica = false;
    estatus.cancelado = false;
    inicializapantalla();
    //document.getElementById('cliente').innerHTML = "2";
    (<HTMLInputElement>frm_elements["cliente"]).value = "";
    (<HTMLInputElement>frm_elements["fentrada"]).value ="2018-03-15";
    (<HTMLInputElement>frm_elements["fsalida"]).value = "2018-03-16";
    
    // poner todo como disponible

    for (var i=1; i<21; i++) {
        if (i  < 10 ) {
            vcuarto = "0" + String(i);
          } else {
            vcuarto = String(i);
          }

        document.getElementById(vcuarto).innerHTML = vcuarto+" Disponible";
        document.getElementById(vcuarto).style.color= 'black';

    }
    reservacion.calculaprecio();
    document.getElementById("Estatus").innerHTML = "";
    var temp:any;
    temp = ireservacion + 1;
    (<HTMLInputElement>frm_elements["reservacion"]).value= temp;
    document.getElementById("descrip1").innerHTML="";
    document.getElementById("descrip2").innerHTML="";
    document.getElementById("cuarto").innerHTML="";
}
    
function reservar() {
    event.preventDefault();
    //estatus.verifica = true;
    var scuarto:string;
    
    var stempfecha:string;
    var rfecha,tempfecha:any;
    var sd,difere:any;
    if (estatus.nueva) {
    if (estatus.verifica) {
       var dfechae,dfechas,ifechas:any;
       var snombre,vcuarto:any;
       ireservacion = ireservacion +1;
       dfechae = (<HTMLInputElement>frm_elements["fentrada"]).value;
       dfechas = (<HTMLInputElement>frm_elements["fsalida"]).value;       
       snombre = (<HTMLInputElement>frm_elements["cliente"]).value;
      
       rfecha = Date.parse((<HTMLInputElement>frm_elements["fsalida"]).value) - Date.parse((<HTMLInputElement>frm_elements["fentrada"]).value);
       difere = Math.floor(rfecha / 86400000); 
       areservacion[ireservacion][0] = ireservacion;
       areservacion[ireservacion][1] = snombre;
       
       areservacion[ireservacion][2] = String((<HTMLInputElement>frm_elements["fentrada"]).value); 
       areservacion[ireservacion][3] = String((<HTMLInputElement>frm_elements["fsalida"]).value);   
       
       areservacion[ireservacion][4] = "ACTIVO";
       areservacion[ireservacion][5] = difere; // DIFERENCIA DE FECHAS

       acuartos[ireservacion][0] = ireservacion;
       
       for (var icuarto =1; icuarto < 21;  icuarto++) {
           if (icuarto < 10 ) {
               scuarto = "0" + String(icuarto);
           } else {
               scuarto = String(icuarto);
           }
            acuartos[ireservacion][icuarto] = document.getElementById(scuarto).innerHTML
       }
       
       // recorre las fechas especificadas para la reservacion
       ifechas = dfechae;
       for (var i = 1; i <= difere; i++) { 
       // guarda los cuartos de una fecha
        i = i;
            for (var icuarto =0; icuarto < 20;  icuarto++) {
                if (icuarto + 1 < 10 ) {
                   scuarto = "0" + String(icuarto+1);
                 } else {
                   scuarto = String(icuarto+1);
                 }
            
                 vcuarto = document.getElementById(scuarto).innerHTML ;
                 if (vcuarto == scuarto+" Reservado") {
                     //tempfecha = ifechas + (i * 1);
                     //tempfecha = ifechas.setDate(ifechas.getDate() + i);
                     
                     //sd = dateToString(ifechas);
                     tempfecha = new Date( Date.parse(ifechas) +(86400000*(i)));
                     
                     sd = dateToString(tempfecha);



                     afechas[icuarto][ireservacion]= sd;
                 }
                 else {
                    afechas[icuarto][ireservacion]= "2000-01-01";
                 }
            }
       }
        


       estatus.nueva = false;
       estatus.reservada = true;
       alert('La reservacion: ' + ireservacion + ' ha sido procesada.');
       nueva();
       
    }else  {
        alert('Debe verificar disponibilidad antes de hacer la reservación.');
    }
} else {
    alert('No puede modificar reservaciones.');
}
     
}

function verificar() {
    var rfecha,difere,scuarto:any;
    var ifechas,dfechae,vfecha,vfechae,sd:any;
    event.preventDefault();
    if (estatus.cancelado){
       alert('Reservacion cancelada previamente.');
    } else{     
        if((<HTMLInputElement>frm_elements["cliente"]).value == "" ) { 
            alert('Debe definir un nombre');
        } else {     if (document.getElementById("precio").innerHTML == "0") {
            alert('Debe reservar por lo menos una habitacion.'); }
            else {
        
        estatus.verifica = true;

       rfecha = Date.parse((<HTMLInputElement>frm_elements["fsalida"]).value) - Date.parse((<HTMLInputElement>frm_elements["fentrada"]).value);
       difere = Math.floor(rfecha / 86400000); 
       if (difere< 1) {
           estatus.verifica=false;
       }
       vfechae = (<HTMLInputElement>frm_elements["fentrada"]).value;
       ifechas = vfechae;


      
       var di:any;
       var icuarto:any;
       iicuarto = 0;
       for (di=0; di < difere; di++) {
         for (icuarto =0; icuarto < 20;  icuarto++) {
            // if (iicuarto < 20) {
                iicuarto = icuarto; 
           //  else {
            //     iicuarto = 0;
          //   }
           if (icuarto < 10 ) {
               scuarto = "0" + String(icuarto+1);
           } else {
               scuarto = String(icuarto+1);
           }

           for (var j=1; j<=ireservacion ; j++) {
               vfecha = new Date( Date.parse(ifechas) +(86400000*(di+1)));
                     
                sd = dateToString(vfecha);
                if (sd == afechas[iicuarto][j] ) {    //ireservacion
                    if (  document.getElementById(scuarto).innerHTML == scuarto+" Reservado"  && areservacion[di][4] !='CANCELADO') {
                       estatus.verifica = false;
                    }
                } // me da la fecha de la reservacion
           }
      //      acuartos[ireservacion][icuarto] = document.getElementById(scuarto).innerHTML
         }
       }

    


       if (estatus.verifica != true) {
           alert('Hay empalme de dias!');
       }else {
           alert('Verificado!');
       }
    }
    
    }
    }
}

function consulta() {
    event.preventDefault();
    var treservacion:any;
    var vcuarto,si:any;
    var temp:number;
    treservacion = Number((<HTMLInputElement>frm_elements["reservacion"]).value);
    //alert("reservacion a buscar " + treservacion);
    temp = treservacion;
    if (temp > ireservacion) {
        alert("La reservacion "+ treservacion + "no existe!" + ireservacion);
        nueva();
    } else {
    
    // pone la informacion en la pantalla

    //document.getElementById("cliente").innerHTML = areservacion[treservacion][2];
    (<HTMLInputElement>frm_elements["cliente"]).value = areservacion[treservacion][1];
    (<HTMLInputElement>frm_elements["fentrada"]).value = areservacion[treservacion][2];
    (<HTMLInputElement>frm_elements["fsalida"]).value = areservacion[treservacion][3];

    if (areservacion[treservacion][4]== "ACTIVO") {
        document.getElementById("Estatus").innerHTML = "";
    } else {
        document.getElementById("Estatus").innerHTML = "C A N C E L A D O";
    }
    //alert("fecha de entrada: " + areservacion[treservacion][3]);
    //document.getElementById("fentrada").innerHTML = areservacion[treservacion][3];
    //alert("fecha de salida: " + areservacion[treservacion][4]);
   //document.getElementById("fsalida").innerHTML = areservacion[treservacion][4];
    estatus.verifica = false;
    estatus.reservada = true;    
    estatus.nueva = false;
   // alert('si');
    for (var i=1; i<21; i++) {
        if (i  < 10 ) {
            vcuarto = "0" + String(i);
          } else {
            vcuarto = String(i);
          }

        document.getElementById(vcuarto).innerHTML = acuartos[treservacion][i];
        if (acuartos[treservacion][i].indexOf("Reservado") != -1 ) {
            document.getElementById(vcuarto).style.color = 'red';            
        } else {
            document.getElementById(vcuarto).style.color = 'black';            
        }

    }
    
    reservacion.calculaprecio();
    }
    
}

function cancela() {
    event.preventDefault();
    var bconfirmar= confirm("Seguro de cancelar la reservación?");
    if (estatus.nueva) { 
        alert('No puede cancelar una boleta inexistente!');
    }else {
        if (bconfirmar) {
            areservacion[Number(  (<HTMLInputElement>frm_elements["reservacion"]).value  ) ][4] = "CANCELADO"
            document.getElementById("Estatus").innerHTML = "C A N C E L A D O";
            estatus.cancelado = true;
        // BORRAR FECHAS
        }
    }
}




function salir() {
    inicializapantalla();
    alert("Gracias por utilizar este Programa. Espero haya sido de su agrado.");
    close();
}

function mayor() {
    var fecha1,fecha2:any;
    var rfecha,difere:any;
    fecha1 = (<HTMLInputElement>frm_elements["fentrada"]).value;   
    fecha2 = (<HTMLInputElement>frm_elements["fsalida"]).value;   
   
    if (fecha2 < fecha1) {
        alert("La fecha salida debe ser mayor que la fecha de entrada.");
    } else {
           rfecha = Date.parse((<HTMLInputElement>frm_elements["fsalida"]).value) - Date.parse((<HTMLInputElement>frm_elements["fentrada"]).value);
           difere = Math.floor(rfecha / 86400000); 
           document.getElementById("estancia").innerHTML = String(difere); 
    }


    
    return ;
}

function aparta(reservcto:string) {
    var vcuarto:any;
 //   alert(reservcto);
    vcuarto = document.getElementById(reservcto).innerHTML ;
    if (vcuarto == reservcto+" Disponible") { 
        document.getElementById(reservcto).innerHTML = reservcto+" Reservado";
        document.getElementById(reservcto).style.color= 'red';
        //document.getElementsByTagName(reservcto)[0].setAttribute("class", "democlass");
    }else {
        document.getElementById(reservcto).innerHTML = reservcto+" Disponible";
        document.getElementById(reservcto).style.color= 'black';
       
    }
    var cualquierCadena="01-02-03-04-05-06-07-08-09-10"
    if (cualquierCadena.indexOf(reservcto) != -1) {
        cuarto1.tipo();
    } else {
       cuarto2.tipo();
    }
    reservacion.calculaprecio();
     
}

function dateToString (date: Date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let dateString = `${year}-${month}-${day}`;
    if (month < 10 && day < 10) {
        dateString = `${year}-0${month}-0${day}`;
    }else { 
            if (month < 10) {
                dateString = `${year}-0${month}-${day}`;
            }else {
                if (day < 10) {
                    dateString = `${year}-${month}-0${day}`;
                }else {
                    dateString = `${year}-${month}-${day}`;
                }
            }
         
    }
    
     
    return dateString;      
}