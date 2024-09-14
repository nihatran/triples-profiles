import "./App.css";
import { Card } from "./Card";
import { members } from "./membersData";

export default function App() {
  let memberCards = members.map((member) => {
    return <Card key={member.id} member={member} />;
  });

  return (
    <>
      <div className="header">
        <h1>tripleS</h1>
      </div>
      <div className="cardsContainer">{memberCards}</div>
    </>
  );
}
