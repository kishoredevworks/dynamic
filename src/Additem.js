import React from "react"
import { FaPlus } from "react-icons/fa"
import { useRef } from "react"

const Additem = ({newItem,setNewItem,handleadditem}) => {

  const inputRef = useRef()

  return (
    <form className = "addForm" onSubmit={handleadditem}>
        <label htmlFor="additem">Add Item</label>
        <input type="text"
          ref={inputRef}
          onSubmit={handleadditem}
          autoFocus
          id="additem"
          placeholder="Add Item"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
           
        />
        <button 
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
        
        >
         <FaPlus
        
         
         />
        </button>
    </form>
  )
}

export default Additem