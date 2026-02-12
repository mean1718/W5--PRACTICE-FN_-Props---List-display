import React from "react";
import { people } from "./data.js";
import "./index.css";

// Card component
function Card({ person }) {
  return (
    <div className="card">
      <img src={person.image} alt={person.name} />
      <h3>{person.name}</h3>
      <p className="class">{person.class}</p>
      <p className="hobbies">
        <i>{person.hobbies}</i>
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>People Cards</h1>
      <div className="card-container">
        {people.map((person) => (
          <Card key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}
export default App;
