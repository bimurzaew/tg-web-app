import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import List from "./components/List/List";


function App() {
  const {onToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  },[])

  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
