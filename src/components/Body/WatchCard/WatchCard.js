
import WatchLogo from "./image/watch-series5-logo.png";
import CardLogo from "./image/apple-card-logo.png";


function WatchCard() {
  return (
      <section className="row watch-card-wrapper text-center mb-3 mx-md-3">
        <div className="watch-wrapper grid-product mb-3 col-md mr-md-3 mb-md-0">
          <div className="logo pt-5">
            <img src={WatchLogo} alt="Apple Watch Series 5" />
          </div>
          <div className="motto h5 py-2">
            With new Always-On Retina display. You've never seen a watch like
            this.
          </div>
          <ul className="link-wrapper py-2 d-flex justify-content-center list-unstyled">
            <li className="btn btn-primary rounded-pill mx-4 px-3 py-2">
              <a
                className="text-white text-decoration-none"
                href="https://www.apple.com/apple-watch-series-5/"
              >
                Learn more
              </a>
            </li>
            <li className="buy btn border-primary rounded-pill px-3 py-2">
              <a
                className="text-decoration-none"
                href="https://www.apple.com/shop/buy-watch/apple-watch"
              >
                Buy
              </a>
            </li>
          </ul>
        </div>
        <div className="card-wrapper grid-product col-md">
          <div className="logo pt-5">
            <img src={CardLogo} alt="Apple Card" />
          </div>
          <div className="motto py-3 h5">
            Get 3% Daily Cash on purchases from Apple using Apple Card
          </div>
          <ul className="link-wrapper my-3 d-flex justify-content-center list-unstyled">
            <li className="btn btn-primary rounded-pill mx-4 px-3 py-2">
              <a
                className="text-white text-decoration-none"
                href="https://www.apple.com/apple-card/"
              >
                Learn more
              </a>
            </li>
            <li className="buy btn border-primary rounded-pill px-3 py-2">
              <a
                className="text-decoration-none"
                href="https://card.apple.com/apply/start"
              >
                Apply now
              </a>
            </li>
          </ul>
        </div>
      </section>
  );
}

export default WatchCard;
