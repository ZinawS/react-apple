import logo from "./images/logo.svg";
import searchIcon from "./images/search-icon-sm.png";
import cart from "./images/cart-sm.png";
import "./js/HeaderAdded";

function Header() {
  return (
    <div className="nav-wrapper fixed-top Maki Update">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="https://www.apple.com/">
            <img src={logo} alt="apple logo" />
          </a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/mac/"
                >
                  Mac
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/iphone/"
                >
                  iPhone
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/ipad/"
                >
                  iPad
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/watch/"
                >
                  Watch
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/tv/"
                >
                  TV
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/music/"
                >
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/support/"
                >
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/us/search"
                >
                  <img src={searchIcon} alt="Search Icon" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/shop/bag"
                >
                  <img src={cart} alt="Shopping Cart" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
