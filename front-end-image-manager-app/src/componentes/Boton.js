import React from 'react'

function Boton(props) {
  const{numeroComponentes,setNumeroComponentes}=props
  let count=0
  console.log(count);
  const manejadorClickCrearComponente = (event) => {
   
    event.preventDefault()
    count=count+1
     numeroComponentes.push(count)
    setNumeroComponentes([...numeroComponentes])
   };

   const manejadorClickEliminarComponente = (event) => {
   
    event.preventDefault()
    count--
    numeroComponentes.shift(count)
    setNumeroComponentes([...numeroComponentes])
    
   /*   console.log(event);
     event.target.ownerDocument.all[20].childNodes.push("<div>hola</div>") */
     /* props.countComponents([) */
   };
  return (
    <div>
      <button className="boton-app" onClick={manejadorClickCrearComponente} >+</button>
      <button className="boton-app" onClick={manejadorClickEliminarComponente} >-</button>

    </div>
    
  )
}

export default Boton