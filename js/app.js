//Variables
const Resultados = document.querySelector('#resultado');

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
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
