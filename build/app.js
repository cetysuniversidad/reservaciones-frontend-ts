var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var reservacion;
(function (reservacion) {
    // event.preventDefault();
    var procesos = /** @class */ (function () {
        function procesos(nueva, reservada, cancelado, verifica) {
            if (nueva == undefined && reservada == undefined && cancelado == undefined && verifica == undefined) {
                this.nueva = true;
                this.reservada = false;
                this.cancelado = false;
                this.verifica = false;
            }
            else {
                this.nueva = this.nueva;
                this.reservada = this.reservada;
                this.cancelado = this.cancelado;
                this.verifica = this.verifica;
            }
        }
        return procesos;
    }());
    reservacion.procesos = procesos;
    function calculaprecio() {
        var vcuarto1, scuarto;
        var precio;
        var precioUSD;
        var tipoDeCambio;
        var r1fecha, difere;
        precio = 0;
        for (var icuarto = 0; icuarto < 20; icuarto++) {
            if (icuarto + 1 < 10) {
                scuarto = "0" + String(icuarto + 1);
            }
            else {
                scuarto = String(icuarto + 1);
            }
            vcuarto1 = document.getElementById(scuarto).innerHTML;
            if (vcuarto1 == scuarto + " Reservado") {
                if (icuarto + 1 < 11) {
                    precio = precio + 1000;
                }
                else {
                    precio = precio + 1500;
                }
            }
        }
        r1fecha = Date.parse(frm_elements["fsalida"].value) - Date.parse(frm_elements["fentrada"].value);
        difere = Math.floor(r1fecha / 86400000);
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        });
        fetch('http://localhost:9229/v1/getTipoDeCambio')
            .then(function (response) {
            return response.json();
        }).then(function (j) {
            precio = precio * difere;
            precioUSD = precio / j.tipoDeCambio;
            document.getElementById("precio").innerHTML = formatter.format(precio);
            document.getElementById("precioUSD").innerHTML = formatter.format(precioUSD);
            document.getElementById("estancia").innerHTML = String(difere);
        });
    }
    reservacion.calculaprecio = calculaprecio;
    var Cuarto = /** @class */ (function () {
        function Cuarto(theName) {
            this.name = theName;
        }
        Cuarto.prototype.tipo = function (Preciobase) {
            if (Preciobase === void 0) { Preciobase = 0; }
            document.getElementById("cuarto").innerHTML = (this.name + "  " + Preciobase);
        };
        return Cuarto;
    }());
    reservacion.Cuarto = Cuarto;
    var Normal = /** @class */ (function (_super) {
        __extends(Normal, _super);
        function Normal(name) {
            return _super.call(this, name) || this;
        }
        Normal.prototype.tipo = function (Preciobase) {
            if (Preciobase === void 0) { Preciobase = 1000; }
            document.getElementById("descrip1").innerHTML = ("Habitación Planta Alta cuenta con 1 cama matrimonial, television de 32 pulgadas,");
            document.getElementById("descrip2").innerHTML = ("baño sencillo, barrita, y Wifi. Incluye desayuno continental.");
            _super.prototype.tipo.call(this, Preciobase);
        };
        return Normal;
    }(Cuarto));
    reservacion.Normal = Normal;
    var Lujo = /** @class */ (function (_super) {
        __extends(Lujo, _super);
        function Lujo(name) {
            return _super.call(this, name) || this;
        }
        Lujo.prototype.tipo = function (Preciobase) {
            if (Preciobase === void 0) { Preciobase = 1500; }
            document.getElementById("descrip1").innerHTML = ("Habitación de Lujo cuenta con 2 camas King size, television de 53 pulgadas,");
            document.getElementById("descrip2").innerHTML = ("jacuzzi, mini bar y acceso a la playa. Incluye desayuno buffete.");
            _super.prototype.tipo.call(this, Preciobase);
        };
        return Lujo;
    }(Cuarto));
    reservacion.Lujo = Lujo;
})(reservacion || (reservacion = {}));
/// <reference path="Proyecto.ts"/>
var areservacion = [[1, "", , , "ACTIVO", 0], [1, "", , , "ACTIVO", 0], [1, "", , , "ACTIVO", 0], [1, "", , , "ACTIVO", 0], [1, "", , , "ACTIVO", 0], [1, "", , , "ACTIVO", 0], [1, "", , , "ACTIVO", 0], [1, "", , , "ACTIVO", 0], [1, "", , , "ACTIVO", 0], [1, "", , , "ACTIVO", 0]];
var afechas = [[1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,]];
var acuartos = [[1, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], [1, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], [1, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], [1, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], [1, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], [1, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]];
var ireservacion;
var frmreservacion, frmcliente, frmfsalida, frmfentrada, frmboton01;
var frmestancia;
var iicuarto;
//var estatus.reservada,estatus.verifica,estatus.cancelado:boolean;
var frm;
var frm_elements;
var estatus = new reservacion.procesos(true, false, false, false);
var cuarto1 = new reservacion.Normal("Costo unitario de habitación en Planta Alta :");
var cuarto2 = new reservacion.Lujo("Costo unitario de habitación de Lujo :");
function Functioninicial() {
    frm = document.getElementById("frm");
    frm_elements = frm.elements;
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
    var dia1;
    //  document.getElementById("reservacion").innerHTML = "1";
    //  document.getElementById("cliente").innerHTML = "";
    //  dia1=(<HTMLInputElement>frm_elements["fentrada"]).value;    
    //  alert(dia1);
    //   fmanana.setDate(fmanana.getDate()+1);
    //   pendiente decir si en ese dia hay habitaciones disponibles
}
function nueva() {
    event.preventDefault();
    var vcuarto;
    var temres;
    temres = ireservacion + 1;
    //    alert('Reservacion: ' +temres);
    estatus.nueva = true;
    estatus.reservada = false;
    estatus.verifica = false;
    estatus.cancelado = false;
    inicializapantalla();
    //document.getElementById('cliente').innerHTML = "2";
    frm_elements["cliente"].value = "";
    frm_elements["fentrada"].value = "2018-03-15";
    frm_elements["fsalida"].value = "2018-03-16";
    // poner todo como disponible
    for (var i = 1; i < 21; i++) {
        if (i < 10) {
            vcuarto = "0" + String(i);
        }
        else {
            vcuarto = String(i);
        }
        document.getElementById(vcuarto).innerHTML = vcuarto + " Disponible";
        document.getElementById(vcuarto).style.color = 'black';
    }
    reservacion.calculaprecio();
    document.getElementById("Estatus").innerHTML = "";
    var temp;
    temp = ireservacion + 1;
    frm_elements["reservacion"].value = temp;
    document.getElementById("descrip1").innerHTML = "";
    document.getElementById("descrip2").innerHTML = "";
    document.getElementById("cuarto").innerHTML = "";
}
function reservar() {
    event.preventDefault();
    //estatus.verifica = true;
    var scuarto;
    var stempfecha;
    var rfecha, tempfecha;
    var sd, difere;
    if (estatus.nueva) {
        if (estatus.verifica) {
            var dfechae, dfechas, ifechas;
            var snombre, vcuarto;
            ireservacion = ireservacion + 1;
            dfechae = frm_elements["fentrada"].value;
            dfechas = frm_elements["fsalida"].value;
            snombre = frm_elements["cliente"].value;
            rfecha = Date.parse(frm_elements["fsalida"].value) - Date.parse(frm_elements["fentrada"].value);
            difere = Math.floor(rfecha / 86400000);
            areservacion[ireservacion][0] = ireservacion;
            areservacion[ireservacion][1] = snombre;
            areservacion[ireservacion][2] = String(frm_elements["fentrada"].value);
            areservacion[ireservacion][3] = String(frm_elements["fsalida"].value);
            areservacion[ireservacion][4] = "ACTIVO";
            areservacion[ireservacion][5] = difere; // DIFERENCIA DE FECHAS
            acuartos[ireservacion][0] = ireservacion;
            for (var icuarto = 1; icuarto < 21; icuarto++) {
                if (icuarto < 10) {
                    scuarto = "0" + String(icuarto);
                }
                else {
                    scuarto = String(icuarto);
                }
                acuartos[ireservacion][icuarto] = document.getElementById(scuarto).innerHTML;
            }
            // recorre las fechas especificadas para la reservacion
            ifechas = dfechae;
            for (var i = 1; i <= difere; i++) {
                // guarda los cuartos de una fecha
                i = i;
                for (var icuarto = 0; icuarto < 20; icuarto++) {
                    if (icuarto + 1 < 10) {
                        scuarto = "0" + String(icuarto + 1);
                    }
                    else {
                        scuarto = String(icuarto + 1);
                    }
                    vcuarto = document.getElementById(scuarto).innerHTML;
                    if (vcuarto == scuarto + " Reservado") {
                        //tempfecha = ifechas + (i * 1);
                        //tempfecha = ifechas.setDate(ifechas.getDate() + i);
                        //sd = dateToString(ifechas);
                        tempfecha = new Date(Date.parse(ifechas) + (86400000 * (i)));
                        sd = dateToString(tempfecha);
                        afechas[icuarto][ireservacion] = sd;
                    }
                    else {
                        afechas[icuarto][ireservacion] = "2000-01-01";
                    }
                }
            }
            estatus.nueva = false;
            estatus.reservada = true;
            alert('La reservacion: ' + ireservacion + ' ha sido procesada.');
            nueva();
        }
        else {
            alert('Debe verificar disponibilidad antes de hacer la reservación.');
        }
    }
    else {
        alert('No puede modificar reservaciones.');
    }
}
function verificar() {
    var rfecha, difere, scuarto;
    var ifechas, dfechae, vfecha, vfechae, sd;
    event.preventDefault();
    if (estatus.cancelado) {
        alert('Reservacion cancelada previamente.');
    }
    else {
        if (frm_elements["cliente"].value == "") {
            alert('Debe definir un nombre');
        }
        else {
            if (document.getElementById("precio").innerHTML == "0") {
                alert('Debe reservar por lo menos una habitacion.');
            }
            else {
                estatus.verifica = true;
                rfecha = Date.parse(frm_elements["fsalida"].value) - Date.parse(frm_elements["fentrada"].value);
                difere = Math.floor(rfecha / 86400000);
                if (difere < 1) {
                    estatus.verifica = false;
                }
                vfechae = frm_elements["fentrada"].value;
                ifechas = vfechae;
                var di;
                var icuarto;
                iicuarto = 0;
                for (di = 0; di < difere; di++) {
                    for (icuarto = 0; icuarto < 20; icuarto++) {
                        // if (iicuarto < 20) {
                        iicuarto = icuarto;
                        //  else {
                        //     iicuarto = 0;
                        //   }
                        if (icuarto < 10) {
                            scuarto = "0" + String(icuarto + 1);
                        }
                        else {
                            scuarto = String(icuarto + 1);
                        }
                        for (var j = 1; j <= ireservacion; j++) {
                            vfecha = new Date(Date.parse(ifechas) + (86400000 * (di + 1)));
                            sd = dateToString(vfecha);
                            if (sd == afechas[iicuarto][j]) { //ireservacion
                                if (document.getElementById(scuarto).innerHTML == scuarto + " Reservado" && areservacion[di][4] != 'CANCELADO') {
                                    estatus.verifica = false;
                                }
                            } // me da la fecha de la reservacion
                        }
                        //      acuartos[ireservacion][icuarto] = document.getElementById(scuarto).innerHTML
                    }
                }
                if (estatus.verifica != true) {
                    alert('Hay empalme de dias!');
                }
                else {
                    alert('Verificado!');
                }
            }
        }
    }
}
function consulta() {
    event.preventDefault();
    var treservacion;
    var vcuarto, si;
    var temp;
    treservacion = Number(frm_elements["reservacion"].value);
    //alert("reservacion a buscar " + treservacion);
    temp = treservacion;
    if (temp > ireservacion) {
        alert("La reservacion " + treservacion + "no existe!" + ireservacion);
        nueva();
    }
    else {
        // pone la informacion en la pantalla
        //document.getElementById("cliente").innerHTML = areservacion[treservacion][2];
        frm_elements["cliente"].value = areservacion[treservacion][1];
        frm_elements["fentrada"].value = areservacion[treservacion][2];
        frm_elements["fsalida"].value = areservacion[treservacion][3];
        if (areservacion[treservacion][4] == "ACTIVO") {
            document.getElementById("Estatus").innerHTML = "";
        }
        else {
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
        for (var i = 1; i < 21; i++) {
            if (i < 10) {
                vcuarto = "0" + String(i);
            }
            else {
                vcuarto = String(i);
            }
            document.getElementById(vcuarto).innerHTML = acuartos[treservacion][i];
            if (acuartos[treservacion][i].indexOf("Reservado") != -1) {
                document.getElementById(vcuarto).style.color = 'red';
            }
            else {
                document.getElementById(vcuarto).style.color = 'black';
            }
        }
        reservacion.calculaprecio();
    }
}
function cancela() {
    event.preventDefault();
    var bconfirmar = confirm("Seguro de cancelar la reservación?");
    if (estatus.nueva) {
        alert('No puede cancelar una boleta inexistente!');
    }
    else {
        if (bconfirmar) {
            areservacion[Number(frm_elements["reservacion"].value)][4] = "CANCELADO";
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
    var fecha1, fecha2;
    var rfecha, difere;
    fecha1 = frm_elements["fentrada"].value;
    fecha2 = frm_elements["fsalida"].value;
    if (fecha2 < fecha1) {
        alert("La fecha salida debe ser mayor que la fecha de entrada.");
    }
    else {
        rfecha = Date.parse(frm_elements["fsalida"].value) - Date.parse(frm_elements["fentrada"].value);
        difere = Math.floor(rfecha / 86400000);
        document.getElementById("estancia").innerHTML = String(difere);
    }
    return;
}
function aparta(reservcto) {
    var vcuarto;
    //   alert(reservcto);
    vcuarto = document.getElementById(reservcto).innerHTML;
    if (vcuarto == reservcto + " Disponible") {
        document.getElementById(reservcto).innerHTML = reservcto + " Reservado";
        document.getElementById(reservcto).style.color = 'red';
        //document.getElementsByTagName(reservcto)[0].setAttribute("class", "democlass");
    }
    else {
        document.getElementById(reservcto).innerHTML = reservcto + " Disponible";
        document.getElementById(reservcto).style.color = 'black';
    }
    var cualquierCadena = "01-02-03-04-05-06-07-08-09-10";
    if (cualquierCadena.indexOf(reservcto) != -1) {
        cuarto1.tipo();
    }
    else {
        cuarto2.tipo();
    }
    reservacion.calculaprecio();
}
function dateToString(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var dateString = year + "-" + month + "-" + day;
    if (month < 10 && day < 10) {
        dateString = year + "-0" + month + "-0" + day;
    }
    else {
        if (month < 10) {
            dateString = year + "-0" + month + "-" + day;
        }
        else {
            if (day < 10) {
                dateString = year + "-" + month + "-0" + day;
            }
            else {
                dateString = year + "-" + month + "-" + day;
            }
        }
    }
    return dateString;
}
//# sourceMappingURL=app.js.map