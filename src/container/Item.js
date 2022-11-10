import React from 'react'

const Item = (props) => { 
  return (
    <div>
        <h3>{props.nombre}</h3>
        <h4> ID: {props.id}</h4>
        <img src={props.imagen} alt="" />
        <h4> Stock: {props.stock}</h4>
        <h4> Categoria: {props.category}</h4>

    </div>
  )
}

export default Item