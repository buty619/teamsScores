import React from "react";
import "../App.css";

export default function PlayerScore({ players }) {
  return (
    <div>
      {Object.entries(players).map(([player, goals]) => (
        <div className="card-player" key={player}>
          <b>{player}</b> a marcado <b>{goals}</b> goles
        </div>
      ))}
    </div>
  );
}
