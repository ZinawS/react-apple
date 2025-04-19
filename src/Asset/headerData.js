import searchIcon from "../components/Header/images/search-icon-sm.png";
import cartIcon from "../components/Header/images/cart-sm.png";

const header = [
    { label: "Mac", href: "https://www.apple.com/mac/" },
    { label: "iPhone", href: "https://www.apple.com/iphone/" },
    { label: "iPad", href: "https://www.apple.com/ipad/" },
    { label: "Watch", href: "https://www.apple.com/watch/" },
    { label: "TV", href: "https://www.apple.com/tv/" },
    { label: "Music", href: "https://www.apple.com/music/" },
    { label: "Support", href: "https://www.apple.com/support/" },
    {
      label: "Search",
      href: "https://www.apple.com/us/search",
      img: { src: searchIcon, alt: "Search Icon" },
    },
    {
      label: "Cart",
      href: "https://www.apple.com/shop/bag",
      img: { src: cartIcon, alt: "Shopping Cart" },
    },
  ];
   export default header;