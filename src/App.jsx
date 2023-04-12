import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";

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
      {/* contact */}
      </div>
      
      {/* footer */}
    </div>
  )
}

export default App
