
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { Link } from 'react-scroll'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavigationBar.css'

export const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleLinkClick = () => {
        setExpanded(false);
    };

    
    return (    
        <Navbar expand="lg" className="navigation-bar" expanded={expanded}>
            <Container>
                <Navbar.Brand style={{ fontFamily: 'Armitage', color: 'white' }}>
                <li className="nav-item-title">
                    <Link 
                        activeClass="active" 
                        to="title-section" 
                        spy={true} 
                        smooth={true}
                        offset={-60} 
                        duration={100} 
                        className="nav-link-custom"
                        onClick={handleLinkClick}>
                            DAN GULLIS
                    </Link>
                </li>
                    
                    
                    
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    className="custom-toggle" 
                    onClick={() => setExpanded(!expanded)}>
                    <FontAwesomeIcon icon={faBars}/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto" style={{fontSize: '1.25rem'}}>
                        <li className="nav-item">
                            <Link 
                                activeClass="active" 
                                to="about-me-section" 
                                spy={true} 
                                smooth={true}
                                offset={-60} 
                                duration={100} 
                                className="nav-link-custom"
                                onClick={handleLinkClick}>about me</Link>
                        </li>
                        <li className="nav-item" style={{ marginLeft: expanded ? '' : '20px' }}>
                            <Link to="projects-section" 
                                spy={true} 
                                smooth={true}
                                offset={-60} 
                                duration={100} 
                                className="nav-link-custom"
                                onClick={handleLinkClick}>projects</Link>
                        </li>
                        <li className="nav-item" style={{ marginLeft: expanded ? '' : '20px' }}>
                            <Link to="experience-section" 
                                spy={true} 
                                smooth={true}
                                offset={-60} 
                                duration={100} 
                                className="nav-link-custom"
                                onClick={handleLinkClick}>experience</Link>
                        </li>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}