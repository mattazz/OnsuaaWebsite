import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Bylaws from './components/Bylaws'
import Officers from './components/Officers';
import Donate from './components/Donate';
import Events from './components/Events';

// I'll use this to route all the components
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/bylaws" element={<Bylaws />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
