import React, { useState, useEffect} from 'react';
import axios from 'axios'

import './App.css';
import Skeleton from './components/skeleton/skeleton';

import Logo from "./assets/riot-logo.png"
import NavBar from './components/skeleton/nav/nav';

function App() {
  const [dadosApi, setDadosApi] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = () => {
    axios.get("http://localhost:3001/")
      .then((res) => {
       setDadosApi(res.data.data)
       setIsLoading(false)
      })
  }

  useEffect(() =>{
    fetchApi();
  },[])

  return (
    <div>
      <header>
        <img src={Logo} className="logo"
        alt='imagem que representa o logo da riot'/>
        <span>league of legends champions</span>
      </header>

      <NavBar/>
      
      <section className='container'>
        {isLoading ? <Skeleton/> : Object.values(dadosApi).map((element,key) =>{
        return(
           <div key={key} className="card-champion">
            <img alt={`Imagem do champeão ${element.name}`}
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${element.name}_0.jpg`}/>
            <div class="go-arrow">
              <h3>{element.name}</h3>
            </div>
           </div>
        )
      })}
      </section>
      
      
    </div>
  );
}

export default App;
