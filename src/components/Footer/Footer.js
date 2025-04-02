import React from "react";
import flag from "./image/16.png";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../commonResource/CSS/styles.css'
import './js/FooterAdded'


function Footer() {

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="upper-text-container">
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
            promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
            in good condition. Additional trade‑in values require purchase of a
            new iPhone, subject to availability and limits. Must be at least 18.
            Apple or its trade-in partners reserve the right to refuse or limit
            any Trade In transaction for any reason. In‑store trade‑in requires
            presentation of a valid, government-issued photo ID (local law may
            require saving this information). Sales tax may be assessed on full
            value of new iPhone. Additional terms from Apple or Apple's trade-in
            partners may apply. Monthly pricing: Available to qualified
            customers and requires 0% APR, 24-month installment loan with
            Citizens One or Apple Card Monthly Installments and iPhone
            activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and
            shipping not included. Additional Apple Card Monthly Installments
            terms are in the
            <a
              href="https://www.apple.com/legal/applecard/monthly-installments/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Customer Agreement
            </a>
            . Additional iPhone Payments terms are
            <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
              here
            </a>
            .
          </p>
          <p>
            2. Subscription required.
            <br />
            <br />
            Magic Keyboard sold separately.
            <br />
            <br />
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other <a href="https://www.apple.com/promo/">terms </a> apply.
          </p>
        </div>
        <div className="footer-links-wrapper row">
          <div className="links-wrapper-1 col-sm-12 col-md">
            <h3>Shop and Learn</h3>
            <ul>
              <li>
                <a href="https://www.apple.com/mac/">Mac</a>
              </li>
              <li>
                <a href="https://www.apple.com/ipad/">iPad</a>
              </li>
              <li>
                <a href="https://www.apple.com/iphone/">iPhone</a>
              </li>
              <li>
                <a href="https://www.apple.com/watch/">Watch</a>
              </li>
              <li>
                <a href="https://www.apple.com/tv/">TV</a>
              </li>
              <li>
                <a href="https://www.apple.com/music/">Music</a>
              </li>
              <li>
                <a href="https://www.apple.com/airpods/">AirPods</a>
              </li>
              <li>
                <a href="https://www.apple.com/homepod/">HomePod</a>
              </li>
              <li>
                <a href="https://www.apple.com/ipod-touch/">iPod touch</a>
              </li>
              <li>
                <a href="https://www.apple.com/shop/accessories/all">
                  Accessories
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/shop/gift-cards">Gift Cards</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-2 col-sm-12 col-md">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="https://www.apple.com/apple-music/">Apple Music</a>
              </li>
              <li>
                <a href="https://www.apple.com/apple-news/">Apple News+</a>
              </li>
              <li>
                <a href="https://www.apple.com/apple-tv-plus/">Apple TV+</a>
              </li>
              <li>
                <a href="https://www.apple.com/apple-arcade/">Apple Arcade</a>
              </li>
              <li>
                <a href="https://www.apple.com/apple-card/">Apple Card</a>
              </li>
              <li>
                <a href="https://www.apple.com/icloud/">iCloud</a>
              </li>
            </ul>
            <h3>Account</h3>
            <ul>
              <li>
                <a href="https://appleid.apple.com/">Manage Your Apple ID</a>
              </li>
              <li>
                <a href="https://www.apple.com/shop/account">
                  Apple Store Account
                </a>
              </li>
              <li>
                <a href="https://www.icloud.com/">iCloud.com</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-3 col-sm-12 col-md">
            <h3>Apple Store</h3>
            <ul>
              <li>
                <a href="https://www.apple.com/retail/">Find a Store</a>
              </li>
              <li>
                <a href="https://www.apple.com/retail/geniusbar/">Genius Bar</a>
              </li>
              <li>
                <a href="https://www.apple.com/today/">Today at Apple</a>
              </li>
              <li>
                <a href="https://www.apple.com/today/camp/">Apple Camp</a>
              </li>
              <li>
                <a href="https://www.apple.com/fieldtrip/">Field Trip</a>
              </li>
              <li>
                <a href="https://www.apple.com/shop">Apple Store App</a>
              </li>
              <li>
                <a href="https://www.apple.com/shop/refurbished">
                  Refurbished and Clearance
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/shop/browse/financing">
                  Financing
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/shop/trade-in">Apple Trade In</a>
              </li>
              <li>
                <a href="https://www.apple.com/shop/order/list">Order Status</a>
              </li>
              <li>
                <a href="https://www.apple.com/shop/help">Shopping Help</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-4 col-sm-12 col-md">
            <h3>For Business</h3>
            <ul>
              <li>
                <a href="https://www.apple.com/business/">Apple and Business</a>
              </li>
              <li>
                <a href="https://www.apple.com/retail/business/">
                  Shop for Business
                </a>
              </li>
            </ul>
            <h3>For Education</h3>
            <ul>
              <li>
                <a href="https://www.apple.com/education/">
                  Apple and Education
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/education/k12/how-to-buy/">
                  Shop for College
                </a>
              </li>
            </ul>
            <h3>For Healthcare</h3>
            <ul>
              <li>
                <a href="https://www.apple.com/healthcare/">
                  Manage Your Apple ID
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/healthcare/apple-watch/">
                  Apple Store Account
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/healthcare/health-records/">
                  iCloud.com
                </a>
              </li>
            </ul>
            <h3>For Government</h3>
            <ul>
              <li>
                <a href="https://www.apple.com/r/store/government/">
                  Apple and Education
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/us-hed/shop">Shop for College</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-5 col-sm-12 col-md">
            <h3>Apple Values</h3>
            <ul>
              <li>
                <a href="https://www.apple.com/accessibility/">Accessibility</a>
              </li>
              <li>
                <a href="https://www.apple.com/environment/">Environment</a>
              </li>
              <li>
                <a href="https://www.apple.com/privacy/">Privacy</a>
              </li>
              <li>
                <a href="https://www.apple.com/supplier-responsibility/">
                  Supplier Responsibility
                </a>
              </li>
            </ul>
            <h3>About Apple</h3>
            <ul>
              <li>
                <a href="https://www.apple.com/newsroom/">Newsroom</a>
              </li>
              <li>
                <a href="https://www.apple.com/leadership/">Apple Leadership</a>
              </li>
              <li>
                <a href="https://www.apple.com/careers/us/">
                  Career Opportunities
                </a>
              </li>
              <li>
                <a href="https://investor.apple.com/">Investors</a>
              </li>
              <li>
                <a href="https://www.apple.com/events/">Events</a>
              </li>
              <li>
                <a href="https://www.apple.com/contact/">Contact Apple</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-apple-wrapper">
          More ways to shop:{" "}
          <a href="https://www.apple.com/retail/">Find an Apple Store</a> or
          <a href="https://locate.apple.com/">other retailer</a> near you. Or
          call 1-800-MY-APPLE.
        </div>
        <div className="copyright-wrapper row">
          <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
            Copyright &copy; 2020 Apple Inc. All rights reserved.
          </div>
          <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
            <ul>
              <li>
                <a href="https://www.apple.com/legal/privacy/">
                  Privacy Policy 
                </a><span className='Spacer'>|</span>
              </li>
              <li>
                <a href="https://www.apple.com/legal/internet-services/terms/site.html">
                  Terms of Use
                </a><span className='Spacer'>|</span>
              </li>
              <li>
                <a href="https://www.apple.com/shop/browse/open/salespolicies">
                  Sales and Refunds<span className='Spacer'>|</span>
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/legal/">Legal</a><span className='Spacer'>|</span>
              </li>
              <li>
                <a href="https://www.apple.com/sitemap/">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
            <div className="flag-wrapper">
              <img src={flag} alt="flag" />
            </div>
            <div className="footer-country-name">United States</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
