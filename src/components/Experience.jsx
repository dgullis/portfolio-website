import './Experience.css'
import { ExperienceItem } from './ExperienceItem'



export const Experience = () => {
    const experienceList = [
        {
            role: "Full-stack Software Engineer",
            locationDate: "Unibuddy | 10/2024 to current",
            infoList: ["Python, Typescript, React, MongoDB, Snowflake, DBT"]
        },
        {
            role: "Junior Software Engineer",
            locationDate: "Makers Academy software development bootcamp | 10/2023 to 03/2024",
            infoList: ["Developed proficiency in Python and Javascript, applying these skills to build full stack web applications", "Acquired knowledge and expertise in software engineering practises including, Test-Driven-Development, Object-Oriented Design, debugging and pair programming.", "Engaged in multiple team-based projects, implementing Agile methodologies and ensuring seamless collaboration through effective version control using Git.", " Participated in emotional intelligence workshops, enhancing self awareness and improving communication, adaptability and resilience."]
        },
        {
            role: "EMT, Paramedic, Paramedic Practitioner",
            locationDate: "NHS | 2015 to 2023",
            infoList: ["Making critical decisions under pressure.", "Solving complex problems efficiently.", "Communicating effectively with diverse teams and individuals.", "Working in high-stakes environments has strengthened my teamwork skills and resilience, ensuring that I thrive in dynamic and challenging situations and I am excited to apply these valuable skills in my career as a software engineer."]
        }

    ]

    return (
        <div className='experience-content' style={{fontFamily: 'Armitage', color: 'white', fontSize: 'calc(14px + 0.5vw)', fontWeight:'100'}}>
        <div className='d-flex justify-content-center pb-4'>
        <strong style={{fontSize: 'calc(20px + 2vw)', letterSpacing: '4px'}}>EXPERIENCE</strong>
        </div>
            {experienceList.map(experienceItem => (
                <ExperienceItem role={experienceItem.role} locationDate={experienceItem.locationDate} infoList={experienceItem.infoList} />
            ))}
        
        </div>
    )
}