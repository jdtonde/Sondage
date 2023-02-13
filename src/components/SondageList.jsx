import React from 'react'
import SondageItem from './SondageItem'
//import PropTypes from 'prop-types'
//import {motion, AnimatePresence} from 'framer-motion'

function SondageList({sondage,handleDelete}) {
    if(!sondage || sondage.lenght===0){
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
    return (
    <div className="feedback-list">
        {sondage.map((x=>{
            return <SondageItem key={x.id} item={x} handleDelete={handleDelete}/>
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