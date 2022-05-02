import axios from 'axios';
import React, { useState } from 'react';
import { fileUpload } from '../helpers/fileUpload';
import { url } from '../helpers/url';
// Estilos
import '../styles/Form.css'

const Form = () => {
  const [estudiantes, setEstudiantes] = useState({
    nombre: '',
    tipo: '',
    numero: '',
    telefono: '',
    celular: '',
    direccion: '',
    imagen: ''
  })

  const handleChange = ({target})=>{
    setEstudiantes({
      ...estudiantes,
      [target.name]: target.value
    })
  }

  const handleFileChange = ({target})=>{
    const file = target.files[0]
    fileUpload(file)
    .then(response => {
      estudiantes.imagen = response
    }).catch(error => console.log(error))
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    axios.post(url, estudiantes)
    .then(response => console.log(response))
    .catch((error)=> console.log(error))
  }

  return (
    <main>
        <form id='form' onSubmit={handleSubmit} className='form'>
            <h2>Registro de Estudiantes</h2>
            <hr />
            {/* Nombre */}
            <label>Nombre Completo <input type="text" id='inputNombre' name='nombre' onChange={handleChange} /></label>
            <br />
            {/* Documento */}
            <label>Tipo de documento 
                <select name="tipo" id="selectTipo" onChange={handleChange}>
                    <option value="null" name='seleccionar'>Seleccionar</option>
                    <option value="C.C" name='C.C'>C.C</option>
                    <option value="T.I" name='T.I'>T.I</option>
                    <option value="C.E" name='C.E'>C.E</option>
                </select>
            </label>
            <br />
            <label>Número de documento <input type="number" onChange={handleChange} name='numero' id='inputNumero' min={0} /></label>
            <br />
            {/* Teléfono */}
            <label>Teléfono <input type="tel" onChange={handleChange} name='telefono' id='inputTelefono' /></label>
            <br />
            {/* Celular */}
            <label>Celular <input type="tel" onChange={handleChange} name='celular' id='inputCelular' /></label>
            <br />
            {/* Dirección */}
            <label>Dirección <input type="text" onChange={handleChange} name='direccion' id='inputDireccion' /></label>
            <br />
            {/* Imagen */}
            <label>Imagen <input type="file" onChange={handleFileChange} name='imagen' id='btnImagen' /></label>

            <button id='btnRegistro'>Enviar</button>
        </form>
    </main>
  )
}

export default Form