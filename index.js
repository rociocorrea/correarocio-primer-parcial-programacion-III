/* Creación de array de objetos que representan a cada auto */
const noblesDeportivos = [
    {
        nombre: "Audi A3",
        imagen: "assets/nobles-y-deportivos/audi-a3.png"
    },
    {
        nombre: "Chevrolet Cruze",
        imagen: "assets/nobles-y-deportivos/chevrolet-cruze.png"
    },
    {
        nombre: "Fiat Kronnos",
        imagen: "assets/nobles-y-deportivos/fiat-kronnos.png"
    },
    {
        nombre: "Nissan Sentra",
        imagen: "assets/nobles-y-deportivos/nissan-sentra.png"
    },
    {
        nombre: "Toyota Corolla",
        imagen: "assets/nobles-y-deportivos/toyota-corolla.png"
    },
    {
        nombre: "Volkswagen Golf",
        imagen: "assets/nobles-y-deportivos/volkswagen-golf.png"
    }
];

const premiumSuperdeportivos = [
    {
        nombre: "Aston Martin DB11",
        imagen: "assets/premiums-y-superdeportivos/aston-martin-db11.png"
    },
    {
        nombre: "Audi R8",
        imagen: "assets/premiums-y-superdeportivos/audi-r8.png"
    },
    {
        nombre: "Chevrolet Corvette",
        imagen: "assets/premiums-y-superdeportivos/chevrolet-corvette.png"
    },
    {
        nombre: "Ford Mustang",
        imagen: "assets/premiums-y-superdeportivos/ford-mustang.png"
    },
    {
        nombre: "Mercedes Benz AMG",
        imagen: "assets/premiums-y-superdeportivos/mercedes-benz-amg.png"
    },
    {
        nombre: "Porsche 911",
        imagen: "assets/premiums-y-superdeportivos/porsche-911.png"
    }
];

/* Función para crear el HTML y mostrar los autos */
function mostrarAutos(autos, contenedorId) {
    /* Comienzo con una variable vacía a la que voy a concatenar luego
    el HTML necesario para visualizar todos los autos */
    let html = "";

    /* Recorro el array de autos pasado por parámetro
    (uno de los dos que cree previamente)  y por cada auto
    creo el bloque de HTML. Utilizo ${auto.imagen} y ${auto.nombre}
    para acceder a valores del objeto*/
    autos.forEach(auto => {
        html += `
            <div class="item">
                <img src="${auto.imagen}" alt="${auto.nombre}"> 
                <span class="caption">${auto.nombre}</span>
            </div>
        `;
    });

    /* Aquí accedo al DOM a través de getElementById,
    que en mi caso será "noblesydeportivos" o "premiumysuperdeportivos"
    y agrego el html con .innerHTML = html */
    document.getElementById(contenedorId).innerHTML = html;
}

/* Llamo a la función creada dos veces, para cada sección */
mostrarAutos(noblesDeportivos, "noblesydeportivos");
mostrarAutos(premiumSuperdeportivos, "premiumysuperdeportivos");