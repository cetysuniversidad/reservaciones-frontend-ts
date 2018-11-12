namespace reservacion {
   // event.preventDefault();

    export class procesos{
        nueva:boolean;
        reservada:boolean;
        cancelado:boolean;
        verifica:boolean;

        constructor(nueva:boolean, reservada:boolean, cancelado:boolean, verifica:boolean);
        constructor(nueva?:boolean, reservada?:boolean, cancelado?:boolean, verifica?:boolean){
            if (nueva == undefined && reservada == undefined &&  cancelado == undefined && verifica == undefined) {
                this.nueva = true;
                this.reservada = false;
                this.cancelado = false;
                this.verifica = false;
            } else {
                this.nueva = this.nueva;
                this.reservada = this.reservada;
                this.cancelado = this.cancelado;
                this.verifica = this.verifica; 
            }
        } 
    }


    export function calculaprecio():void {
        var vcuarto1,scuarto:string;
        var precio:number;
        var precioUSD:number;
        var tipoDeCambio:any;
        var r1fecha,difere:any;
        precio = 0;

        for (var icuarto =0; icuarto < 20;  icuarto++) {
            if (icuarto + 1 < 10 ) {
            scuarto = "0" + String(icuarto+1);
            } else {
            scuarto = String(icuarto+1);
            }
        
            vcuarto1 = document.getElementById(scuarto).innerHTML ;
            if (vcuarto1 == scuarto+" Reservado") {
                if (icuarto + 1 < 11) {
                    precio = precio + 1000; 
                } else {
                    precio = precio + 1500;
                }
            }
        }

        r1fecha = Date.parse((<HTMLInputElement>frm_elements["fsalida"]).value) - Date.parse((<HTMLInputElement>frm_elements["fentrada"]).value);
        difere = Math.floor(r1fecha / 86400000);
        
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        });

        fetch('http://localhost:18080/v1/getTipoDeCambio')
        .then(function (response) {
            return response.json();
        }).then(function (j) {
            precio =precio * difere;
            precioUSD = precio / j.tipoDeCambio;
    
            document.getElementById("precio").innerHTML = formatter.format(precio);
            document.getElementById("precioUSD").innerHTML = formatter.format(precioUSD);
            document.getElementById("estancia").innerHTML = String(difere);            
        });      
      
        
    }

    export class Cuarto {
        name: string;
        constructor(theName: string) { this.name = theName; }
        tipo(Preciobase: number = 0) {
            document.getElementById("cuarto").innerHTML=(`${this.name}  ${Preciobase}`);
        }
    }
    
    export class Normal extends Cuarto {
        constructor(name: string) { super(name); }
        tipo(Preciobase = 1000) {
            document.getElementById("descrip1").innerHTML=("Habitación Planta Alta cuenta con 1 cama matrimonial, television de 32 pulgadas,");
            document.getElementById("descrip2").innerHTML=("baño sencillo, barrita, y Wifi. Incluye desayuno continental.");
            super.tipo(Preciobase);
        }
    }
    
    export class Lujo extends Cuarto {
        constructor(name: string) { super(name); }
        tipo(Preciobase = 1500) {
            document.getElementById("descrip1").innerHTML=("Habitación de Lujo cuenta con 2 camas King size, television de 53 pulgadas,");
            document.getElementById("descrip2").innerHTML=("jacuzzi, mini bar y acceso a la playa. Incluye desayuno buffete.");
            super.tipo(Preciobase);
        }
    }
}






