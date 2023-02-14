import React from 'react';
//import {useState } from 'react';
import './App.css';
import Header from './components/Header';
import SondageList from './components/SondageList';
import SondageStats from './components/SondageStats';
//import SondageData from './data/SondageData';
import SondageForm from './components/SondageForm';
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink';
import { SondageProvider } from './context/SondageContext';


function App() {
  //const [sondage,setSondage]=useState(SondageData);
  return (
    <SondageProvider>
    <Router>
      
    
          <Header/>
          <div className="App">
        <Routes>
                <Route exact path='/' element={
                  <>
                  <SondageForm />
                  <SondageStats />
                  <SondageList/>
                  <AboutIconLink/>
                  </>
                }>
                </Route>
        
        
                <Route path='/about' element={<AboutPage/>}/>      
      </Routes>
      
     
      </div>
    </Router>
    </SondageProvider>
  );
 
}

export default App;
