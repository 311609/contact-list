const guardarContacto = (db, contacto) =>{
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'

}

const cargarContactos = (db, parentNode) =>{
    let claves = Object.keys(db)

    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db)
        
    }

}
const crearContacto = (parentNode, contacto, db) =>{

    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let gustosContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.Nombre
    numeroContacto.innerHTML = contacto.Numero
    gustosContacto.innerHTML = contacto.Gustos
    iconoBorrar.innerHTML = 'delete'

    divContacto.classList.add('contacto')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () =>{
        db.removeItem(contacto.id)
        window.location.href = '/'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(gustosContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)

}