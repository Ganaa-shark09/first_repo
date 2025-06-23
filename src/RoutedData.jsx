import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';

export default function RoutedData() {
    const {state} = useLocation()
    const { name, flag, alt, region, official, defaulty = "none" } = state || {};

        const back = useNavigate()
        const handleback = ()=>{
            back('/')
        }

  return (
    <>
    <div  className="Routedcard" >
        <center>
          <img src={flag} alt={alt} />
          <h1>{name}</h1>
          </center>
          <div className="cardtext">
            
            <p>
              <b>population :</b>
              {"?"}
            </p>
            <p>
              <b>Region :</b>
              {region}
            </p>
            <p>
              <b>Official :</b>
              {official || defaulty}
            </p>
          </div>
          <button onClick={handleback} ><h1>Back</h1></button>
        </div>
    </>
  )
}
