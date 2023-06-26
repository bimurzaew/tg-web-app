import './App.css';
import {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";


function App() {
  const {onToggleButton, tg} = useTelegram()
  const [data, setData] = useState([]);

  useEffect(() => {
    tg.ready()
  },[])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setData(json))
  },[])


  return (
    <div className="App">
    <Header />
      <button onClick={onToggleButton}>toggle</button>
      <ul>
        {data.slice(0,10).map(item => <li>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
