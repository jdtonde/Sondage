import React from 'react'
//import { useState } from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from './shared/card'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import SondageContext from '../context/SondageContext'

function SondageItem({item}) {

  const {deleteSondage,editSondage}= useContext(SondageContext)

  return (
      <Card reverse={false}> {/*  la class css du parent va chez le parent et celle des children peut rester ici */}
        <div className="num-display">{item.rating}</div> 
        <button className="close" >
          <FaTimes color='purple' onClick={()=>deleteSondage(item.id)}/>
        </button>
        <button className="edit" onClick={()=>editSondage(item)}><FaEdit color='purple'/></button>
        <div className="text-display">{item.text}</div>
      </Card>
    
  )
}

SondageItem.propTypes={
  item:PropTypes.object.isRequired
}

export default SondageItem