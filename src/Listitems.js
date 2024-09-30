import React from "react"

import Toatl from "./Toatl";
const Listitems = ({items,handlecheck,handledelete}) => {
  return (
    <ul>
        {items.map((item)=>(
         <Toatl 
         key={item.id}
         item ={item}
         handlecheck = {handlecheck}
        handledelete = {handledelete}
         />
        ))}
      </ul>
  )
}

export default Listitems