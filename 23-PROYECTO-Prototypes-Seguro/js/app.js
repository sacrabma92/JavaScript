// Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tip = tipo;
}
//Realiza la cotización con los datos
Seguro.prototype.cotizarSeguro = function(){
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */
   let cantidad;
   const base = 2000;

        switch(this.marca){
            case '1':
                cantidad = base * 1.15;
                break;
            case '2':
                cantidad = base *1.05;
                break;  
            case '3':
                cantidad = base * 1.35;
                break;
            default:
                break;
        }

        //Leer el año
        const diferencia = new Date().getFullYear() - this.year;0

        // Cada año que la diferencia es amyor, el costo va a reducirse un 3%
        cantidad -= ((diferencia * 3) * cantidad) / 100;

        /* 
            Si el seguro es basico se multiplica por un 30% más    
            Si el seguro es completo se multiplica por un 50% más    
        * */
       if(this.tipo === 'basico'){
           cantidad *= 1.30;
       }else{
           cantidad *= 1.50;
       }

       return cantidad;
}

function UI(){}

//Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// Muestra alertas en pantalla
UI.prototype.mostraMensaje = (mensaje, tipo) => {

    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() =>{
        div.remove();
    },3000)
}

//instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();//LLena el select con los años
})


addEventListener();
function addEventListener(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    //Leer el año selecionado
    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name=tipo]:checked').value;
    
    if(marca === '' || year === '' || tipo === ''){
        ui.mostraMensaje('Todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostraMensaje('Cotizando....', 'exito');

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    //Utilizar el prototype que va a cotizar.
}

