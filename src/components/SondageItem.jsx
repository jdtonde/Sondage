import React from 'react'
//import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import Card from './shared/card'
import PropTypes from 'prop-types'

function SondageItem({item, handleDelete}) {

  return (
      <Card reverse={false}> {/*  la class css du parent va chez le parent et celle des children peut rester ici */}
        <div className="num-display">{item.rating}</div> 
        <div className="close" >
          <FaTimes color='purple' onClick={()=>handleDelete(item.id)}/>
        </div>
        <div className="text-display">{item.text}</div>
      </Card>
    
  )
}

SondageItem.propTypes={
  item:PropTypes.object.isRequired
}

export default SondageItem