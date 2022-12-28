import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ChampionInfor(){

  const[ChampionData, setChampionData] = useState({})
  
  const params = useParams();
    
  const[id] = useState(params.id)

 
   useEffect(() =>{

    axios.get("http://localhost:3001/")
        .then((res) => {
         setChampionData(res.data.data)
  
   },[])

  }) 
  return (
    <div>
      {Object.values(ChampionData).map((element,key) =>{
        return(
          <div className='champ' key={key}>
            <h4>{element.title}</h4>
            <p>{element.blurb}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ChampionInfor;
