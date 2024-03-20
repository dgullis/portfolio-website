import './App.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

function App() {
  const [showInfo, setShowInfo] = useState(false)
  const [infoContent, setShowInfoContent] = useState("")

  // useEffect(() => {
  //   const mainContainer = document.querySelector(".app-container");
  //   const contentHeight = mainContainer.scrollHeight;
  //   const viewportHeight = window.innerHeight;

  //   if (contentHeight > viewportHeight) {
  //     mainContainer.style.height = "100%";
  //   } else {
  //     mainContainer.style.height = "100%";
  //   }
  // }, [showInfo]);

  const openInfo = (content) => {
    setShowInfo(true)
    setShowInfoContent(content)
  }

  const closeInfo = () => {
    setShowInfo(false)
    setShowInfoContent("")
  }

  // #f5a65b
  return (
    <div className="app-container d-flex justify-content-center align-items-center">

    <Container fluid className="p-3 m-3 rounded-2" style={{maxWidth: '700px', overflowWrap: 'break-word'}}>
      <Row className="justify-content-center">
      <Row className="mb-3 justify-content-center">
          <Row className="justify-content-center" style={{fontFamily: 'Quicksand, sans-serif', fontSize: 'calc(20px + 3vw)', letterSpacing: '2px', color: 'white', fontWeight: '800'}}>
          Dan Gullis
          </Row>
          <Row className="justify-content-center mb-2"  style={{fontFamily: 'Quicksand, sans-serif', fontSize: 'calc(10px + 2vw)', letterSpacing: '2px', color: 'white', fontWeight: '600', textAlign: 'center'}}>
          Junior Software Developer
          </Row>
          <Row className="justify-content-center">
            <Col>
            <a href='https://www.github.com/dgullis'>
              <div className="logo-container d-flex justify-content-center" >
                  <img 
                    alt='github-logo' 
                    src='/github-mark-white.png' 
                    style={{
                      width: 'min(30px, 5vw)',  
                      height: 'min(30px, 5vw)', 
                    }}/>
              </div>
            </a>
            </Col>
            <Col>
            <a href='https://www.linkedin.com/in/dan-gullis-b91b632b9/'>
              <div className="logo-container d-flex justify-content-center">
                  <img 
                    alt='linekdin-logo' 
                    src='In-White-128@2x.png' 
                    style={{
                      width: 'min(30px, 5vw)',  
                      height: 'min(30px, 5vw)', 
                    }}/>
              </div>
            </a>
            </Col>
            <Col>
            <a href="mailto:daniel.gullis1@gmail.com">
              <div className="logo-container d-flex justify-content-center">
                  <img 
                    alt='email-logo' 
                    src='email-icon.png' 
                    style={{
                      width: 'min(40px, 7vw)',  
                      height: 'min(30px, 5vw)', 
                    }}/>
              </div>
            </a>
            </Col>
            </Row>
        
        </Row>

        <Row>
      {showInfo ? (
          <>
          {infoContent === 'ABOUT' && <AboutMe />}
          {infoContent === 'PROJECTS' && <Projects />}
          {infoContent === 'EXPERIENCE' && <Experience />}
          <Button onClick={closeInfo}className="bg-gradient rounded-1" style={{backgroundColor: '#f5a65b', border: 'none', fontSize: '20px'}}>
          Back
          </Button>
          </>

      )
      :
      (
          <>
          <Col className="d-flex flex-column justify-content-center p-2">
            <Row style={{minWidth: '300px'}}>
                <img 
                  alt='profile' 
                  src='profile-image3.jpg'
                  className='image-fluid profile-picture' 
                  />
            </Row>
          </Col>

          <Col className="d-flex flex-column justify-content-center p-3" >
            <Row>
          <Button onClick={() => openInfo("ABOUT")} className="bg-gradient p-sm-2 p-md-3 p-lg-3.5 mb-4 mt-4 rounded-1" style={{backgroundColor: '#f5a65b', border: 'none', fontSize: '20px'}}>
            About Me
          </Button>
          </Row>
          <Row>
          <Button onClick={() => openInfo("PROJECTS")} className="bg-gradient p-sm-2 p-md-3 p-lg-3.5  mb-4 rounded-1" style={{backgroundColor: '#f5a65b', border: 'none', fontSize: '20px'}}>
            Projects
          </Button>
          </Row>
          <Row>
          <Button onClick={() => openInfo("EXPERIENCE")} className="bg-gradient p-sm-2 p-md-3 p-lg-3.5  mb-4 rounded-1" style={{backgroundColor: '#f5a65b', border: 'none', fontSize: '20px'}}>
            Experience
          </Button>
          </Row>      
          </Col>
          
        
        </>

      )}
      </Row>
        
      </Row>
    </Container>
    </div>
  );
}

export default App;
