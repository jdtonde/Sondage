import React, { useState } from 'react'
import Card from './shared/card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import SondageContext from '../context/SondageContext'

function SondageForm() {

const [text,setText]=useState('')
const [message, setMessage]=useState('')
const [rating, setRating]=useState('')
const [isDisabled, setIsDisabled]=useState(true)

const{addSondage}= useContext(SondageContext)

function handleChange(e){
  if(text===''){
    setIsDisabled(true)
    setMessage(null)
  } else if(text !==''&& text.trim().length<=10){
    setMessage('Entrez au minimum 10 caractères ')
    setIsDisabled(true)
  } else{
    setMessage(null)
    setIsDisabled(false)
  }
  setText(e.target.value)
}
function handleSubmit(e){
e.preventDefault()
if(text.trim().length>10){
  const newFeedBack={
    text,
    rating

  }
  addSondage(newFeedBack)

  setText('')
}

}
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Quelle note attribuez-vous à notre service ?</h2>
        <RatingSelect select={(note)=>{setRating(note)}}/>
        <div className="input-group">
          <input 
          type="text" 
          placeholder='votre avis compte'
          onChange={handleChange}
          value={text}
          name='text' />
          <Button type='submit' version='primary' isDisabled={isDisabled}> envoyer</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
     
    </Card>
  )
}

export default SondageForm