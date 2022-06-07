import "../css/Card.css";
import Saugat from "../images/saugatrimalwithmic.jpg";
import Star from "../images/Star.png";

export default function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "Available";
  } else {
    badgeText = "Online";
  }

  return (
    <div className="card--container">
      <p className="openspots">{badgeText}</p>
      <img src={Saugat} alt="" className="card--image" />
      <p className="card--loc--rate--comm">
        <img src={Star} alt="star" className="card--star" />{" "}
        {props.stats.rating}{" "}
        <span className="gray">
          ({props.stats.reviewCount}) • {props.location}{" "}
        </span>{" "}
      </p>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span>
          <b>From ${props.price} /</b>{" "}
        </span>{" "}
        person
      </p>
    </div>
  );
}
