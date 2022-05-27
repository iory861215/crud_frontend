

// ARRAY CON LOS DATOS MIENTRAS LLEGA EL BACK

const datos = { 
    1 : {
        razonsocial: 'Ejemplo',
        nombre: 'Juan Ramiro mosqueda',
        documento: '26282355',
        telefono: '1162234450',

    },
    2 : {
        razonsocial: 'Ejemplo',
        nombre: 'Juan Ramiro mosqueda',
        documento: '26282355',
        telefono: '1162234450',
    },
    3 : {
        razonsocial: 'Ejemplo',
        nombre: 'Juan Ramiro mosqueda',
        documento: '26282355',
        telefono: '1162234450',
    },
}

// console.log(datos.length)

var items = document.querySelector('.item');


for (const key in datos) {
    console.log('hola')
    document.getElementById("myList1").appendChild(clone);
    console.log(`${key}: ${datos[key]}`);
}
