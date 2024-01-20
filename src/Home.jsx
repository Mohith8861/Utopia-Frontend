import { Link } from "react-router-dom";

export default function Home() {
  let popular = [["andaman", "shimla", "kashmir"], []];
  return (
    <>
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoors</span>
            <span className="heading-primary-sub">is where life happens</span>
          </h1>

          <a href="#section-tours" className="btn btn-white btn-animated">
            Discover our tours
          </a>
        </div>
      </header>

      <main>
        <section className="section-about">
          <div className="u-center-text">
            <h2 className="heading-secondary u-margin-bottom-big">
              Exciting tours for adventurous people
            </h2>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <h3 className="sub-heading u-margin-bottom-small">
                You are going to fall in love with nature
              </h3>
              <p className="paragraph">
                Indulge in the wonders of our meticulously crafted itineraries,
                where every destination is chosen to offer a glimpse into a
                utopian paradise. Whether you are captivated by the serenity of
                pristine beaches, enchanted by the rich history of ancient
                civilizations, or seeking the thrill of outdoor adventures,
                Utopia Travel ensures that your journey is a harmonious blend of
                comfort, cultural immersion, and pure joy.
              </p>

              <h3 className="sub-heading u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Embark on a journey of utopian bliss with our extraordinary
                tours at Utopia Travel! At Utopia, we believe that travel should
                transcend the ordinary, transporting you to a realm of
                unparalleled joy and fulfillment. Our name, derived from the
                concept of utopia, reflects our commitment to providing you with
                travel experiences that are nothing short of perfect.
              </p>

              <a href="#section-tours" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src="img/2d51e912cf0f7e4d0b796d28d26ae662.jpg"
                  alt="Photo 1"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src="img/jaanus-jagomagi-FFUPFHcp2YU-unsplash.jpg"
                  alt="Photo 2"
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src="img/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"
                  alt="Photo 3"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-tours" id="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Most popular destinations</h2>
          </div>

          {popular.map((e) => {
            if (e.length > 0) {
              return (
                <div className="row" key={e}>
                  {e.map((x, i) => {
                    if (e.length > 0) {
                      return (
                        <div className="col-1-of-3" key={x}>
                          <div className="homecard">
                            <div className="homecard__side homecard__side--front">
                              <div
                                className={
                                  "homecard__picture homecard__picture--" +
                                  (i + 1)
                                }>
                                &nbsp;
                              </div>
                              <h4 className="homecard__heading">
                                <span
                                  className={
                                    "homecard__heading-span homecard__heading-span--" +
                                    (i + 1)
                                  }>
                                  {x}
                                </span>
                              </h4>
                              <div className="homecard__details">
                                Find the best tours within
                              </div>
                            </div>
                            <div
                              className={
                                "homecard__side homecard__side--back homecard__side--back-" +
                                (i + 1)
                              }>
                              <div className="homecard__cta">
                                <div className="homecard__price-box">
                                  <p className="homecard__price-only">Only</p>
                                  <p className="homecard__price-value">
                                    At Affordable price
                                  </p>
                                </div>
                                <Link
                                  to={"/tours/" + x}
                                  className="btn btn-white">
                                  Book now!
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              );
            }
          })}

          <div className="u-center-text u-margin-bottom-big">
            <a href="#" className="btn btn--blue">
              Discover all tours
            </a>
          </div>
        </section>
        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start booking now</h2>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full name"
                      id="name"
                      required
                    />
                    <label htmlFor="name" className="form__label">
                      Full name
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email address"
                      id="email"
                      required
                    />
                    <label htmlFor="email" className="form__label">
                      Email address
                    </label>
                  </div>

                  <div className="form__group u-margin-bottom-medium">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Small tour group
                      </label>
                    </div>

                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label htmlFor="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Large tour group
                      </label>
                    </div>
                  </div>

                  <div className="form__group">
                    <button className="btn btn--blue">Next step &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
