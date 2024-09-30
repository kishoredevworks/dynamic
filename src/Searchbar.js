import React from "react"

const Searchbar = ({search,newSearch}) => {
  return (
    <form className="searchForm" onSubmit={(e)=>e.preventDefault()} >
        <label htmlFor="seacrhbar">Seacrh</label>
        <input type="text" 
         role="searchbox"
         id="search"
         placeholder="Search Items"
         value={search}
         onChange={(e)=> newSearch(e.target.value)}
        />
    </form>
  )
}

export default Searchbar