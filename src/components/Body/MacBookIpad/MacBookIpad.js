
import IpadLogo from './images/new-ipad-logo.png'


function MacBookIpad() {
  return (
    <section className="row mcbookpro-ipad-wrapper text-center mb-3 mx-md-3">
      <div className="macbookpro2-wrapper grid-product mb-3 col-md mr-md-3 mb-md-0 kura">
        <div className="size pt-5">16-inch model</div>
        <div className="model h1 font-weight-bold">MacBook Pro</div>
        <div className="motto h5">The best for the brightest.</div>
        <ul className="link-wrapper my-3 d-flex justify-content-center list-unstyled">
          <li className="btn btn-primary rounded-pill mx-4 px-3 py-2">
            <a
              className="text-white text-decoration-none"
              href="https://www.apple.com/macbook-pro-14-and-16/"
            >
              Learn more
            </a>
          </li>
          <li className="buy btn border-primary rounded-pill px-3 py-2">
            <a
              className="text-decoration-none"
              href="https://www.apple.com/shop/buy-mac/macbook-pro/16-inch"
            >
              Buy
            </a>
          </li>
        </ul>
      </div>
      <div className="ipad-wrapper grid-product col-md">
        <div className="logo pt-5">
          <img src={IpadLogo} alt="iPad Pro" />
        </div>
        <div className="motto h5 py-2">
          Like a computer. Unlike any computer.
        </div>
        <ul className="link-wrapper my-3 d-flex justify-content-center list-unstyled">
          <li className="btn btn-primary rounded-pill mx-4 px-3 py-2">
            <a
              className="text-white text-decoration-none"
              href="https://www.apple.com/ipad-pro/"
            >
              Learn more
            </a>
          </li>
          <li className="buy btn border-primary rounded-pill px-3 py-2">
            <a
              className="text-decoration-none"
              href="https://www.apple.com/shop/buy-ipad/ipad-pro"
            >
              Buy
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MacBookIpad;
