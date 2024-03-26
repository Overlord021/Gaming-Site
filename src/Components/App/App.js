import Slogan from "../Slogan/Slogan";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
export const MyContext = React.createContext();
const App = () => {
  const [property, setProperty] = useState([]);
  const [error, setError] = useState("");
  const fetchAppMain = async () => {
    try {
      const res = await axios(
        "https://overlord021.github.io/Gaming-Site-File/db.json"
      );
      setProperty(res.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchAppMain();
  }, []);
  return (
    <>
      <MyContext.Provider value={{property}}>
        <Slogan />
      </MyContext.Provider>
    </>
  );
};

export default App;