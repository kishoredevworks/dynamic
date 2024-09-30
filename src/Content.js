import React from "react"

import Listitems from "./Listitems";



const Content = ({items,handlecheck,handledelete})=> {
  
    
  return (
    
    <>
      {items.length ? (
      <Listitems 
      items ={items}
      handlecheck = {handlecheck}
      handledelete = {handledelete}
       />
      ) : (
        <p className="an">Your List Is Empty</p>
      )
        
    }
    </>
  )
}

export default Content













/* const [first, setfirst] = useState("grow")
  function kom(){
    
    const nam = ["Earn","Learn","Make","Invest"]
    const rnum = Math.floor(Math.random()*4)
    setfirst(nam[rnum]) 

}
const [count, setCount] = useState(99)
function increment(){
setCount((precount)=> { 
return precount + 1
  
}) 



}
function decrement(){
setCount((precount)=> { 
return precount - 1
  
}) 
}

  <h1>Lets {first} Money</h1>
        <button onClick={kom} className="hm">Hit Me</button><br />
        <button onClick={increment} className="add" >+</button><br />
          {count} <br/><button onClick={decrement} className="del" >-</button>

           const numbers=[-2,-1,0,1,2]
   const itemss = numbers.filter((n)=>n>=0).map(n=>({numbers:n})) 
   console.log(itemss);
*/