import React from "react";
import "./Facultyinfo.css";
import "./cse.css";

function cultural({ culturalrole, culturalname, culturalqualification, culturalemail, culturalcontact }) {
    return (
        <div className="cse">
            <div id="cseContainer">
                <div id="factImg">
                    <img src="#" alt="photo" />
                </div>
                <div id="cseContent">
                    <div>
                        <h3>{culturalname}</h3>
                        <p>{culturalrole}</p>
                        <p>{culturalqualification}</p>
                    </div>
                </div>
                <div id="cseDetails">
                    <div className="email">
                        <p className="cseec">{culturalemail}</p>
                    </div>
                    <div className="email">
                        <p className="cseec">{culturalcontact}</p>
                    </div>
                </div>
            </div>
            <br></br>
        </div>

    );
}
export default cultural;
