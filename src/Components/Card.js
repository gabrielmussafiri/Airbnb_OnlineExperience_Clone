function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card--container">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.coverImg} alt="katie" className="card--image" />
      <div className="card--review">
        <img src="./Images/star.png" alt="star" className="card--star" />
        <p>{props.item.rating}</p>
        <p className="gray">{props.item.reviewCount}</p>
        <p className="gary">{props.item.location}</p>
      </div>
      <p>{props.item.title}</p>
      <p className="card--title">
        From ${props.item.price} <span>/person</span>
      </p>
    </div>
  );
}
export default Card;
