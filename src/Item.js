import React from 'react'
import './Item.css'
function Item({itemObj, onToggleItem, onDeleteItem}) {
  return (
    <li className = "item">
      
        <input type = "checkbox" value = {itemObj.packed} onChange = {()=>onToggleItem(itemObj.id)}  /> 

        <span style = {itemObj.packed ? {textDecoration:"line-through"} : {}}>{itemObj.quantity} {itemObj.itemName}</span>

        <button onClick = {() => onDeleteItem(itemObj.id)}>❌</button>

    </li>
  )
}


export default Item;