

const Request = async (url = '',optionsobj = null,errormsg = null) => {
    try {
        const response = await fetch(url,optionsobj)
        if(!response.ok) throw Error("Please Reload The App..")
    } catch (error) {
        errormsg = error.message
    } finally{
        return errormsg 
    }
    
  
}

export default Request