const CantidadEntrada = document.getElementById('CantidadEntrada')

const BotonCalcular = document.getElementById('BotonCalcular')

const Categoria = document.getElementById('inputState')

const TotalCompra =document.getElementById('TotalCompra')


function resumen(){
    console.log(categoria.value)
    console.log(CantidadEntrada.value)
    CantidadEntrada.value
    if(categoria.value ="trainee") {
        alert("esto es un trainee")
    }
    TotalCompra.innerHTML= CantidadEntrada.value
}

