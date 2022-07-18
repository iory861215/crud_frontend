
/************************* CRUD EN INDER QUE CARGA LOS DATOS Y HTML */
// Objeto de pruebas de como llegarian los datos desde el back

// Generador de direcciones falsas https://www.prepostseo.com/tool/es/fake-address-generator
const datos = {
  1: {
    razonsocial: "Ejemplo",
    nombre: "Luis Casa Martinez",
    documento: 26282355,
    telefono: 1162234450,
    email: "dominguez.mara@example.org",
    direccion: "Carretera Natalia, 78, Piso 3",
  },
  2: {
    razonsocial: "Ejemplo",
    nombre: "Roberto Morneo Galeano",
    documento: 26282355,
    telefono: 1144605540,
    email: "diana90@example.net",
    direccion: "Carretera Raul, Nro 47",
  },
  3: {
    razonsocial: "Ejemplo",
    nombre: "Kilber Luna Martinez",
    documento: 26282355,
    telefono: 1167233450,
    email: "alma24@example.org",
    direccion: "Cl. Vega Saldaña, 592, Piso 8",
  },
  4: {
    razonsocial: "Ejemplo",
    nombre: "Rosa Maria Casas",
    documento: 26282355,
    telefono: 1167233450,
    email: "qroig@example.com",
    direccion: "Vereda Mireles, Hab. 8",
  },
};

console.log("carga de llegada");
console.log(datos);




function editDatos (datos){
  document.getElementById("RazonSocial").value = datos.razonsocial;
  document.getElementById("Nombre").value = datos.nombre;
  document.getElementById("Documento").value = datos.documento;
  document.getElementById("Telefono").value = datos.telefono;
  document.getElementById("Email").value = datos.email;
  document.getElementById("Direccion").value = datos.direccion;

}

// Obtengo el id de la url poco practico pero funciona... *__* No lo hagas bob
var id_seleccionado = localStorage.getItem('id_seleccionado')

for (const key in datos) {
    editDatos(datos[id_seleccionado]);
  }


/************************* CRUD EN INDER QUE CARGA LOS DATOS Y HTML */


function back(){
  console.log('volver')
  window.location.replace('./')
}