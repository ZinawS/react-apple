import React from "react";
import '../../../commonResource/CSS/styles.css'
function Iphone() {
  return (
    <div>
      <section className="container-fluid horizontal-product iphone11-wrapper text-center">
        <div className="model h1 font-weight-bold pt-5">iPhone 11 </div>
        <div className="motto h5">Just the right amount of everything</div>
        <div className="price text-secondary my-1">
        From $16.62/mo. or $399 with trade-in.
        </div>
        <ul className="link-wrapper my-3 d-flex justify-content-center list-unstyled">
          <li className="btn btn-primary rounded-pill mx-4 px-3 py-2">
            <a
              className="text-white text-decoration-none"
              href="https://www.apple.com/iphone-16/"
            >
              Learn more
            </a>
          </li>
          <li className="buy btn border-primary rounded-pill px-3 py-2">
            <a
              className="text-decoration-none"
              href="https://www.apple.com/shop/buy-iphone/iphone-16"
            >
              Buy
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Iphone;
