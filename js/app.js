//Variables
const Marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimor = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const Puertas= document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//contenedor con los resultados
const Resultados = document.querySelector('#resultado');


const max =new Date().getFullYear();
const min = max - 10;

//generar un odjeto de busqueda
const datosBusqueda = {
    marca: '',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',
}

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);//Muesta loas autos al cargar

    //llena los anos 
    llenarSelec();
});

//event 
marca.addEventListener('change', e => {
        datosBusqueda.marca = e.target.value;
        
        filtrarAuto();
});
year.addEventListener('change', e => {
        datosBusqueda.year = parseInt(e.target.value);
        
        filtrarAuto();	
});
minimo.addEventListener('change', e => {
        datosBusqueda.minimo = e.target.value;
        
});
maximo.addEventListener('change', e => {
        datosBusqueda.maximo = e.target.value;
       
});
puertas.addEventListener('change', e => {
        datosBusqueda.puertas = e.target.value;
        
});
transmision.addEventListener('change', e => {
        datosBusqueda.transmision = e.target.value;
    
});
color.addEventListener('change', e => {
        datosBusqueda.color = e.target.value;
});



//Funciones
function mostrarAutos(autos) {
  
    limpiarHTML();//ELIMINA EL HTML PREVIO

        autos.forEach( auto => {
              const {marca,modelo,year,precio,puertas,color,transmision}= auto;
            const autoHTML = document.createElement('p');
            autoHTML.textContent = `
            ${marca} - ${modelo} - Year: ${year} - ${puertas} Puertas -  Trasmision: ${transmision} - Precio: ${precio} - Color: ${color} 
           
            
            `;
            resultado.appendChild(autoHTML);
        })
}

//limpiar html
function limpiarHTML(){
       while(resultado.firstChild){
           resultado.removeChild(resultado.firstChild);
       }
}

function llenarSelec(){
        for (let i = max; i >= min ; i--) {
            const opcion = document.createElement('option');
            opcion.value = i;
            opcion.textContent = i;
            year.appendChild(opcion);//agrega llas oopciones de year al select
            
        }
}

//funcion que filtra en base a la seleccion
function filtrarAuto() {
        const resultado = autos.filter(filtrarMarcar).filter(filtrarYear);

        // console.log(resultado);

        mostrarAutos(resultado);
}

function filtrarMarcar(auto) {
    const {marca} = datosBusqueda;
    if ( marca ) {
        return auto.marca === marca;
    }else {
        return auto;
    }
}

function filtrarYear(auto) {
        const {year} = datosBusqueda;
        
    if ( year ) {
        return auto.year === year;
    }else {
        return auto;
    }

}
