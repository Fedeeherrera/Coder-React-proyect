import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer'

const itemDetail = (props) => { 
  return (
    <div>
            <ItemDetailContainer nombre = {props.nombre} id = {props.id}/>
    </div>
  )
}

export default itemDetail;