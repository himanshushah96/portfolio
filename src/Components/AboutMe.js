import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return(
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6  col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/>
                    </div>
                </div> 
                <div className="col-lg-6  col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p className="pabout">
                    A highly motivated individual with experience in C# .Net, Java, React, SQL and RESTful Web Services, seeking a challenging 
                    position in a dynamic firm. A problem solver who adds value to teams through logical thinking, analytical reasoning, 
                    effective communication and passion to learn new technologies.<br/> 
                    <b>Programming Languages : </b> C# .Net, Java, JavaScript, HTML/CSS, SQL<br/>
                    <b>Database : </b>Microsoft SQL Server, MySQL<br/>
                    <b>FrameWorks and Libraries :</b> REST API, MVC, React, NodeJS<br/>
                    <b>Tools </b>: AWS, Visual Studio, Android Studio, SQL Server Management Studio, IntelliJ IDEA, Git, Postman, Visual Studio Code <br/>
                    <b>Software Development Methodologies:</b> Agile Software Development, Object Oriented Programming  
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;