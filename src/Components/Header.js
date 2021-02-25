import React from "react";
import Typed from "react-typed";
const Header = () => {
    return(
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Software Developer</h1>
                <Typed
                className="typed-text"
                strings={["Android","REST-API","AWS","Java","C# .Net","JavaScript","React","HTML/CSS","SQL","Git"]}
                typeSpeed={40}
                backSpeed={60}
                loop />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>

        </div>

    )
}

export default Header;