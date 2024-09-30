import React from "react"

const Footer = ({lengths}) => {
const year = new Date().getFullYear();



  return (
    <footer>
        Copyright &copy; {year}     {lengths} List { lengths === 1 ? "Item" : "Items" }
    </footer>
  )
}

export default Footer