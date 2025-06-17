import React, { useEffect, useState } from "react";
import CountriesData from "./CountriesData";

function SelectMenu({ country }) {
  const [selected, setselected] = useState("");

  const selectchange = (e) => {
    setselected(e.target.value);
  };
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <>
      <select className="filter" onChange={selectchange}>
        <option hidden="">Filter by Name</option>
        {country.map((country) => (
          <option key={country.name.common}>{country.name.common}</option>
        ))}
      </select>
    </>
  );
}

export default SelectMenu;
