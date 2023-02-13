import React from 'react'
import Card from '../components/shared/card'
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
        <div className='about'>
            <h1>About this project</h1>
            <p>This is a React app to effectuer des sondages sur certains chef de l'administration</p>
            <p>Version: 1.0.0</p>

            <Link to='/'>
                Retour vers la page d'accueil
            </Link>
        </div>
    </Card>
  )
}

export default AboutPage