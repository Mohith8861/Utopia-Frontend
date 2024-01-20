import { Link } from "react-router-dom";

export default function TourCard({ data }) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img src={data.imglink} alt="Tour 1" className="card__picture-img" />
        </div>

        <h3 className="heading-tertiary tour-card">
          <span>{data.title}</span>
        </h3>
      </div>

      <div className="card__details">
        <h4 className="card__sub-heading">{data.days}-day tour</h4>
        <p className="card__text">{data.optional}</p>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="/img/icons.svg#icon-map-pin"></use>
          </svg>
          <span>{data.places[0].split("(")[0]}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="/img/icons.svg#icon-calendar"></use>
          </svg>
          <span>April 2021</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="/img/icons.svg#icon-flag"></use>
          </svg>
          <span>{data.places.length}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="/img/icons.svg#icon-user"></use>
          </svg>
          <span>25 people</span>
        </div>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">₹{data.price} </span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">4.9</span>
          <span className="card__footer-text">rating (21)</span>
        </p>
        <Link to={`/tour/${data.slug}`} className="btn btn--blue btn--small">
          Details
        </Link>
      </div>
    </div>
  );
}
