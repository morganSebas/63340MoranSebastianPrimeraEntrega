
let iva =21
let intereses = 78
let importe = parseFloat( prompt("Ingrese el monto a Solicitar: "))
if (importe == 0) {
    while (importe != 0 )
    alert("Debe ingresar un importe mayor a 0")
    let importe = parseFloat( prompt("Ingrese el monto a Solicitar"))
}
console.log("Importe elegido:" + importe)

let cuotas = parseInt(prompt("Ingrse la cantidad de cuotas, puede ser  12, 24, 36, 48"))
 if (cuotas ==0 && cuotas != 12 && cuotas != 24 && cuotas != 36 && cuotas != 48  ) {
    while (cuotas != 0 && cuotas != 12 && cuotas != 24 && cuotas != 36 && cuotas != 48 )
        alert("Debe ingresar cuotas de 12, 24, 36 o 48")
        let cuotas = parseFloat( prompt("Ingrese el monto a Solicitar"))
 }
console.log( "Cuotas seleccionada: " + cuotas)

const   calculoCuota = (cantCuota ) => 
{
     let importeCuota = (importe/cantCuota)
     let importeConInteres = importeCuota  + (importeCuota * (intereses/100))
     let ImporteCuotaConIVa = importeConInteres *  ( 1 + 21/100)
     return ImporteCuotaConIVa
}
for (let cuota = 1; cuota <=cuotas; cuota++){
    console.log( "Cuota: " + cuota + "Importe: " + calculoCuota(cuotas) )
}