import React, { useState } from "react";

export default function CountryCard(props) {
  const { name, flag, alt, region, official, defaulty = "none" } = props;
  // console.log(props);
  const [classActive, setclassActive] = useState(false)

  const handleclick = ()=>{
    window.open(flag)
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
