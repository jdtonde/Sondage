import React from 'react'
import PropTypes from 'prop-types'

function Card({children,reverse }) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )


/* conditional style vs conditional className 

const styles={
    backgroundColor:reverse ? 'rgb(0,0,0,0.4)':'#fff',
    col:reverse ? '#fff':'#000'
 }
  return(
    <div className='card' style={styles}>{children}</div>
  )
 */
}

Card.defaultProps={
    reverse:false
}

Card.propTypes={
    reverse:PropTypes.bool,
    children:PropTypes.node.isRequired
}

export default Card