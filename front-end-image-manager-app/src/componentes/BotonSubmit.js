import React, { useState } from "react";

function BotonSubmit(props) {


  
  
  const manejadorCambio = async ({ target }) => {
    const { files } = target;
    const data = new FormData();
    data.append("file", files[0]);

    data.append("upload_preset", "cloudinary_test");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqghwdxul/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => response.json())
      .then((data) => props.setcargarImagen(data));
    

      props.estilosSet({
      height: "100%",
      display: "none",
      
    });
  };
  return (
    <label className="etiqueta-app" style={{display:`${props.estilos.display}`}}>
      <input type="file"  name="file" onChange={manejadorCambio} />
      Carga tu foto 
    </label>
  );
}

export default BotonSubmit;
