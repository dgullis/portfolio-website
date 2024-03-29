import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";


export const Footer = () => {
    return (
        <footer>
            <Container fluid className="d-flex justify-content-center" style ={{height: '40px'}}>
            
                    <a href='https://www.github.com/dgullis' style={{marginRight: "20px", marginLeft: "20px"}}>
                        <FontAwesomeIcon 
                            icon={faSquareGithub} 
                            style={{
                                color: 'white',
                                width: 'min(20px, 7vw)',  
                                height: 'min(20px, 7vw)', 
                        }}/>
                    </a>
      
        
                    <a href='https://www.linkedin.com/in/dan-gullis-b91b632b9/' style={{marginRight: "20px"}}>
                        <FontAwesomeIcon 
                        icon={faLinkedin} 
                        
                        style={{
                            color: 'white',
                            width: 'min(20px, 7vw)',  
                            height: 'min(20px, 7vw)', 
                        }}/>
                        
                    </a>
                
                 
     

            
        
                    <a href="mailto:daniel.gullis1@gmail.com">
                    <FontAwesomeIcon 
                        icon={faSquareEnvelope} 
                        
                        style={{
                            color: 'white',
                            width: 'min(20px, 7vw)',  
                            height: 'min(20px, 7vw)', 
                        }}/>
                    </a>
      
  
       
            </Container>

        </footer>
    )
}