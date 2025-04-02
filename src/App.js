import './App.css';
import Header from './components/Header/Header';
import Mackbook from './components/Body/Macbook/Mackbook';
import IphonePro from './components/Body/IphonePro/IphonePro';
import Iphone from './components/Body/Iphone/Iphone';
import WatchCard from './components/Body/WatchCard/WatchCard';
import TvAirpod from './components/Body/TVAirpod/TvAirpod';
import MacBookIpad from './components/Body/MacBookIpad/MacBookIpad';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <Header/>
      <Mackbook/>
      <IphonePro/>
      <Iphone/>
      <WatchCard/>
      <TvAirpod/>
      <MacBookIpad/>
      <Footer/>
    </div>
  );
}

export default App;
