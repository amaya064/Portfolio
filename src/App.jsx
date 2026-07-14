import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Header from './Components/Header';

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/education" element={<Education />} />
     <Route path="/experience" element={<Experience />} />
     <Route path="/contact" element={<Contact />} />
  </Routes>
  </BrowserRouter>;
   
  
}
