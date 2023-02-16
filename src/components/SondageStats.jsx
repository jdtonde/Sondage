import React from 'react'
//import PropTypes from 'prop-types'
import { useContext } from 'react'
import SondageContext from '../context/SondageContext'

function SondageStats() {
  const {sondage}=useContext(SondageContext)
    let moyenne= sondage.reduce((acc,cur)=>{ return acc + cur.rating },0) / sondage.length

    moyenne = moyenne.toFixed(1).replace(/[.,]0$/, '')// fixer la decimale à 1 si nombre decimal ou arrondi en retirant carctere excedant
  return (
    <div className='feedback-stats'> 
    <h4> {sondage.length} Reviews</h4>
    <h4>Moyenne: {isNaN(moyenne)?0 :moyenne}</h4>
    </div>
  )
}

//SondageStats.propTypes={
//    sondage:PropTypes.array.isRequired
//}

export default SondageStats