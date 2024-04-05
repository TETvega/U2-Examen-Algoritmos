
const bntConvertir = document.getElementById('convert-btn')


bntConvertir.addEventListener('click' , ()=> {

    leerDatos()

})
// funciones---------------

function leerDatos() {
    
    const cantidad = Number( document.getElementById('amount').value)
    const local = document.getElementById('from').value
    const extranjera = document.getElementById('to').value

    resultado = convertirSegun(cantidad , local , extranjera)
    console.log(resultado);
    mostrarResultado(resultado)
    // console.log( typeof(local));
}

function mostrarResultado(resultado) {
    const elemento = document.getElementById('result-container')
    // console.log(elemento);
    elemento.innerHTML= resultado
}

function convertirSegun( cantidadLocal, monedaLocal , monedaExtranjera) {


    switch (true) {
        case monedaLocal=== 'usd':

           if( validarSiesIgual(monedaLocal ,monedaExtranjera)) {
             return cantidadLocal.toFixed(2)
             
           }

           if (monedaExtranjera==='eur' ) {
                return (cantidadLocal*0.92267797).toFixed(2)
           }else if(monedaExtranjera === 'gbp'){
                return (cantidadLocal* 0.79103485).toFixed(2)
           }
            break;
        
            // ------------------- CASO MONEDA LOCAL EUROS ---------
        case monedaLocal=== 'eur':
            if( validarSiesIgual(monedaLocal ,monedaExtranjera)) {
                return cantidadLocal.toFixed(2)
                
              }

              if (monedaExtranjera==='usd' ) {
                // pasando de usro a dolar 
                return (cantidadLocal*1.0837456).toFixed(2)
           }else if(monedaExtranjera === 'gbp'){
            // pasando de uero a esterlina 
                return (cantidadLocal*0.85733925).toFixed(2)
           }
        break;
    
        case monedaLocal=== 'gbp':
            if( validarSiesIgual(monedaLocal ,monedaExtranjera)) {
                return cantidadLocal
                
              }
            if (monedaExtranjera==='usd' ) {
                // pasando de usro a dolar 
                return (cantidadLocal*1.264038).toFixed(2)
           }else if(monedaExtranjera === 'eur'){
            // pasando de uero a esterlina 
                return (cantidadLocal*1.1663453).toFixed(2)
           }
        break;
        
        default:
            alert('Ocurrio algun error en el proceso')
            break;
    }

}


function validarSiesIgual( local, extranjera) {
    
    return local === extranjera
}