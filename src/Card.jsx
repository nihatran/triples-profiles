import { useState } from "react";
import "./Card.css";

export function Card({ member }) {
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
          <div className="cardFront">
            <img src={member.picture} alt="member photo"></img>
          </div>
          <div className="cardBack">
            <p>{member.number}</p>
            <p>Name: {member.name}</p>
            <p>Birthday: {member.bday}</p>
            <div className="colorRow">
              <p>Color: &nbsp;</p>
              <div
                style={{
                  backgroundColor: `${member.color}`,
                  height: "15px",
                  width: "15px",
                }}
              ></div>
            </div>
            <p>Emoji: {member.emoji}</p>
          </div>
        </div>
      </div>
    </>
  );
}
