function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card--container">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.coverImg} alt="katie" className="card--image" />
      <div className="card--review">
        <img src="./Images/star.png" alt="star" className="card--star" />
        <p>{props.stats.rating}</p>
        <p className="gray">({props.stats.reviewCount})</p>
        <p className="gary">{props.location}</p>
      </div>
      <p>{props.title}</p>
      <p className="card--title">
        From ${props.price} <span>/person</span>
      </p>
    </div>
  );
}
export default Card;
