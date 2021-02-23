import React from "react"

const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
            <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Aug 2017-Mar 2018</h3>
                    <p>Software Developer Intern @ Webmyne Systems, India <br/>
                    Implemented the use of object oriented programming and performed multiple tasks to accomplish fluency in all the concepts.
                    Developed and learned implementation of android application which helps tracking and managing the insurance sales of a company. 
                    Learned and implemented the use of database. Performed and completed various tasks such as android design, database design 
                    and android development.
                    
                    </p>
                    </div>
                </div>
                {/* -*/}

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Jun 2018- Dec 2018</h3>
                    <p>Self-employed Software Developer , India <br/>
                    Collaborated with cross-functional team to define, design and deliver an e-commerce android application. Developed Rest-API for 
                    e-commerce project using ASP.Net web API and entity framework and deployed API on AWS. Integrated the developed Rest-API in 
                    android application using retrofit. Overcame with the use of git as a version control system and followed agile development 
                    methodologies.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Experience
