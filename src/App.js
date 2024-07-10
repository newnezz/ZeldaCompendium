import './App.css';
import { useState } from 'react';

import GenericData from "./GenericData";


function App() {
  const [data, setData] = useState(<GenericData type="games" />);

  function setPage(page) {
    switch (page) {
      case "bosses":
        setData(<GenericData type="bosses" />)
        break;
      case "characters":
        setData(<GenericData type="characters" />)
        break;
      case "staff":
        setData(<GenericData type="staff" />)
        break;
      case "places":
        setData(<GenericData type="places" />)
        break;
      case "monsters":
        setData(<GenericData type="monsters" />)
        break;
      case "dungeons":
        setData(<GenericData type="dungeons" />)
        break;
      case "games":
        setData(<GenericData type="games" />)
        break;
      case "items":
        setData(<GenericData type="items" />)
        break;
      default:
        break;

    }
  }

   return (
    <div style={{
      margin: '25px',
      
    }}>
      <h1>Zelda App - ALL https://docs.zelda.fanapis.com/ data</h1>
      <div style={{display: 'flex', gap: '25px', justifyContent: 'center'}}>
        <button onClick={() => setPage('games')}>Games</button>
        <button onClick={() => setPage('characters')}>Characters</button>
        <button onClick={() => setPage('bosses')}>Bosses</button>
        <button onClick={() => setPage('dungeons')}>Dungeons</button>
        <button onClick={() => setPage('items')}>Items</button>
        <button onClick={() => setPage('monsters')}>Monsters</button>
        <button onClick={() => setPage('places')}>Places</button>
        <button onClick={() => setPage('staff')}>Staff</button>
      </div>
      {data}
    </div>
  );
}

export default App;
