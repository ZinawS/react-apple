import macbookImage from "./image/mac-laptop.jpg";


function Mackbook() {
  return (
    <section className="container-fluid macbookpro-wrapper horizontal-product text-center pt-5">
      <div className="size mt-4">16-inch model</div>
      <div className="model h1 font-weight-bold">MacBook Pro</div>
      <div className="motto h3">The best for the brightest.</div>
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
      <div className="image">
        <img src={macbookImage} alt="MacBook Pro" />
      </div>
    </section>
  );
}

export default Mackbook;
