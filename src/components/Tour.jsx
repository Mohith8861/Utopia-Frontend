/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function Tour() {
  let [tour, setTour] = useState({});
  let [isLoading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://utopia-backend-lga3.onrender.com/tour/search/${slug}`
        );
        const data = await res.json();
        setTour(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div className={{ fontSize: "5rem" }}>Loading......</div>
  ) : (
    <>
      <main className="tour_page">
        <section className="section-header">
          <div className="header__hero">
            <div className="header__hero-overlay"></div>
            <img src={tour.imglink} alt="tour" className="header__hero-img" />
          </div>
          <div className="heading-box">
            <h1 className="heading-tertiary-tour u-margin-bottom-big">
              <span>{tour.title} tour</span>
            </h1>
            <div className="heading-box__group">
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use xlinkHref="/img/icons.svg#icon-clock"></use>
                </svg>
                <span className="heading-box__text">{tour.days} days</span>
              </div>
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use xlinkHref="/img/icons.svg#icon-map-pin"></use>
                </svg>
                <span className="heading-box__text">
                  {tour["places"][0].split("(")[0]}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-description">
          <div className="overview-box">
            <div>
              <div className="overview-box__group">
                <h2 className="heading-primary tour-page ma-bt-lg u-margin-bottom-small">
                  Quick facts
                </h2>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use xlinkHref="/img/icons.svg#icon-clock"></use>
                  </svg>
                  <span className="overview-box__label">Duration</span>
                  <span className="overview-box__text">{tour.days} Days</span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use xlinkHref="/img/icons.svg#icon-map-pin"></use>
                  </svg>
                  <span className="overview-box__label">Start Location</span>
                  <span className="overview-box__text">
                    {tour["places"][0].split("(")[0]}
                  </span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use xlinkHref="/img/icons.svg#icon-user"></use>
                  </svg>
                  <span className="overview-box__label">Participants</span>
                  <span className="overview-box__text">10 people</span>
                </div>
              </div>

              <div className="overview-box__group">
                <h2 className="heading-primary tour-page ma-bt-lg u-margin-bottom-small">
                  Places Covered
                </h2>

                {tour["places"].map((data, index) => (
                  <div className="overview-box__detail" key={index}>
                    <svg className="overview-box__icon">
                      <use xlinkHref="/img/icons.svg#icon-map"></use>
                    </svg>
                    <span className="overview-box__text">{data}</span>
                  </div>
                ))}
              </div>
              <div className="overview-box__group">
                <h2 className="heading-primary tour-page ma-bt-lg u-margin-bottom-small">
                  Included
                </h2>

                {Object.keys(tour).includes("detils")
                  ? tour.detils.otherInclusions.map((data, index) => (
                      <div className="overview-box__detail" key={index}>
                        <svg className="overview-box__icon">
                          <use xlinkHref="/img/icons.svg#icon-plus"></use>
                        </svg>
                        <span className="overview-box__text">{data}</span>
                      </div>
                    ))
                  : ""}
              </div>
              <div className="overview-box__group">
                <h2 className="heading-primary tour-page ma-bt-lg u-margin-bottom-small">
                  Exclusions
                </h2>
                {Object.keys(tour).includes("detils")
                  ? tour.detils.exclusions.map((data, index) => (
                      <div className="overview-box__detail" key={index}>
                        <svg className="overview-box__icon">
                          <use xlinkHref="/img/icons.svg#icon-plus"></use>
                        </svg>
                        <span className="overview-box__text">{data}</span>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>

          <div className="description-box">
            <h2 className="heading-primary tour-page ma-bt-lg u-margin-bottom-small">
              Tour Iternary
            </h2>
            {tour["tourItinerary"].map((p, index) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                <p className="overview-box__label">{p.day}</p>
                <div className="overview-box__detail">
                  {p.schedule.join(" ")}
                </div>
                <div style={{ width: "100%", height: "1rem" }}></div>
              </div>
            ))}
          </div>
        </section>
        <section className="section-pictures">
          {tour.tourItinerary
            .map((e) => {
              if (e.day_img && e.day_img.length !== 0) return e.day_img;
            })
            .map(
              (e, index) =>
                index <= 2 && (
                  <div key={index + 1} className="picture-box">
                    <img
                      className={`picture-box__img picture-box__img--${
                        index + 1
                      }`}
                      src={e}
                      alt="The Park Camper Tour 1"
                    />
                  </div>
                )
            )}
        </section>

        <section className="section-cta">
          <div className="cta">
            <div className="cta__img cta__img--logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                className="footer__logo"
                viewBox="0 0 1680.097 1680.097"
                enableBackground="new 0 0 1680.097 1680.097"
                style={{ height: "25rem" }}>
                <path
                  fill="rgb(255, 255, 255,0.1)"
                  stroke="rgb(255, 255, 255,0.8)"
                  strokeWidth="15"
                  strokeMiterlimit="10"
                  d="M847.03,40.048 c-660.693,934.072,584.451,1109.066,206.817,29.066c-879.936,731.244,277.489,1222.542,192.247,81.604 C206.882,629.302,1197.711,1403.423,1410.671,279.3c-1127.669,193.308-370.958,1197.497,125.689,166.795 c-1139.277-105.141-668.253,1060.682,78.237,193.642c-1073.244-396.425-920.008,851.584,25.452,207.293 c-934.072-660.693-1109.066,584.451-29.066,206.817c-731.244-879.936-1222.542,277.489-81.604,192.247 c-478.584-1039.213-1252.705-48.383-128.581,164.576C1207.489,283.001,203.3,1039.712,1234.002,1536.359 c105.141-1139.277-1060.682-668.253-193.642,78.237c396.425-1073.244-851.584-920.008-207.293,25.452 c660.693-934.072-584.451-1109.066-206.817-29.066c879.936-731.244-277.489-1222.542-192.247-81.604 c1039.213-478.584,48.383-1252.705-164.576-128.581C1397.096,1207.489,640.385,203.3,143.737,1234.002 C1283.014,1339.143,811.991,173.32,65.501,1040.36c1073.244,396.425,920.008-851.584-25.452-207.293 C974.12,1493.76,1149.114,248.616,69.115,626.25c731.244,879.936,1222.542-277.489,81.604-192.247 C629.302,1473.215,1403.423,482.386,279.3,269.426c193.308,1127.669,1197.497,370.958,166.795-125.689 C340.954,1283.014,1506.777,811.991,639.737,65.501C243.312,1138.745,1491.321,985.509,847.03,40.048z"
                />
              </svg>
            </div>
            {tour.tourItinerary
              .map((e) => {
                if (e.day_img && e.day_img.length !== 0) return e.day_img;
              })
              .map(
                (e, index) =>
                  index < 2 && (
                    <img
                      src={e}
                      alt=""
                      className={`cta__img cta__img--${index + 1}`}
                      key={index + 1}
                    />
                  )
              )}

            <div className="cta__content">
              <h2 className="heading-secondary">What are you waiting for?</h2>
              <p className="cta__text">
                {tour.days} days. 1 adventure. Infinite memories. Make it yours
                today!
              </p>
              <button className="btn btn--green span-all-rows">
                Book tour now!
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
