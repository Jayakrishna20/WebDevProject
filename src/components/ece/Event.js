import React from "react";
import {Link} from 'react-router-dom'
import underline from './images/header-img.png'
import img1 from './images/img1.jpg'


function Event(){
    return(
    <div>    
        <section className="event">
                <div className="heading">
                    <h1>ECE EVENT</h1>
                    <img src={underline} alt="-----------" />
                </div>
                <div className="box-container">
                    <div className="box">
                        <img src={img1} alt="Event name" />
                        <div className="info">
                            <h3>Event1</h3>
                            <p>DETAILS</p>
                            <Link to="./form">Register</Link>
                        </div>
                    </div>
                </div>
                <div className="box-container">
                    <div className="box">
                        <img src={img1} alt="Event name" />
                        <div className="info">
                            <h3>Event2</h3>
                            <p>DETAILS</p>
                            <Link to="./form">Register</Link>
                        </div>
                    </div>
                </div>
                <div className="box-container">
                    <div className="box">
                        <img src={img1} alt="Event name" />
                        <div className="info">
                            <h3>Event3</h3>
                            <p>DETAILS</p>
                            <Link to="./form">Register</Link>
                        </div>
                    </div>
                </div>
                <div className="box-container">
                    <div className="box">
                        <img src={img1} alt="Event name" />
                        <div className="info">
                            <h3>Event4</h3>
                            <p>DETAILS</p>
                            <Link to="./form">Register</Link>
                        </div>
                    </div>
                </div>
                <div className="box-container">
                    <div className="box">
                        <img src={img1} alt="Event name" />
                        <div className="info">
                            <h3>Event5</h3>
                            <p>DETAILS</p>
                            <Link to="./form">Register</Link>
                        </div>
                    </div>
                </div>
                <div className="box-container">
                    <div className="box">
                        <img src={img1} alt="Event name" />
                        <div className="info">
                            <h3>Event6</h3>
                            <p>DETAILS</p>
                            <Link to="./form">Register</Link>
                        </div>
                    </div>
                </div>
            </section>
    </div>
    )
}
export default Event;