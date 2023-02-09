import React from 'react'
import Boton from './Boton'

function ConenedorBotones(props) {
  const{numeroComponentes,setNumeroComponentes}=props
 
   
  return (
    <div className="contenedor-botones-app" style={{display:`${props.estiloContendor.display}`}}>
        <Boton setNumeroComponentes={setNumeroComponentes} numeroComponentes={numeroComponentes} />
       
    </div>
  )
}

export default ConenedorBotones