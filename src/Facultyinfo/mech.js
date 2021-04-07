import React from "react";
import "./Facultyinfo.css";
import "./cse.css";

function mech({mechpics, mechrole, mechname, mechqualification, mechemail, mechcontact }) {
    return (
        <div className="cse">
            <div id="cseContainer">
                <div id="factImg">
                    <img src={mechpics}  />
                </div>
                <div id="cseContent">
                    <div>
                        <h3>{mechname}</h3>
                        <p>{mechrole}</p>
                        <p>{mechqualification}</p>
                    </div>
                </div>
                <div id="cseDetails">
                    <div className="email">
                        <p className="cseec">{mechemail}</p>
                    </div>
                    <div className="email">
                        <p className="cseec">{mechcontact}</p>
                    </div>
                </div>
            </div>
            <br></br>
        </div>

    );
}
export default mech;
