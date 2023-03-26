import React from "react";
import './App.css';
import Weather from "./Weather";
export default function App() {
  return (
  <div className="App">
    <div className="container">
     <Weather defaultCity="New York" />


    <footer>
      This project was coded by {" "}
      <a href="https://github.com/Jpeace1342/react-weather-appp"rel="noreferrer"target="_blank">
        Jamie Navarro 
      </a>{" "} 
      and is{" "}
      <a href="https://github.com/Jpeace1342/react-weather-appp"rel="noreferrer"target="_blank">
    open sourced on GitHub
    </a>
    </footer>
    </div>
    </div>
  );
}


