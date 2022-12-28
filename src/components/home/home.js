import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

import  NavBar  from '../nav/nav'
import Skeleton from '../skeleton/skeleton'
import './home.css'

function Home() {
    const [AllChampions, setAllChampions] = useState({});
    const [filtered, setFiltered] = useState({});
    const [active, setActive] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
  

    useEffect(() =>{
        fetchApi();
        },[])
  

    const fetchApi = () => {
      axios.get("http://localhost:3001/")
        .then((res) => {
         setAllChampions(res.data.data)
         setFiltered(res.data.data)
         setIsLoading(false)
        })
    }
    
   
  return (
    <div>
        <NavBar AllChampions={AllChampions} active={active}
        setActive={setActive}
        setFiltered={setFiltered}/>
    <section className='container'>
        {isLoading ? <Skeleton/> : Object.values(AllChampions).map((element,key) =>{
        return(
           <div key={key} className="card-champion">
            <img alt={`Imagem do champeão ${element.name}`} 
            loading="lazy" 
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${element.name}_0.jpg`}/>
            <div class="go-arrow">
              <h3>{element.name}</h3>
                <Link to={element.name}>go</Link>
            </div>
           </div>
        )
      })}
      </section>
      </div>
  )
}

export default Home