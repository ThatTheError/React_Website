import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Navbar from "./components/pages/Navbar";
import Sliders from "./components/inc/Sliders";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

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
    </Router>
    </div>
  );
}

export default App;
