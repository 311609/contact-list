function guardarContacto(db, contacto) {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.reload(true)

}

const cargarContactos = (db, parentNode) =>{
    let claves = Object.keys(db)

    for(claves of claves){
        let contacto = JSON.parse(db.getItem(claves))
        crearContacto(parentNode, contacto, db)
        
    }

}
const crearContacto = (parentNode, contacto, db) =>{

    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let apellidoContacto = document.createElement('p')
    let numeroContacto = document.createElement('p')
    let ciudadContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerText = contacto.Nombre
    apellidoContacto.innerText = contacto.Apellido
    numeroContacto.innerText = contacto.Numero
    ciudadContacto.innerText = contacto.Ciudad
    direccionContacto.innerText = contacto.Direccion
    iconoBorrar.innerText = 'delete'

    divContacto.classList.add('contacto')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () =>{
        db.removeItem(contacto.id)
        window.location.href = '/'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(ciudadContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)

}