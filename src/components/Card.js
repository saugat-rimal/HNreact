import "../css/Card.css";
import Star from "../images/Star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (props.openSpots >= 10) {
    badgeText = "Available";
  } else if (props.money === 0) {
    badgeText = "Free Event";
  } else if (props.availability === 1) {
    badgeText = "Join Now ";
  }

  return (
    <div className="card--container">
      {badgeText && <p className="openspots">{badgeText}</p>}

      <img src={props.coverImg} alt="" className="card--image" />
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
          <b>From {props.price} /</b>{" "}
        </span>{" "}
        {props.persomething}
      </p>
    </div>
  );
}
