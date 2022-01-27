import React from "react";
import {useNavigate} from 'react-router-dom'

function Profile(){
    let navigate = useNavigate();
    return <div>
        THIS IS  Event PAGE<button onClick={() => {navigate("/about"); }}>view</button>
        </div>
}

export default Profile;