import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import Contact from './Pages/Contact';
import Header from './Components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      < Route path="/" element={<Home />}/>
      < Route path="/about" element={<About />}/>
      < Route path="/experience" element={<Experience />}/>
      < Route path="/education" element={<Education />}/>
      < Route path="/contact" element={<Contact />}/>
    </Routes>
    </BrowserRouter>
  )
}
