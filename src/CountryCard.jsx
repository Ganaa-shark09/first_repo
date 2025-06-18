import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

export default function CountryCard(props) {
  const { name, flag, alt, region, official, defaulty = "none" } = props;
  // console.log(props);
  const [classActive, setclassActive] = useState(false)
  const navigate = useNavigate()  

  const handleclick = ()=>{
    navigate('/countryinfo',{
      state :{
      name,
      flag,
      alt,
      region,
      official
    }
    })
    
  }

  return (
    <>
      <div className="card" key={name} onClick={handleclick} >
        <div  className="countrycard" >
          <img src={flag} alt={alt} />
          <div className="cardtext">
            <h3>{name}</h3>
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
        </div>
      </div>
    </>
  );
}
