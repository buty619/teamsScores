import React from "react";
import Scoreboard from "./components/Scoreboard";
import Api from "./Api";
import "./App.css";

const data = Api();

export default function App() {
  return (
    <div className="todo-container">
      <Scoreboard teams={data.teams} />
    </div>
  );
}
