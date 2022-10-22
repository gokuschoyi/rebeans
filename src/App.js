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
      <Navbar />
      <MainBody />
      <div className='content'>
        <LandingSection />
        <Products />
        <NewsLetter />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
