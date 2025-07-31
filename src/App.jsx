import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollHandler from './components/ScrollHandler'
import Home from "./pages/Home";
import About from './pages/About';
import Program from './pages/Program';
import Admission from './pages/Admission';
import Testimonial from './pages/Testimonial';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/our-programs' element={
          <ScrollHandler>
            <Program/>
          </ScrollHandler>
        } />
        <Route path='/admissions' element={<Admission/>} />
        <Route path='/testimonials' element={<Testimonial/>}/>
        <Route path='/faqs' element={<Faq/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App
