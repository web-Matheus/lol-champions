import React from 'react';

import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './App.css';


import Logo from "./assets/riot-logo.png"
import Home from './components/home/home';
import ChampionInfor from './components/championInfor/championInfor'


function App() {

  return (
    <div>
      <header>
        <img src={Logo} className="logo"
        alt='imagem que representa o logo da riot'/>
        <span>league of legends champions</span>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:id' element={<ChampionInfor/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
