import React, { useState } from "react";
import BotonSubmit from "./BotonSubmit";
import Imagen from "./Imagen";

function ContenedorImagen(props) {
  const { numeroComponentes, setNumeroComponentes } = props;
  const [cargarImagen, setCargarImagen] = useState([]);

  const [estilosInput, setEstilosInput] = useState({
    height: "80%",
    display: "flex",
  });

  const [estiloContenedor, setEstilsoContenedor] = useState({
    display: "none",
    width: "100%",
  });
  return (
    <div
      className="contendor-imagen-app contendor-imagen-app-efecto-entrante"
      style={{ height: `${estilosInput.height}` }}
      onMouseEnter={(event) => {
        setEstilsoContenedor({
          display: "flex",
          width: "90%",
        });
      }}
      onMouseLeave={(event) => {
        setEstilsoContenedor({
          display: "none",
          width: "100%",
        });
      }}
    >
      <Imagen
        cargarImg={cargarImagen}
        estilosCont={estiloContenedor}
        setNumeroComponentes={setNumeroComponentes}
        numeroComponentes={numeroComponentes}
      />
      <BotonSubmit
        estilosSet={setEstilosInput}
        estilos={estilosInput}
        setcargarImagen={setCargarImagen}
      />
    </div>
  );
}
export default ContenedorImagen;
