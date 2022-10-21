import Navbar from './Components/navbar.component';
import LandingSection from './Components/landingSection.component';
import Products from './Components/products.component';
import NewsLetter from './Components/newsLetter.component';
import ContactUs from './Components/contactUs.component';
import Footer from './Components/footer.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingSection />
      <Products />
      <NewsLetter />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
