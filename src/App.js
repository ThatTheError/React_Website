import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Navbar from "./components/pages/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Footer from "./components/inc/Footer";

function App() {
  return (
    <div>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      {/* Footer Section */}
      <Footer />
    </Router>
    </div>
  );
}
  
export default App;
