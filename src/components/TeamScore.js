import React, { useState } from "react";
import PlayerScore from "./PlayerScore";
import "../App.css";

export default function TeamScore({ team, players }) {
  const [tooglePlayers, setTooglePlayers] = useState(false);
  const handleHeaderClick = () => {
    setTooglePlayers(!tooglePlayers);
  };
  return (
    <div key={team} className="card-container">
      <h1 onClick={handleHeaderClick}>{team}</h1>
      {tooglePlayers && <PlayerScore players={players} />}
    </div>
  );
}

// state = { isPlayersVisible: false }; //nueva especificación se define afuera del constructor y se entiende como parte del estado de la clase
//mover teamScore a hooks, repasar las correcciones para ayudar a jhon.
