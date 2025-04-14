import Header from "./components/Header/Header";
import Mackbook from "./components/Body/Macbook/Mackbook";
import IphonePro from "./components/Body/IphonePro/IphonePro";
import Iphone from "./components/Body/Iphone/Iphone";
import WatchCard from "./components/Body/WatchCard/WatchCard";
import TvAirpod from "./components/Body/TVAirpod/TvAirpod";
import MacBookIpad from "./components/Body/MacBookIpad/MacBookIpad";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./commonResource/css/styles.css"

function App() {
  return (
    <>
      <Header />
      <Mackbook />
      <IphonePro />
      <Iphone />
      <WatchCard />
      <TvAirpod />
      <MacBookIpad />
      <Footer />
    </>
  );
}

export default App;
