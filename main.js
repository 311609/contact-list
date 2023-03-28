const Nombre = document.querySelector('.Nombre')
const Numero = document.querySelector('.Numero')
const Gustos = document.querySelector('.Gustos')
const btnAgregarContacto = document.querySelector('.btn-agregar-contacto')

const listadoContactos = document.querySelector('.listado-contactos')

const db = window.localStorage

btnAgregarContacto.onclick = () => {
  let contacto = {
    id: Math.random(1, 100),
    Nombre: Nombre.value,
    Numero: Numero.value,
    Gustos: Gustos.value,
  }
  guardarContacto(db, contacto)
}

cargarContactos(db, listadoContactos)
