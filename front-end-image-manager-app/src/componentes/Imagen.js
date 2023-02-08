import React, { useState } from 'react'

function Imagen(props) {
    
  return (
    <div className="imagen-app">
        <img src={props.cargarImg["secure_url"]} alt="imagen" style={{width: `${props.estilosCont.width}`}}/>
    </div>
  )
}

export default Imagen