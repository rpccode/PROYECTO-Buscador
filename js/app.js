//Variables
const Resultados = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max =new Date().getFullYear();
const min = max - 10;



//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();//Muesta loas autos al cargar

    //llena los anos 
    llenarSelec();
});



//Funciones
function mostrarAutos() {
  
        autos.forEach( auto => {
              const {marca,modelo,year,precio,puertas,color,transmision}= auto;
            const autoHTML = document.createElement('p');
            autoHTML.textContent = `
            ${marca} - ${modelo} - Year: ${year} - ${puertas} Puertas -  Trasmision: ${transmision} - Precio: ${precio} - Color: ${color} 
           
            
            `;
            resultado.appendChild(autoHTML);
        })
}

function llenarSelec(){
        for (let i = max; i >= min ; i--) {
            const opcion = document.createElement('option');
            opcion.value = i;
            opcion.textContent = i;
            year.appendChild(opcion);//agrega llas oopciones de year al select
            
        }
}
