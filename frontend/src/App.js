import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./components/Navigation/navigation"
import Footer from './components/Navigation/footer';
import Home from './components/home';
import About from './components/about';
import Packages from './components/packages';
import Contact from './components/contact';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Router>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;