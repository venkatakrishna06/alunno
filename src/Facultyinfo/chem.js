import React from "react";
import "./Facultyinfo.css";
import "./cse.css";

function chem({ chemrole, chemname, chemqualification, chememail, chemcontact }) {
    return (
        <div className="cse">
            <div id="cseContainer">
                <div id="factImg">
                    <img src="#" alt="photo" />
                </div>
                <div id="cseContent">
                    <div>
                        <h3>{chemname}</h3>
                        <p>{chemrole}</p>
                        <p>{chemqualification}</p>
                    </div>
                </div>
                <div id="cseDetails">
                    <div className="email">
                        <p className="cseec">{chememail}</p>
                    </div>
                    <div className="email">
                        <p className="cseec">{chemcontact}</p>
                    </div>
                </div>
            </div>
            <br></br>
        </div>

    );
}
export default chem;
