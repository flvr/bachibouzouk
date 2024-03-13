//import logo from './logo.svg';
//import './App.css';
import MenuHeader from './MenuHeader';
import LandingContainer from './LandingContainer';
import About from './About';
import EventsDates from './EventsDates';
import Members from './Members';
import ContactUs from './ContactUs';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <MenuHeader />
      <LandingContainer />
      <About />
      <EventsDates />
      <Members />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
