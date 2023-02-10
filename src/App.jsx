import React from 'react';
import {useState } from 'react';
import './App.css';
import Header from './components/Header';
import SondageList from './components/SondageList';
import SondageStats from './components/SondageStats';
import SondageData from './data/SondageData';

function App() {
  const [sondage,setSondage]=useState(SondageData);

  const deleteSondage=(id)=>{
    if(window.confirm('Etes vous sur de vousloir supprimer ?')){
      setSondage(x=>{
        return sondage.filter(xx=>{return xx.id != id})
      })
    }
  }
  return (
    <div>
      <Header/>
      <div className="App">
          <SondageStats sondage={sondage}/>
          <SondageList sondage={sondage} handleDelete={deleteSondage}/>
      </div>
    </div>
  );

}

export default App;
