import React from 'react'
import SondageItem from './SondageItem'
//import PropTypes from 'prop-types'

function SondageList({sondage}) {
    if(!sondage || sondage.lenght===0){
       return <p>Aucun sondage pour l'instant </p>
    }
    return (
    <div className="feedback-list">
        {sondage.map((x=>{
            return <SondageItem key={x.id} item={x}/>
        }))}
    </div>
  )
}

// SondageList.propTypes={
//     sondage:PropTypes.arrayOf(
//         PropTypes.shape({
//             id:PropTypes.number.isRequired,
//             text:PropTypes.text.isRequired,
//             rating:PropTypes.number.isRequired,
// })    
// ),
// }

export default SondageList