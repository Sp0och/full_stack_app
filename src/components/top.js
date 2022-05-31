import React from "react";
import "../css/top.css"
// import Dji from '../media/dji.mp4'

function Header (){
    return(
        <>
        <div className="navbar">
            <div className='icon-container'><a className="icon" href="https.google.com"><i className="fa-solid fa-anchor"></i></a></div>
            <ul className="nav-list">
                <li className="nav-element"><a href='http.google.com' className="nav-link">Home</a></li>
                <li className="nav-element"><a href='http.google.com' className="nav-link">About</a></li>
                <li className="nav-element"><a href='http.google.com' className="nav-link">Github</a></li>
                <li className="nav-element"><a href='http.google.com' className="nav-link">Linkedin</a></li>
                <li className="nav-element"><a href='http.google.com' className="nav-link">My Website</a></li>
            </ul>
        </div>
        </>
    )
}

function Video (){
    return(
        <div className="video">
            <video className="video-player" autoPlay loop muted src={Dji} type="video/mp4"/>
        </div>
    )
}

function Image() {
    return(
        <div className="cover-image"/>
    )
}

function Headline () {
    return(
        <div className="headline">
            <h1 className="headline-h1">Dare to </h1><p className="headline-p">always</p>
            <h2 className="headline-h1">Dream big</h2><p className="headline-p">No matter what.</p>
        </div>
    )
}


export {Header, Video, Image, Headline};