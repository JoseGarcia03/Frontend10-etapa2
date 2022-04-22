import React from 'react';
import '../styles/Form.css'

const Form = () => {
  return (
    <main>
        <form id='form' className='form'>
            <h2>Registro de Estudiantes</h2>
            <hr />
            {/* Nombre */}
            <label>Nombre Completo <input type="text" id='inputNombre' name='nombre' /></label>
            <br />
            {/* Documento */}
            <label>Tipo de documento 
                <select name="tipo" id="selectTipo">
                    <option value="null" name='seleccionar'>Seleccionar</option>
                    <option value="C.C" name='C.C'>C.C</option>
                    <option value="T.I" name='T.I'>T.I</option>
                    <option value="C.E" name='C.E'>C.E</option>
                </select>
            </label>
            <br />
            <label>Número de documento <input type="number" name='numero' id='inputNumero' min={0} /></label>
            <br />
            {/* Teléfono */}
            <label>Teléfono <input type="tel" name='telefono' id='inputTelefono' /></label>
            <br />
            {/* Celular */}
            <label>Celular <input type="tel" name='celular' id='inputCelular' /></label>
            <br />
            {/* Dirección */}
            <label>Dirección <input type="text" name='direccion' id='inputDireccion' /></label>
            <br />
            {/* Imagen */}
            <label>Imagen <input type="file" name='imagen' id='btnImagen' /></label>

            <button id='btnRegistro'>Enviar</button>
        </form>
    </main>
  )
}

export default Form