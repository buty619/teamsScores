import React from "react";
import TeamScore from "./TeamScore";
import "../App.css";

export default function Scoreboar({ teams }) {
  return (
    <div className="container">
      {Object.entries(teams).map(([team, players]) => (
        <TeamScore key={team} team={team} players={players} />
      ))}
    </div>
  );
}

//no esconder cada jugador esconder el contenedor de todos los jugadores
//divir cada equipo en componentes que tenga el estado de cada equipo

//se usa el concepto de clousure e iterar sobre objetos
// es iportante por si se tiene que llamar una base de datos no realcional  {mongoDB}
