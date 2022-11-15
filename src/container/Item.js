import React from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'

const Item = (props, id) => { 
  return (
    <div>
        <h3>{props.nombre}</h3>
        <h4> ID: {props.id}</h4>
        <img src={props.imagen} alt="" />
        <h4> Stock: {props.stock}</h4>
        <h4> Categoria: {props.category}</h4>
        <Link to= {`item/${props.id}`}><Button msg = 'Ver Mas'></Button></Link>


    </div>
  )
}

export default Item