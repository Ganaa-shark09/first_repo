import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import SelectMenu from "./SelectMenu";
import SearchBar from "./SearchBar";
import RoutedData from "./RoutedData";

function CountriesData() {
  const [country, setcountry] = useState([]);
  const [loading, setloading] = useState(true);
  const [query, setquery] = useState("");
  const [count, setcount] = useState('')

  const array = country
    .filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    )
    .map((country) => {
      return (
        <>
        <CountryCard
          name={country.name.common}
          flag={country.flags.svg}
          alt={country.flags.alt}
          region={country.name.official}
          official={country.flags.alt}
          key={country.name.common}
        />
        </>
      );
    });

  useEffect(() => {
    const timer = setTimeout(() => {
      loading === true ? <>'hiiii'</> : setloading(false);
      fetch("https://restcountries.com/v3.1/all?fields=name,flags")
        .then((res) => res.json())
        .then((data) => {
          setcountry(data);
        });
    }, 1500);
    return () => clearTimeout(timer);
    console.log('timeout cleared');
    
  }, [count]);

  

  return (
    <>
      <div className="combinediv">
        <div className="ball"></div>
        <SearchBar query={query} setquery={setquery} />
        <SelectMenu country={country} />
        <div className="ball2"></div>
      </div>
      <div className="maindiv">{array}</div>
    </>
  );
}

export default CountriesData;
