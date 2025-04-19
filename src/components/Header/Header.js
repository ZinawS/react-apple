import logo from "./images/logo.svg";
import header from "../../Asset/headerData";

function Header() {
  return (
    <div className="nav-wrapper fixed-top Maki Update">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
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
              {header.map(({ href, label, img}) => (
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href={href}>
                    {(img) ?( <img src={img.src} alt={img.alt} />) : (label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
