import React from "react";
import './App.css';
import Mainbg from './Mainbg';
import Event from './Event';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Listcs from './components/cse/Listcs';
import Listec from './components/ece/Listec';
import Listee from './components/eee/Listee';
import List from './components/general/List';


function App() {
  return (
    
    <div>
      <Mainbg />
      <div className='bwme'></div>
      <Event />   
      <BrowserRouter>

        <Routes>
      
        <Route path='/cse' component={Listcs} />
        <Route path='/ece' component={Listec} />
        <Route path='/eee' component={Listee} />
        <Route path='/general' component={List} />
        </Routes>
        </BrowserRouter>

      
    </div>
  );
}

export default App;
