import './App.css';
import './fonts/font.css'
import { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import { TitleSection } from './components/TitleSection';

function App() {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  
  const scrollIntoViewWithOffset = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      const topOffset = 40; // Adjust this value as needed
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, -topOffset); // Adjust the sign based on the desired scroll direction
    }
  };

  return (
    
    <div className="app-container d-flex justify-content-center align-items-center">
    <Container fluid>
      <div className="navbar">
      <NavigationBar/>
      </div>
      <div className="title-section" id="title-section">
      <TitleSection />
      </div>
      <div className="about-me-section" id="about-me-section" >
      <AboutMe />
      </div>
      <div className="projects-section" id="projects-section">
      <Projects />
      </div>
      <div className="experience-section" id="experience-section">
      <Experience />
      </div>
      <div className="footer">
      <Footer />
      </div>
    </Container>
    </div>
  );
}
  

export default App;
