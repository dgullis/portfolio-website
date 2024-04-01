import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";


export const AboutMe = () => {
    
    return (
        <div id="about-me-content" className="about-me-content" style={{fontFamily: 'Armitage', color: 'white', fontSize: 'calc(14px + 0.5vw)', fontWeight:'100'}}>
            <div className='d-flex justify-content-center pb-4'>
                <strong style={{fontSize: 'calc(20px + 2vw)', letterSpacing: '4px'}}>ABOUT ME</strong>
            </div>
            <div className="about-me-links" style ={{marginBottom: '20px'}}>

            <a href='https://www.github.com/dgullis' style={{marginRight: "30px", marginLeft: "30px"}}>
                <FontAwesomeIcon 
                    icon={faSquareGithub} 
                    style={{
                        color: 'white',
                        width: 'min(25px, 7vw)',  
                        height: 'min(25px, 7vw)', 
                    }}
                />
            </a>
            <a href='https://www.linkedin.com/in/dan-gullis-b91b632b9/' style={{marginRight: "30px"}}>
                <FontAwesomeIcon 
                    icon={faLinkedin} 
                    style={{
                        color: 'white',
                        width: 'min(25px, 7vw)',  
                        height: 'min(25px, 7vw)', 
                    }}
                />   
            </a>
            <a href="mailto:daniel.gullis1@gmail.com" style={{marginRight: "30px"}}>
            <FontAwesomeIcon 
                icon={faSquareEnvelope} 
                style={{
                    color: 'white',
                    width: 'min(25px, 7vw)',  
                    height: 'min(25px, 7vw)', 
                }}
            />
            </a>
            </div>
            <ul >
                <li>
                    <span style={{ paddingBottom: '8px', display: 'block' }}>
                        Junior full-stack software developer and recent graduate of the Makers Academy bootcamp.
                    </span>
                </li>
                <li>
                    <span style={{ paddingBottom: '8px', display: 'block' }}>
                        Experience with Python, Flask, Javascript, React, Express, Node, SQL and non SQL databases, Pytest, Jest and always eager to learn more and explore new technologies. 
                    </span>
                </li>
                <li>
                    <span style={{ paddingBottom: '8px', display: 'block' }}>
                        Transitioning from a successful 7+ year career in healthcare, including roles as an EMT, Paramedic, and Paramedic Practitioner.
                    </span>
                </li>
                <li>
                    <span style={{ paddingBottom: '8px', display: 'block' }}>
                        Drawing from my healthcare background, I bring a passion for enhancing health and well-being into my software development journey.
                    </span>
                </li>
                <li>
                    <span style={{ paddingBottom: '8px', display: 'block' }}>
                        Committed to crafting mission-driven solutions that positively impact individuals and communities. 
                    </span>
                </li>
                <li>
                    <span style={{ paddingBottom: '16px', display: 'block' }}>
                        Passionate about continuous learning and self-improvement.
                    </span>
                </li>
            </ul>
        </div>
    )
}