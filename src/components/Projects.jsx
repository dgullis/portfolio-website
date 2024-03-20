import './Projects.css'

export const Projects = () => {

    return (
        <div className='projects-content' style={{fontSize: '15px', fontWeight:'600'}}>
        <div className='d-flex justify-content-center pb-1'>
                <strong style={{fontSize: '18px'}}>Projects</strong>
            </div>
        <span style={{ paddingBottom: '8px', display: 'block' }}>
            <strong>Tutor Match |   </strong>
            <a href='https://tutormatch.dangullis.com'>
                tutormatch.dangullis.com | {'   '}     
            </a> 
            <a href=' https://github.com/dgullis/tutor-match'>
                github.com/dgullis/tutor-match
            </a>   
        </span>
        <span style={{ paddingBottom: '8px', display: 'block' }}>
            Flask | React | MongoDB | Firebase | React Bootstrap | AWS (Amplify, EC2)
        </span>
        <span style={{ paddingBottom: '20px', display: 'block' }}>
            Two-week, small group project to design and build a product 
            from scratch that adhered to the self selected theme of “Tech for good”.
        </span>
        <span style={{ paddingBottom: '8px', display: 'block' }}>
            <strong>Acebook |   </strong>
            <a href='https://acebook.dangullis.com'>
                acebook.dangullis.com |{'   '}
            </a> 
            <a href=' https://github.com/dgullis/acebook'>
                github.com/dgullis/acebook
            </a> 
        </span>
        <span style={{ paddingBottom: '8px', display: 'block' }}>
            React | Node | Express |  MongoDB | Firebase | AWS (Amplify, EC2) 
        </span>
        <span style={{ paddingBottom: '20px', display: 'block' }}>
            Two-week, small group project, to create a facebook clone from a skeleton legacy codebase.
        </span>
        <span style={{ paddingBottom: '8px', display: 'block' }}>
            <strong>Portfolio Website |   </strong>
            <a href='https://dangullis.com'>
                dangullis.com | {'   '}
            </a> 
            <a href=' https://github.com/dgullis/acebook'>
                github.com/dgullis/portfolio-website
            </a> 
        </span>
        <span style={{ paddingBottom: '8px', display: 'block' }}>
            React | Node | Bootstrap | AWS (Amplify)
        </span>
        <span style={{ paddingBottom: '20px', display: 'block' }}>
            Personal portfoilio website focussing on simplicity and accessibility
        </span>
        </div>
        


    )
}