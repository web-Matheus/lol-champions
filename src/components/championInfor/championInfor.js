import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "./championInfor.css"

function ChampionInfor(){

  const[ChampionData, setChampionData] = useState({})
  const { id } = useParams();

  const getChampion = (id) =>{
     axios.get("http://localhost:3001/")
      .then((res) => {
        setChampionData(res.data.data[id])
      })
  }

   useEffect(() =>{

    getChampion(id)

   },[id])

  return (
    <div className='container-champion'>
          <div className='champion-infor'>
            <img 
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${ChampionData.name}_0.jpg`}
            alt={ChampionData.name}
            />
            <div className='infor-text'>
                <h4>{ChampionData.title}</h4>
                <h2>{ChampionData.name}</h2>
            </div> 
            <div className='box-infor'>
              <strong>{ChampionData.tags}</strong>
              <div className='line'></div>
              <p>{ChampionData.blurb}</p>
            </div>
          </div>
       
    </div>
  )
}

export default ChampionInfor;
