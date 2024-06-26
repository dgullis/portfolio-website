import './Experience.css'
export const Experience = () => {

    return (
        <div className='experience-content' style={{fontFamily: 'Armitage', color: 'white', fontSize: 'calc(14px + 0.5vw)', fontWeight:'100'}}>
        <div className='d-flex justify-content-center pb-4'>
        <strong style={{fontSize: 'calc(20px + 2vw)', letterSpacing: '4px'}}>EXPERIENCE</strong>
            </div>
        <span style={{ paddingBottom: '10px', display: 'block' }}>
            <strong style= {{fontSize: 'calc(11px + 2vw)'}}>
            Junior Software Developer 
            </strong>
        </span>
        <span style={{ paddingBottom: '5px', display: 'block' }}>
        Makers Academy software development bootcamp | 10/2023 to 03/2024
        </span>
        <ul style={{paddingBottom: '40px'}}>
            <li>
                Developed proficiency in Python and Javascript, applying these skills to build full stack web applications
            </li>
            <li>
                Acquired knowledge and expertise in software engineering practises including, Test-Driven-Development, Object-Oriented
                Design, debugging and pair programming.
            </li>
            <li>
                Engaged in multiple team-based projects, implementing Agile methodologies and ensuring seamless collaboration through
                effective version control using Git.
            </li>
            <li>
                Participated in emotional intelligence workshops, enhancing self awareness and improving communication, adaptability and
                resilience.
            </li>
        </ul>

        <span style={{ paddingBottom: '10px', display: 'block' }}>
            <strong style= {{fontSize: 'calc(11px + 2vw)'}}>
            EMT, Paramedic, Paramedic Practitioner 
            </strong>
        </span>
        <span style={{ paddingBottom: '5px', display: 'block' }}>
            NHS | 2015 to 2023
        </span>
        <span style={{ paddingBottom: '5px', display: 'block' }}>
            In these roles I have developed high level transferable skills including
        </span>
            <ul className="primary-list" style={{paddingBottom: '40px'}}>
                <li>
                    Making critical decisions under pressure.
                </li>

                <li>
                    Solving complex problems efficiently.
                </li>
                <li>
                    Communicating effectively with diverse teams and individuals.
                </li>
                <li>
                    Working in high-stakes environments has strengthened my teamwork skills and resilience, 
                    ensuring that I thrive in dynamic and challenging situations and I am excited to apply these valuable skills to my role as a 
                    junior software engineer.
                </li>
            </ul>
        </div>
    )
}