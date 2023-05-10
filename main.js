const Nombre = document.querySelector('.Nombre')
const Apellido = document.querySelector('Apellido')
const Numero = document.querySelector('.Numero')
const Ciudad = document.querySelector('.Ciudad')
const Direccion = document.querySelector('Direccion')
const btnAgregarContacto = document.querySelector('.btn-agregar-contacto')

const listadoContactos = document.querySelector('.listado-contactos')

const db = window.localStorage

btnAgregarContacto.onclick = () => {
  let contacto = {
    id: Math.random(1, 100),
    Nombre: Nombre.value,
    Apellido: Apellido.value,
    Numero: Numero.value,
    Ciudad: Ciudad.value,
    Direccion: Direccion.value,
  }
  guardarContacto(db, contacto)
}

cargarContactos(db, listadoContactos)
