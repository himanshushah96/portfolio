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
                    <p>
                    As a software development student, I have learned and worked with different kind of technologies. Currently, looking for a fulltime opportunity as a software developer, with ability to work in Canada on full time basis for any employer.<br/> 
                    Programming Languages : Java, C# .Net, JavaScript, Angular, HTML/CSS, Node.Js
                    Database : Microsoft SQL Server, MySQL
                    FrameWork : REST API, MVC, React.
                    Tools : Android Studio, Visual Studio, Netbeans IDE, IntelliJ IDEA, Git
                    Software Development Methodologies: Agile Software Development, Object Oriented Programming   

                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;