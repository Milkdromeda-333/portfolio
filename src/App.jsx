import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";



function App() {

  return (
    <div className="App">
      <header>
        <Navbar />
        <Hero />
      </header>
      <div className="body-container">
        <MySkills />
        <Portfolio/>
        <ContactForm />
      </div>
      
      <Footer />
      
    </div>
  )
}

export default App
