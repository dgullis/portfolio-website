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
                    live site   
                </a> 
                <a href=' https://github.com/dgullis/tutor-match' className="project-link" >
                    github
                </a>   
            </span>
            <span style={{ paddingBottom: '8px', display: 'block' }}>
                Flask | React | MongoDB | Firebase | React Bootstrap | AWS (Amplify, EC2)
            </span>
            <ul className="primary-list" style={{ paddingBottom: '8px', display: 'block' }}>
                <li>
                    Web app that connects students with volounteer tutors.
                </li>
                <li>
                    Two-week, small group project to design and build a product 
                    from scratch that adhered to the self selected theme of “Tech for good”.
                </li>
                <li>
                    Users can securely sign up as volounteer or tutor. (Tutor accounts require admin aprooval before they are live).
                </li>
                <li>
                    Students can:
                    <ul className='sublist'>
                        <li>
                            Search for tutors via subject and grade. 
                        </li>
                        <li>
                            Request to book a tutoring session with a tutor.
                        </li>
                        <li>
                            Leave a star rating and text review for a tutor. 
                        </li>
                        <li>
                            See an interactive calendar displaying theire requested and booked sessions.
                        </li>
                    </ul>
                    <li>
                        Tutors can:
                    </li>
                    <ul>
                        <li>
                            Select subjects and grades you are available to tutor.
                        </li>
                        <li>
                            Add hour time slots they are available to tutor.
                        </li>
                        <li>
                            Accept or deny requests for tutoring sessions.
                        </li>
                        <li>
                            See interactive calendar showing your availability / bookings.
                        </li>
                    </ul>
                    <li>
                        All users can update their profile (image and bio).
                    </li>
                </li>          
            </ul>
        
            {/* <span style={{ paddingBottom: '8px', display: 'block' }}>
                Users can securely sign up as volounteer or tutor. Tutor accounts require admin aprooval before they are live. 
                Students can search for tutors via subject and grade. Request to book a tutoring session with a tutor. Leave a review for a tutor. See an interactive
            </span> */}
            <span style={{ paddingBottom: '40px', display: 'block' }}>
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
            <ul className="primary-list" style={{ paddingBottom: '8px', display: 'block' }}>
                <li>
                    Two-week, small group project, to create a facebook clone from a skeleton legacy codebase.
                </li>
                <li>
                    Users can:
                    <ul className='sublist'>
                        <li>
                            Securely login and signup.
                        </li>
                        <li>
                            Create new posts with text +/- an image.
                        </li>
                        <li>
                            Edit and delete own posts.
                        </li>
                        <li>
                            Like/unlike and comment on posts.
                        </li>
                        <li>
                            View all posts from users on a feed page.
                        </li>
                        <li>
                            Edit bio and profile picture.
                        </li>
                        <li>
                            Add other users as friends.
                        </li>
                        <li>
                            Receive notifications for new friends / comments / likes.
                        </li>
                    </ul>
                </li>
            </ul>

            <span style={{ paddingBottom: '40px', display: 'block' }}>
                Try it out by logging in as alice@example.com / Passw0rd!A
            </span>

            <span style={{ paddingBottom: '8px', display: 'block' }}>
                <strong style={{fontSize: 'calc(11px + 2vw)'}}>Portfolio Website |   </strong>
                <a href='https://dangullis.com' className="project-link">
                    live site
                </a> 
                <a href='https://github.com/dgullis/portfolio-website' className="project-link">
                    github
                </a> 
            </span>
            <span style={{ paddingBottom: '8px', display: 'block' }}>
                React | Node | Bootstrap | AWS (Amplify)
            </span>
            <span style={{ paddingBottom: '100px', display: 'block' }}>
                Personal portfoilio website focussing on simplicity, accessibility and responsive design.
            </span>
        </div>

        


    )
}