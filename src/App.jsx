import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import TeamMember from './pages/TeamMember';
import CaseStudy from './pages/CaseStudy';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            // <Route path="/blog" element={<ChatBot />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/team/:id" element={<TeamMember />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
          </Routes>
        </main>
        <ChatBot/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;