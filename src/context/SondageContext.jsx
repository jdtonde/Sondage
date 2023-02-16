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

//set item to be updated by changing edit to true
const editSondage=(item)=>{
        setSondageedit({
            item,
            edit:true
        })
        
}

//mettre à jour les items
const updatesondage = (id,updItem) =>{
  setSondage(
    sondage.map( x => ( x.id === id ? { ...x , ...updItem }: x))
  )
}

//As a value sondage et sondageedit sont des useStates d'où la coloration
//editSondage quand à lui est une fonction d'activation du Edit de false en True
//sondageedit (useState) est pour mettre le texte à editer dans le form
return <SondageContext.Provider value={{sondage,deleteSondage,addSondage,editSondage,sondageedit,updatesondage}}>
    {children}
</SondageContext.Provider>
}


export default SondageContext