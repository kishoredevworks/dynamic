import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import { useState , useEffect  } from "react"
 
import './App.css';
import Additem from './Additem';
import Searchbar from './Searchbar';
import Request from './request'



function App() {
    const APP_URL = "http://localhost:3500/items"
    const [items,setitems]= useState([])
    const [newItem, setNewItem] = useState("")
    const [search, newSearch] = useState("")
    const [fetcherror,setFetchError] = useState(null)
    const [isloading, setIsloading] = useState(true)

    
    const additem = async (item)=>{
    const id = items.length? items[items.length -1].id +1 : 1
    const addnewitem = {id,checked:false,item}
    const listitems = [...items , addnewitem]
    setitems(listitems)

    const postoptions = {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(addnewitem)
      }
      const result = await Request(APP_URL,postoptions)
      if(result) setFetchError(result) 
    
   }
   

   const handlecheck = async (id)=>{
    const listitems = items.map((item)=>item.id===id ? {...item,checked:!item.checked}:item)
    setitems(listitems)
    const myitem = listitems.filter((item)=>item.id === id)
    const updateOptions = {
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({checked:myitem[0].checked})
      }
      const reqUrl= `${APP_URL}/${id}`
      const result = await Request(reqUrl,updateOptions)
      if(result) setFetchError(result) 
   }

    const handledelete = async (id) => {
    const listitems = items.filter((item)=>item.id!==id)
    setitems(listitems)
    const deleteOptions = {
      method: 'DELETE'
    }
    const reqUrl= `${APP_URL}/${id}`
    const result = await Request(reqUrl,deleteOptions)
    if(result) setFetchError(result) 
    

   }
   const handleadditem = (e)=>{
    e.preventDefault()
    if (newItem === "")
      return ;
    console.log(newItem);
    additem(newItem)
    setNewItem("")
      
      
   }
     useEffect(()=>{
      const fetchitems = async()=>{
         try {
              const response = await fetch(APP_URL) 
              if(!response.ok)throw new Error("Data Not Recieved..");
              const listitems = await response.json()
              console.log(listitems);
              setitems(listitems)
              setFetchError(null)

         } catch (error) {
           setFetchError(error.message)
            
         }
         finally{
          setIsloading(false)
         }
      }
      
      setTimeout(() => {
        (async()=> fetchitems()) () 
      }, 2000);

       
    }, [])  

  return (
    <div className='app'>
      <Header title = "Course Lists"
        
       />
       <Additem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleadditem = {handleadditem}
       />
       <Searchbar
         search = {search}
         newSearch = {newSearch}
         
       />
      <main>
        {isloading && (<p> Data Is Loading.. </p>)}
        {fetcherror && (<p>{`ERROR : ${fetcherror}`}</p>)}
        {!isloading && !fetcherror && <Content
        items = {items.filter(item=> (item.item.toLowerCase()).includes(search.toLowerCase()))}
        handlecheck = {handlecheck}
        handledelete = {handledelete}
        />}
        </main>

      <Footer
        lengths = {items.length}
      />

      
    </div>
    

    
    
  );
}

export default App;
