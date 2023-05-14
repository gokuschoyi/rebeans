import Navbar from './Components/navbar.component';
import LandingSection from './Components/landingSection.component';
import Products from './Components/products.component';
import NewsLetter from './Components/newsLetter.component';
import ContactUs from './Components/contactUs.component';
import Footer from './Components/footer.component';
import MainBody from './Components/mainBody/mainBody.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainBody />
      <div className='content'>
        <Navbar />
        <LandingSection />
        <Products />
        <NewsLetter />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
