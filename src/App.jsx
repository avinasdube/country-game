import { useEffect, useState } from 'react';
import './App.css'
import CountryCapitalGame from './components/CountryCapitalGame/CountryCapitalGame'
import LoadScreen from './components/LoadScreen/LoadScreen';

function App() {

  const data = {
    "Bharat": "New Delhi",
    "Russia": "Moscow",
    "Nepal": "Kathmandu",
    "Bhutan": "Thimphu",
    "Srilanka": "Colombo",
    "Australia": "Canberra"
  }

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setInterval(() => {
      setLoad(false)
    }, 3000);
  }, [])

  return (
    load === true ?
    <LoadScreen /> :
    <div className="App" >
      <CountryCapitalGame data={data} />
    </div >
  )
}

export default App
