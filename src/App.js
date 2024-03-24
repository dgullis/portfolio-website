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

    <Container fluid className="p-1 m-1 rounded-2" style={{maxWidth: '800px'}} >
      <Row className="justify-content-center">
      <Row className="mb-3 justify-content-center">
          <a className="header-link" href='/'>
            <Row className="justify-content-center " style={{fontFamily: 'Hind, sans-serif', fontSize: 'calc(20px + 4vw)', letterSpacing: '2px', color: '#1b4965', fontWeight: '900',  textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.3)' }}>
            Dan Gullis
            </Row>
          </a>
          <Row className="justify-content-center mb-2"  style={{fontFamily: 'Hind, sans-serif', fontSize: 'calc(10px + 2.8vw)', letterSpacing: '2px', color: '#1b4965', fontWeight: '700', textAlign: 'center', textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.3)'}}>
          Junior Software Developer
          </Row>
          <Row className="justify-content-center">
          <Col>
            <a href='/'>
              <div className="logo-container d-flex justify-content-center" >
                  <img 
                    alt='home-logo' 
                    src='/home-icon2.svg' 
                    style={{
                      width: 'min(31px, 7vw)',  
                      height: 'min(31px, 7vw)', 
                    }}/>
              </div>
            </a>
            </Col>
            <Col>
            <a href='https://www.github.com/dgullis'>
              <div className="logo-container d-flex justify-content-center" >
                  <img 
                    alt='github-logo' 
                    src='/github-mark-white.png' 
                    style={{
                      width: 'min(30px, 7vw)',  
                      height: 'min(30px, 7vw)', 
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
                      width: 'min(30px, 7vw)',  
                      height: 'min(30px, 7vw)', 
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
                      width: 'min(40px, 9vw)',  
                      height: 'min(30px, 7vw)', 
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
          <Button onClick={closeInfo}className="bg-gradient rounded-1" style={{backgroundColor: '#1b4965', border: 'none', fontSize: '22px', fontWeight: '650', textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.3)'}}>
          Back
          </Button>
          </>

      )
      :
      (
          <>
          <Col className="d-flex flex-column justify-content-center p-2">
            <Row className='justify-content-center 'style={{minWidth: '300px'}}>
                <img 
                  alt='profile' 
                  src='profile-image3.jpg'
                  className='image-fluid profile-picture' 
                  style={{borderRadius: '10px'}}
                  />
            </Row>
          </Col>

          <Col className="d-flex flex-column justify-content-center pt-0 p-3" style={{paddingTop: '10px'}}>
            <Row>
          <Button onClick={() => openInfo("ABOUT")} className="bg-gradient p-sm-2 p-md-3 p-lg-3.5 mb-4 mt-4 rounded-1" style={{backgroundColor: '#648de5', border: 'none', fontSize: '22px', fontWeight: '650', textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.3)'}}>
            About Me
          </Button>
          </Row>
          <Row>
          <Button onClick={() => openInfo("PROJECTS")} className="bg-gradient p-sm-2 p-md-3 p-lg-3.5  mb-4 rounded-1" style={{backgroundColor: '#648de5', border: 'none', fontSize: '22px', fontWeight: '650',textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.3)'}}>
            Projects
          </Button>
          </Row>
          <Row>
          <Button onClick={() => openInfo("EXPERIENCE")} className="bg-gradient p-sm-2 p-md-3 p-lg-3.5  mb-4 rounded-1" style={{backgroundColor: '#648de5', border: 'none', fontSize: '22px', fontWeight: '650', textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.3)'}}>
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
