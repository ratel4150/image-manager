import React, { useState } from 'react'

function Imagen() {
    const [fileStyle, setFileStyle] = useState({
        height: "80%",
        display: "flex",
      });
  return (
    <div className="imagen-app">
        <img alt="imagen"/>
    </div>
  )
}

export default Imagen