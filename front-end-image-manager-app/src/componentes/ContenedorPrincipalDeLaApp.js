import React from 'react'
import {FaCameraRetro} from "react-icons/fa"
import FormularioDeCargaDeImagenes from './FormularioDeCargaDeImagenes'

function ContenedorPrincipalDeLaApp() {
  return (
    <div className='contendor-principal-app'>
        <h1 className='titulo-principal-app'>adminPik <FaCameraRetro/></h1>
        <FormularioDeCargaDeImagenes/>
    </div>
  )
}

export default ContenedorPrincipalDeLaApp