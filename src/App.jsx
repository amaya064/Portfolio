import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';

export default function App() {
  return <BrowserRouter>
  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/education" element={<Education />} />
     <Route path="/experience" element={<Experience />} />
     <Route path="/contact" element={<Contact />} />
  </Routes>
  </BrowserRouter>;
   
  
}
