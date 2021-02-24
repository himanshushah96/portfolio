import React from "react";
import restromation from "../restromation.png";
import portfolio from "../portfolio.png";
//Font awesome import
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
//React popupbox
import {PopupboxManager,PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"; 

const Portfolio = () => {
    //Restromation
    const openPopupboxRestromation = () =>{
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={restromation} alt= "Restromation project ... "/>
        <p>Anrdoid application for easing the working of restaurants.</p>
        <b>Github:</b><a className="hyper-link" onClick={() => window.open("https://github.com/himanshushah96/Restromation")}>
        https://github.com/himanshushah96/Restromation</a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigRestromation = {
        titleBar:{
            enable:true,
            text:"Restaurant automation project."
        },
        fadeIn:true,
        fadeInSpeed:500

    }

    //Portfolio project
    const openPopupboxPortfolio = () =>{
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={portfolio} alt= "Portfolio project ... "/>
        <p>Portfolio project developed using React.</p>
        <b>Github:</b><a className="hyper-link" onClick={() => window.open("https://github.com/himanshushah96/portfolio")}>
        https://github.com/himanshushah96/portfolio</a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigPortfolio = {
        titleBar:{
            enable:true,
            text:"Portfolio project."
        },
        fadeIn:true,
        fadeInSpeed:500

    }


    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxRestromation}>
                    <img className="portfolio-image" src={restromation} alt="Restaurant Automation..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon= {faSearchPlus}/>
                    </div>
                
                {/*--*/}
                
                <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                    <img className="portfolio-image" src={portfolio} alt="Restaurant Automation..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon= {faSearchPlus}/>
                    </div>
                </div>
            </div>

            <PopupboxContainer {...popupboxConfigRestromation}/>
            <PopupboxContainer {...popupboxConfigPortfolio}/>
        </div>
    )
}

export default Portfolio
