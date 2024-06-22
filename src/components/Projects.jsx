import './Projects.css'
import {Carousel} from './Carousel'
import carouselData from '../data/carouselData.json'


export const Projects = () => {
    const {slides} = carouselData

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
                Tech stack: Flask | React | MongoDB | Firebase | React Bootstrap | AWS (Amplify, EC2)
            </span>
            <ul className="primary-list" style={{ paddingBottom: '8px', display: 'block' }}>
                <li>
                    Description: Web application to match students with volunteer tutors. This started as a two week-small group project to design and build an application that adhered to the self selected category "Tech for good"
                </li>
                <li>
                    Skills demonstrated: Dynamic, engaging UI. RESTful API development. Firebase integration for user authentication and image storage. MongoDB integration. Deployment to AWS. Jest and Pytest testing.
                </li>
                <li>
                    User interactions: 
                    <ul className='sublist'>
                    <li>
                        All users can securely sign up as volounteer or tutor and edit their bio and profile image. (Tutor accounts require admin aproval before they are live).
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
                </li>  
                    </ul>
                </li>
            </ul>
            <span style={{ paddingBottom: '10px', display: 'block' }}>
                Try it out by logging in as emma@email.com / Password123!
            </span>
            <span style ={{ paddingBottom: '10px', display: 'block' }}>
                Screenshots
            </span>
            <div className="screenshot-carousel">
                <Carousel 
                    data = { slides }
                />
            </div>
           

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
                Tech stack: React | Node | Express |  MongoDB | Firebase | AWS (Amplify, EC2) 
            </span>
            <ul className="primary-list" style={{ paddingBottom: '8px', display: 'block' }}>
                <li>
                    Description: Two-week, small group project, to create a facebook clone from a skeleton legacy codebase.
                </li>
                <li>
                    Skills demonstrated: Dynamic, friendly UI. RESTful API development. MongoDB integration. Jest testing. Deployment to AWS with CI/CD.
                </li>
                <li>
                    User interactions:
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
                Tech stack: React | Node | Bootstrap | AWS (Amplify)
            </span>
            <span style={{ paddingBottom: '100px', display: 'block' }}>
                Description: Personal portfoilio website focussing on simplicity, accessibility and responsive design.
            </span>
        </div>

        


    )
}