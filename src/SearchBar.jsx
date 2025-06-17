import React, { useEffect, useState } from "react";


function SearchBar({ setquery, query }) {
  const [value, setvalue] = useState("");

  const handlechange = (e) => {
    const input = e.target.value;
    const formatted =
      input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    setvalue(formatted);
    setquery(formatted);
  };

  return (
    <>
      <input
        className="SearchBar"
        type="text"
        value={value}
        placeholder="Search for a Country "
        onChange={handlechange}
      />
    </>
  );
}

export default SearchBar;
