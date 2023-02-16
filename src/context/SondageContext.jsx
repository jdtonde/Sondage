import {v4 as uuidv4} from 'uuid'
import React from 'react'
import{createContext,useState,useEffect} from 'react'


const SondageContext =createContext()

export const SondageProvider =({children}) => {
   
  const [sondage,setSondage]= useState([])
  const [isLoading,setIsLoading] =useState(true)

    //function de fetch API JSON-SERVER
    const fetchSondage= async()=>{
      //ou creer un proxy du backend dans package.json et retirer le http://localhost:3004 à chaque fetch
      //const res = await fetch(`http://localhost:3004/sondages?_sort=id&_order=desc`)
      const res = await fetch(`/sondages?_sort=id&_order=desc`)
      const data = await res.json()
      setSondage(data)
      setIsLoading(false)
    }
    useEffect(()=>{
      fetchSondage()
    },[])


const deleteSondage= async(id)=>{
    if(window.confirm('Etes vous sur de vousloir supprimer ?')){
      await fetch(`/sondages/${id}`,{
        method:'DELETE',})

      setSondage(x=>{
        return sondage.filter(xx=>{return xx.id !== id})
      })
    }
  }

//add sondage
  const addSondage= async (newFeedBack)=>{

    const res= await fetch('/sondages',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newFeedBack)
    })
   
    const data= await res.json()

    setSondage([data, ...sondage])

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
const updatesondage = async(id,updItem) =>{
    const res = await fetch(`/sondages/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(updItem)
    })

    const data= await res.json()

  setSondage(
    sondage.map( x => ( x.id === id ? { ...x , ...data }: x))
  )
}

//As a value sondage et sondageedit sont des useStates d'où la coloration
//editSondage quand à lui est une fonction d'activation du Edit de false en True
//sondageedit (useState) est pour mettre le texte à editer dans le form
return <SondageContext.Provider value={{sondage,deleteSondage,addSondage,editSondage,sondageedit,updatesondage,isLoading}}>
    {children}
</SondageContext.Provider>
}


export default SondageContext