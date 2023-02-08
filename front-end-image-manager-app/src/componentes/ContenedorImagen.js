import React, { useState } from 'react'
import BotonSubmit from './BotonSubmit'
import Imagen from './Imagen'

function ContenedorImagen() {
  const[cargarImagen,setCargarImagen]=useState([])
  
  const [estilosInput, setEstilosInput] = useState({
    height: "80%",
    display: "flex",
  });

  const[estiloContenedor,setEstilsoContenedor]=useState({
    display:"none",
    width:"100%",
   
    
  })
  return (
    <div className="contendor-imagen-app contendor-imagen-app-efecto-entrante" style={{height:`${estilosInput.height}`}}>
      <Imagen cargarImg={cargarImagen} estilosCont={estiloContenedor}/>
      <BotonSubmit estilosSet={setEstilosInput} estilos={estilosInput} setcargarImagen={setCargarImagen} />
    </div>
  )
}

export default ContenedorImagen