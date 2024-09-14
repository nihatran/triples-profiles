import { useState } from "react";
import "./Card.css";

export function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <div className="container">
        <div
          className={`card ${isFlipped ? "isFlipped" : null}`}
          onClick={handleClick}
        >
          <div className="cardFront">Front</div>
          <div className="cardBack">Back</div>
        </div>
      </div>
    </>
  );
}
