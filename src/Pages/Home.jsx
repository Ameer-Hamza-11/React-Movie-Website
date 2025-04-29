import { NavLink } from "react-router-dom";
import './Home.css';

export const Home = () => {
  return (
    <main>
      <section className="section-hero">
        <div className="container">
          <div className="section-hero--content">
            <p className="hero-subheading">
              Explore the Latest in Movie Industries
            </p>
            <h1 className="hero-heading">
              Unlimited Movies, TV Shows, & More.
            </h1>
            <p className="hero-para">
              Discover the Top Best Movies and Dramas with a catchy subtitle
              like Your Ultimate Guide to Must-Watch Content.
            </p>
            <div className="hero-btn">
              <NavLink to="/movie" className="btn">
                Explore Now
              </NavLink>
            </div>
          </div>
          <div className="section-hero-image">
            <img
              src="./images/movies.png"
              alt="movies poster"
              width="150"
              height="150"
            />
          </div>
        </div>
        <div className="custom-shape-divider-bottom-hero">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
              fill="#fff7f0"
            ></path>
          </svg>
        </div>
      </section>
    </main>
  );
};
