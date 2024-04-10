import { Container, Row} from "react-bootstrap"

export const TitleSection = () => {

    return (
        <Container fluid >
            <Row className="justify-content-center">
            <Row className="justify-content-center" style={{ fontFamily: 'Armitage', fontSize: 'calc(40px + 3vw)', letterSpacing: '4px', color: 'white', fontWeight: '100', textAlign: 'center', textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.3)', marginBottom: '20px' }}>
                DAN GULLIS
            </Row>
            <Row className="justify-content-center" style={{ fontFamily: 'Armitage', fontSize: 'calc(20px + 2vw)', letterSpacing: '4px', color: 'white', fontWeight: '100', textAlign: 'center', textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.3)' }}>
                SOFTWARE ENGINEER
            </Row>
            </Row>
        </Container>
    )

}
// $marian-blue: #164194ff;
// $canary: #FFE800ff;
// $pigment-green: #08A647ff;
// $chili-red: #E63020ff;
// $picton-blue: #00AEEAff;