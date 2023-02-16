import React from 'react'
import SondageItem from './SondageItem'
//import PropTypes from 'prop-types'
//import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import SondageContext from '../context/SondageContext'
import Spinner from './shared/Spinner'

function SondageList() {
  const {sondage, isLoading}=useContext(SondageContext)

    if(!isLoading && (!sondage || sondage.lenght===0)){
       return <p>Aucun sondage pour l'instant </p>
    }

    // return (
    //     <div className="feedback-list">
    //         <AnimatePresence>
    //         {sondage.map((x=>{
    //             return <motion.div
    //             key={x.id}
    //             initial={{opacity:0}}
    //             animate={{opacity:1}}
    //             exit={{opacity:0}}
    //             >
    //                 <SondageItem key={x.id} item={x} handleDelete={handleDelete}/>

    //             </motion.div>
    //         }))}
    //         </AnimatePresence>
    //     </div>
    // )
  //RETURN SANS FRAMER-MOTION

  return isLoading ? <Spinner/> :(    <div className="feedback-list">
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