import React from 'react'
import '../styles/List.css'

const List = () => {
  return (
    <main>
        <table className='tabla'>
            <thead>
                    <tr>
                    <th>Nombre Completo</th>
                    <th>Tipo Documento</th>
                    <th>Número Documento</th>
                    <th>Teléfono</th>
                    <th>Celular</th>
                    <th>Dirección</th>
                    <th>Imagen</th>
                    <th>Acción</th>
                    </tr>
            </thead>
            <tbody></tbody>
        </table>
    </main>
  )
}

export default List