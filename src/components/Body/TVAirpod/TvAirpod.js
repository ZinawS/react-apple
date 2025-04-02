import React from "react";
import TvLogo from './images/apple-tv-logo.png'
import ServantLogo from './images/servant-logo.png'
import "../../../commonResource/CSS/styles.css";

function TvAirpod() {
  return (
    <section className="row tv-airpod-wrapper text-center mb-3 mx-md-3">
      <div className="tv-wrapper grid-product d-flex flex-column justify-content-between mb-3 col-md mr-md-3 mb-md-0">
        <div className="logo pt-5">
          <img src={TvLogo} alt="Apple TV+" />
        </div>
        <div className="motto">
          <img src={ServantLogo} alt="Servant on Apple TV+" />
        </div>
        <ul className="tv-link my-3 d-flex justify-content-center list-unstyled">
          <li className="btn btn-primary rounded-pill mx-4 px-3 py-2">
            <a
              className="text-white text-decoration-none"
              href="https://tv.apple.com/show/servant/umc.cmc.6wsi780sz5tdbqcf11k76mkp7"
            >
              Watch the trailer
            </a>
          </li>
        </ul>
      </div>
      <div className="airpods-wrapper grid-product col-md">
        <div className="model h1 font-weight-bold pt-5">AirPods Pro</div>
        <div className="motto h5 py-2">Magic like you've never heard.</div>
        <ul className="link-wrapper my-2 d-flex justify-content-center list-unstyled">
          <li className="btn btn-primary rounded-pill mx-4 px-3 py-2">
            <a
              className="text-white text-decoration-none"
              href="https://www.apple.com/airpods-pro/"
            >
              Learn more
            </a>
          </li>
          <li className="buy btn border-primary rounded-pill px-3 py-2">
            <a
              className="text-decoration-none"
              href="https://www.apple.com/shop/product/MQD83AM/A/airpods-pro-2nd-generation"
            >
              Buy
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TvAirpod;
