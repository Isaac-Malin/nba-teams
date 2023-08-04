import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

import PlayerCard from "./components/PlayerCard";


function App() {
  const [players, setPlayers] = useState([]);
  const [stats, setStats] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.sportradar.com/nba/trial/v8/en/teams/583ecfa8-fb46-11e1-82cb-f4ce4684ea4c/profile.json?api_key=e8bgqyp9eqc2zucs9derfm8q"
      )
      .then((res) => {
        setPlayers(res.data.players);
        console.log(players)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <div className="App">
      <h1>Phoenix Suns</h1>
      <PlayerCard players={players}/>
    </div>
  );
}

export default App;
