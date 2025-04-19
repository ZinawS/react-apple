import MacBookImage from "../components/Body/image/mac-laptop.jpg";
import TvLogo from "../components/Body/image/apple-tv-logo.png";
import ServantLogo from "../components/Body/image/servant-logo.png";
import WatchLogo from "../components/Body/image/watch-series5-logo.png";
import CardLogo from "../components/Body/image/apple-card-logo.png";
import IpadLogo from "../components/Body/image/new-ipad-logo.png";

const productsData = [
  {
    id: "macbook-pro",
    type: "single",
    wrapperClass: "macbookpro-wrapper horizontal-product",
    size: "16-inch model",
    model: "MacBook Pro",
    motto: "The best for the brightest.",
    mottoClass: "h3",
    image: MacBookImage,
    altText: "MacBook Pro",
    links: [
      {
        text: "Learn more",
        href: "#",
        className: "btn-primary",
        textClass: "text-white",
      },
      {
        text: "Buy",
        href: "#",
        className: "buy btn border-primary",
        textClass: "",
      },
    ],
  },
  {
    id: "iphone-11-pro",
    type: "single",
    wrapperClass: "horizontal-product iphone11pro-wrapper",
    model: "iPhone 11 Pro",
    motto: "Pro Camera. Pro display. Pro Performance",
    price: "From $24.95/mo. or $599 with trade-in.",
    links: [
      {
        text: "Learn more",
        href: "#",
        className: "btn-primary",
        textClass: "text-white",
      },
      {
        text: "Buy",
        href: "#",
        className: "buy btn border-primary",
        textClass: "",
      },
    ],
  },
  {
    id: "iphone-11",
    type: "single",
    wrapperClass: "horizontal-product iphone11-wrapper",
    additionalClasses: "mb-3",
    model: "iPhone 11",
    motto: "Just the right amount of everything",
    price: "From $16.62/mo. or $399 with trade-in.",
    links: [
      {
        text: "Learn more",
        href: "#",
        className: "btn-primary",
        textClass: "text-white",
      },
      {
        text: "Buy",
        href: "#",
        className: "buy btn border-primary",
        textClass: "",
      },
    ],
  },
  {
    id: "watch-card",
    type: "grid",
    wrapperClass: "watch-card-wrapper",
    products: [
      {
        id: "watch",
        wrapperClass: "watch-wrapper",
        logo: WatchLogo,
        altText: "Apple Watch Series 5",
        motto:
          "With new Always-On Retina display. You've never seen a watch like this.",
        linkWrapperClass: "py-2",
        links: [
          {
            text: "Learn more",
            href: "#",
            className: "btn-primary",
            textClass: "text-white",
          },
          {
            text: "Buy",
            href: "#",
            className: "buy btn border-primary",
            textClass: "",
          },
        ],
      },
      {
        id: "card",
        wrapperClass: "card-wrapper",
        logo: CardLogo,
        altText: "Apple Card",
        motto: "Get 3% Daily Cash on purchases from Apple using Apple Card",
        links: [
          {
            text: "Learn more",
            href: "#",
            className: "btn-primary",
            textClass: "text-white",
          },
          {
            text: "Buy",
            href: "#",
            className: "buy btn border-primary",
            textClass: "",
          },
        ],
      },
    ],
  },
  {
    id: "tv-airpods",
    type: "grid",
    wrapperClass: "tv-airpod-wrapper",
    products: [
      {
        id: "tv",
        wrapperClass: "tv-wrapper",
        additionalClasses: "d-flex flex-column justify-content-between",
        logo: TvLogo,
        altText: "Apple TV+",
        mottoLogo: ServantLogo,
        linkWrapperClass: "tv-link my-3",
        links: [
          {
            text: "watch the trailer",
            href: "#",
            className: "btn-primary",
            textClass: "text-white",
          },
        ],
      },
      {
        id: "airpods",
        wrapperClass: "airpods-wrapper",
        model: "AirPods Pro",
        motto: "Magic like you have never heard.",
        linkWrapperClass: "my-2",
        links: [
          {
            text: "Learn more",
            href: "#",
            className: "btn-primary",
            textClass: "text-white",
          },
          {
            text: "Buy",
            href: "#",
            className: "buy btn border-primary",
            textClass: "",
          },
        ],
      },
    ],
  },
  {
    id: "macbook-ipad",
    type: "grid",
    wrapperClass: "mcbookpro-ipad-wrapper",
    products: [
      {
        id: "macbookpro2",
        wrapperClass: "macbookpro2-wrapper",
        size: "16-inch model",
        model: "MacBook Pro",
        motto: "The best for the brightest.",
        links: [
          {
            text: "Learn more",
            href: "#",
            className: "btn-primary",
            textClass: "text-white",
          },
          {
            text: "Buy",
            href: "#",
            className: "buy btn border-primary",
            textClass: "",
          },
        ],
      },
      {
        id: "ipad",
        wrapperClass: "ipad-wrapper",
        logo: IpadLogo,
        altText: "iPad",
        motto: "Like a computer. Unlike any computer.",
        links: [
          {
            text: "Learn more",
            href: "#",
            className: "btn-primary",
            textClass: "text-white",
          },
          {
            text: "Buy",
            href: "#",
            className: "buy btn border-primary",
            textClass: "",
          },
        ],
      },
    ],
  },
];

export default productsData;