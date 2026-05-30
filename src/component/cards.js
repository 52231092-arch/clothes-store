import { useState } from 'react';
import '../styles/cards.css'

function Card({ title, names }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card">
      <h3>{title}</h3>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'أسكر ▲' : 'افتح ▼'}
      </button>
      {isOpen && (
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Card;