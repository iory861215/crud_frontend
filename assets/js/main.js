
/************************* CRUD EN INDER QUE CARGA LOS DATOS Y HTML */
// Objeto de pruebas de como llegarian los datos desde el back
const datos = {
  1: {
    razonsocial: "Ejemplo",
    nombre: "Luis Casa Martinez",
    documento: 26282355,
    telefono: 1162234450,
  },
  2: {
    razonsocial: "Ejemplo",
    nombre: "Roberto Morneo Galeano",
    documento: 26282355,
    telefono: 1144605540,
  },
  3: {
    razonsocial: "Ejemplo",
    nombre: "Kilber Luna Martinez",
    documento: 26282355,
    telefono: 1167233450,
  },
  4: {
    razonsocial: "Ejemplo",
    nombre: "Rosa Maria Casas",
    documento: 26282355,
    telefono: 1167233450,
  },
};

console.log("carga de llegada");

// Cuando alguien entra le quito 
localStorage.removeItem('id_seleccionado')
// console.log(datos);

function crearHTML(datos, key) {
  console.log(datos);
  // 1. Creo el elemento div
  let divElement = document.createElement("div");
  // 2. Agrego una clase principal para el div que cree
  divElement.classList.add("card");
  divElement.setAttribute("id", key+"-card");
  // 2. Agrego el contenido interno
  divElement.innerHTML =
    `
    <div class="person">
        <span class="social">Razon Social : ` +
    datos.razonsocial +
    `</span>
        <span class="name">` +
    datos.nombre +
    `</span>
    </div>
    <div class="description-document">
        <span class="social">Documento</span>
        <span class="name">` +
    datos.documento +
    `</span>
    </div>
    <div class="description-telefono">
        <span class="social">Teléfono </span>
        <span class="name">` +
    datos.telefono +
    `</span>
    </div>
    <div class="actions">
    <a  onClick="ver(this)" id="`+key+`" ><div class="icon-actions"><i class="fa fa-eye"></i></div></a>
    <a  onClick="editar(this)" id="`+key+`" ><div class="icon-actions"><i class="fa fa-pen"></i></div></a>
    <a  onClick="remove('`+key+`-card')" id="`+key+`" ><div class="icon-actions"><i class="fa fa-trash"></i></div></a>
    </div>
    `;
    // href="./actualizar.html" 
  // 4. Agrego los elementos en la web seleccionando la clase del contenedor
  let contenedorCrud = document.querySelector(".container");
  contenedorCrud.appendChild(divElement);
}

//  Repito los datos la cantidad de datos en el objeto datos
for (const key in datos) {
// Llamo a la funcion que crea el HTML y le pasos los datos del array(objeto) donde datos es todo y key es para determinar cada dato por separado en el ciclo
// Paso la key para el edit y el update.. El ver para todo 
crearHTML(datos[key], key);
}



function remove(id)
{
    console.log('remove')
    document.getElementById(id).remove();
}


function editar(obj)
{
    // obj obtengo todo el objeto
    console.log('clic funciono ?')
    // busco el id dentro del objeto
    var id = obj.id;
    console.log(id+' este es el id')
    //le mando el id al localstorage
    localStorage.setItem('id_seleccionado',id)

    window.location.replace('actualizar.html')
    
}
function ver(obj)
{
    // obj obtengo todo el objeto
    console.log('clic funciono ?')
    // busco el id dentro del objeto
    var id = obj.id;
    console.log(id+' este es el id')
    //le mando el id al localstorage
    localStorage.setItem('id_seleccionado',id)

    window.location.replace('ver.html')
    
}

/************************* CRUD EN INDER QUE CARGA LOS DATOS Y HTML */