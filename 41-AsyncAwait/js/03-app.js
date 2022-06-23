function descargarClientes(){

    return new Promise((resolve, reject) =>{

        const error = false;

        setTimeout(() => {
            if(!error){
                resolve('El listado de clientes se descargo correctamente');
            }else{
                reject('Error en la conección');
            }
        }, 3000);
    })
}

// Async await
const ejecutar = async ( ) =>{
    try {
        console.log(1+ 65);
        const respuesta = await descargarClientes();
        
        console.log(52+890);
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }
}

ejecutar();