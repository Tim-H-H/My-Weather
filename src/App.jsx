import { useState } from 'react'
import './App.css'
import Weather from "./components/Weather";


function Header() {
  return (
    <header>
        <h1>Weather App</h1>
    </header>
  )
}

function App() {
  return (
    <div className="App">
  <Header/>
  <Weather/>
 </div>
  );
}

export default App;
