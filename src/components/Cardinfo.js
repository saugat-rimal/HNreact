import Card from "./Card";
import "../css/Card.css";
import data from "./data";

export default function Cardinfo() {
  const cardElement = data.map((info) => {
    return <Card key={info.id} {...info} />;
  });

  return (
    <div className="section--card">
      <div className="card--section">{cardElement}</div>
    </div>
  );
}
