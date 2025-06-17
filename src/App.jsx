import { useState } from "react";
import Header from "./Header";
import "./App.css";
import CountriesData from "./CountriesData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <CountriesData />
    </>
  );
}

export default App;
