import React, { useState } from 'react'
import BotonSubmit from './BotonSubmit'
import Imagen from './Imagen'

function ContenedorImagen() {
  const [estilosInput, setEstilosInput] = useState({
    height: "80%",
    display: "flex",
  });
  return (
    <div className="contendor-imagen-app contendor-imagen-app-efecto-entrante" style={{height:`${estilosInput.height}`}}>
      <Imagen/>
      <BotonSubmit estilos={setEstilosInput}/>
    </div>
  )
}

export default ContenedorImagen