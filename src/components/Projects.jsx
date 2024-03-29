import './Projects.css'

export const Projects = () => {

    return (
        <div className='projects-content' style={{fontFamily: 'Armitage', color: 'white', fontSize: 'calc(14px + 0.5vw)', fontWeight:'100'}}>
        <div className='d-flex justify-content-center pb-4'>
            <strong style={{fontSize: 'calc(20px + 2vw)', letterSpacing: '4px'}}>PROJECTS</strong>
            </div>
        <span style={{ paddingBottom: '8px', display: 'block' }}>
            <strong style={{fontSize: 'calc(11px + 2vw)'}}>Tutor Match | </strong>
            <a href='https://tutormatch.dangullis.com' className="project-link">
                live site {'             '}     
            </a> 
            <a href=' https://github.com/dgullis/tutor-match' className="project-link" >
                github
            </a>   
        </span>
        <span style={{ paddingBottom: '8px', display: 'block' }}>
            Flask | React | MongoDB | Firebase | React Bootstrap | AWS (Amplify, EC2)
        </span>
        <span style={{ paddingBottom: '8px', display: 'block' }}>
            Two-week, small group project to design and build a product 
            from scratch that adhered to the self selected theme of “Tech for good”.
        </span>
        <span style={{ paddingBottom: '20px', display: 'block' }}>
            Try it out by logging in as emma@email.com / Password123!
        </span>
        <span style={{ paddingBottom: '8px', display: 'block' }}>
            <strong style={{fontSize: 'calc(11px + 2vw)'}}>Acebook |   </strong>
            <a href='https://acebook.dangullis.com' className="project-link">
                live site
            </a> 
            <a href=' https://github.com/dgullis/acebook' className="project-link">
                github
            </a> 
        </span>
        <span style={{ paddingBottom: '8px', display: 'block' }}>
            React | Node | Express |  MongoDB | Firebase | AWS (Amplify, EC2) 
        </span>
        <span style={{ paddingBottom: '8px', display: 'block' }}>
            Two-week, small group project, to create a facebook clone from a skeleton legacy codebase.
        </span>
        <span style={{ paddingBottom: '20px', display: 'block' }}>
            Try it out by logging in as alice@example.com / Passw0rd!A
        </span>

        <span style={{ paddingBottom: '8px', display: 'block' }}>
            <strong style={{fontSize: 'calc(11px + 2vw)'}}>Portfolio Website |   </strong>
            <a href='https://dangullis.com' className="project-link">
                live site
            </a> 
            <a href=' https://github.com/dgullis/acebook' className="project-link">
                github
            </a> 
        </span>
        <span style={{ paddingBottom: '8px', display: 'block' }}>
            React | Node | Bootstrap | AWS (Amplify)
        </span>
        <span style={{ paddingBottom: '20px', display: 'block' }}>
            Personal portfoilio website focussing on simplicity, accessibility and responsive design
        </span>
        </div>
        


    )
}