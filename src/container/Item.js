import React from 'react'

const Item = (props) => { 
  return (
    <>
        <h3>{props.nombre}</h3>
        <h4>{props.id}</h4>
        <img src={props.imagen} alt="" />
        <h4>{props.stock}</h4>
        <h4>{props.category}</h4>

    </>
  )
}

export default Item