import React, { useEffect, useState } from "react";
import CountriesData from "./CountriesData";
import { useNavigate } from "react-router-dom";

function SelectMenu({ country }) {

  const navigate = useNavigate()
  
  const selectchange = (e) => {
    const selected = e.target.value;
    console.log(selected);
    const selectedcountry = country.find((c)=>
    c.name.common===selected
  )
  if(selectedcountry){
    navigate ('/countryinfo',{
      state :{
      name : selectedcountry.name.common,
      flag : selectedcountry.flags.svg,
      alt : selectedcountry.flags.alt ,
      region : selectedcountry.name.official,
      official : selectedcountry.flags.alt
    }
    })
  };
}
  // useEffect(() => {
  //   console.log(selected);
  // }, [selected]);
  return (
    <>
      <select className="filter" onChange={selectchange} >
        <option hidden="">Filter by Name</option>
        {country.map((c) => (
          <option key={c.name.common} value={c.name.common}>{c.name.common}</option>
        ))}
      </select>
    </>
  );
}

export default SelectMenu;
