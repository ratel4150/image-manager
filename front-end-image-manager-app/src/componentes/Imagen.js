import React, { useState } from 'react'
import ConenedorBotones from './ConenedorBotones'

function Imagen(props) {
  const{numeroComponentes,setNumeroComponentes}=props

    let prop=props.estilosCont
    console.log(prop);
  return (
    <div className="imagen-app">
        <img src={props.cargarImg["secure_url"]}  style={{width: `${props.estilosCont.width}`}}/>
        <ConenedorBotones estiloContendor={prop} numeroComponentes={numeroComponentes} setNumeroComponentes={setNumeroComponentes}/>
    </div>
  )
}

export default Imagen