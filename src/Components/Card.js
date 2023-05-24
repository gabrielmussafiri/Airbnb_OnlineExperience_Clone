function Card(props) {
  return (
    <div className="card--container">
      {/* card 1 */}
      <div className="card">
        <p className="card--text">SOLD</p>
        <img src={props.img} alt="katie" className="card--image" />
        <div className="card--review">
          <img src="star.png" alt="star" />
          <p>{props.rating}</p>
          <p>{props.reviewCount}</p>
          <p>{props.country}</p>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          From {props.price} <span>/person</span>
        </p>
      </div>
    </div>
  );
}
export default Card;
