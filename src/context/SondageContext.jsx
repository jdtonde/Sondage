import {v4 as uuidv4} from 'uuid'
import React from 'react'
import{createContext,useState} from 'react'


const SondageContext =createContext()

export const SondageProvider =({children}) => {
    const [sondage,setSondage]= useState([
        {
        id:1,
        text:'This text is from context',
        rating:10
}
])

const deleteSondage=(id)=>{
    if(window.confirm('Etes vous sur de vousloir supprimer ?')){
      setSondage(x=>{
        return sondage.filter(xx=>{return xx.id !== id})
      })
    }
  }

//add sondage
  const addSondage=(newFeedBack)=>{
    newFeedBack.id = uuidv4()
    setSondage([newFeedBack, ...sondage])
    console.log(newFeedBack)
}

const[sondageedit,setSondageedit]=useState(
    {item:{},
    edit:false}
)

//set item to be updated
const EditSondage=(item)=>{
        setSondageedit({
            item,
            edit:true
        })
        
}

return <SondageContext.Provider value={{sondage,deleteSondage,addSondage,sondageedit}}>
    {children}
</SondageContext.Provider>
}


export default SondageContext