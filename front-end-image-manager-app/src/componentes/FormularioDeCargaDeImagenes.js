import React, { useState } from "react";
import ContenedorImagen from "./ContenedorImagen";

function FormularioDeCargaDeImagenes() {
  const[numeroComponentes,setNumeroComponentes]=useState([1])
  return (
    <div className="formulario-carga-imagenes-app">
      {numeroComponentes.map((componente,indice)=>{
        return <ContenedorImagen key={indice} setNumeroComponentes={setNumeroComponentes} numeroComponentes={numeroComponentes}/>
      })}
    </div>
  );
}

export default FormularioDeCargaDeImagenes;
