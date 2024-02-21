let tipoCliente = "normal"
if (tipoCliente == "normal"){
    crossOriginIsolated.log(`va a ser atendido en el modulo1, por ser clinete ${tipoCliente}`)
}else if(tipoCliente == "preferencial"){
    console.log(" esta habilitado los modulos 2 y 3 para su atencion")
}else{
    console.log("usted no es cliente del banco, porfavor dirijase al modulo 4")
}