import React from "react"
import { BsTrash3Fill } from "react-icons/bs";

const Toatl = ({item,handlecheck,handledelete}) => {
  
  return (
    <li className="item" key={item.id} >
    <input type="checkbox" onChange={() =>handlecheck(item.id)} checked = {item.checked} /> <label onDoubleClick={() =>handlecheck(item.id)} style = {(item.checked)?{textDecoration:'line-through'}: null}> {item.item}</label>  <BsTrash3Fill 
    role = "button"
    onClick={()=>handledelete(item.id)}
    tabIndex="0"
    aria-label = {`delete ${item.item}`} />
  </li>
  )
}

export default Toatl