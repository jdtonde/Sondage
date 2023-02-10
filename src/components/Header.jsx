import React from 'react'
import PropTypes from 'prop-types' //pour typer les props recues


function Header({text,bgColor,textColor}) {

    const styles={
        backgroundColor:bgColor,
        color:textColor
    }
  return (
    <header style={styles}>
        <div className="container">
            <div>{text}</div>
        </div>
    </header>
  )
}

//Add this pour definir tous les types des differents props 
//Header.propTypes={
//    props.laprops: PropTypes.typequonveut
//}

Header.propTypes={
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
}

Header.defaultProps={
    text:'Sondage UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95'
}





export default Header;