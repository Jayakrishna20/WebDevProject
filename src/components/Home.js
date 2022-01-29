import React from "react";
import {Link} from 'react-router-dom'
import general from './images/general.png';
import ece from './images/ece.png';
import eee from './images/eee.png';
import cse from './images/computer.png';


function Home(){
    return(
        <div>
            <div className="event">
                <p>Events</p>
            </div>
            <div className="section2">
                <div className="container">
                    <div className="card">
                        <div className="image">
                            <img src={general} alt="General" />
                        </div>
                        <div className="content">
                            <h4>General</h4>
                            <Link to="general/Event">View</Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={ece} alt="ECE" />
                        </div>
                        <div className="content">
                            <h4>ECE</h4>
                            <Link to="ece/Event">View</Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={eee} alt="EEE" />
                        </div>
                        <div className="content">
                            <h4>EEE</h4>
                            <Link to="eee/Event">View</Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={cse} alt="CSE" />
                        </div>
                        <div className="content">
                            <h4>CSE</h4>
                            <Link to="cse/Event">View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;