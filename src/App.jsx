import React from 'react';
import {useState } from 'react';
import './App.css';
import Header from './components/Header';
import SondageList from './components/SondageList';
import SondageStats from './components/SondageStats';
import SondageData from './data/SondageData';
import SondageForm from './components/SondageForm';
import {v4 as uuidv4} from 'uuid'
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink';

function App() {
  const [sondage,setSondage]=useState(SondageData);

  const deleteSondage=(id)=>{
    if(window.confirm('Etes vous sur de vousloir supprimer ?')){
      setSondage(x=>{
        return sondage.filter(xx=>{return xx.id !== id})
      })
    }
  }

  const addSondage=(newFeedBack)=>{
      newFeedBack.id = uuidv4()
      setSondage([newFeedBack, ...sondage])
      console.log(newFeedBack)
  }
  return (
    <Router>
      
    
          <Header/>
          <div className="App">
        <Routes>
                <Route exact path='/' element={
                  <>
                  <SondageForm addSondage={addSondage}/>
                  <SondageStats sondage={sondage}/>
                  <SondageList sondage={sondage} handleDelete={deleteSondage}/>
                  <AboutIconLink/>
                  </>
                }>
                </Route>
        
        
                <Route path='/about' element={<AboutPage/>}/>      
      </Routes>
      
     
      </div>
    </Router>
  );
 
}

export default App;
