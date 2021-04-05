import React from "react";
import "./Facultyinfo.css";
import "./cse.css";

function ece({ ecepics,ecerole, ecename, ecequalification, eceemail, ececontact }) {
    return (
        <div className="cse">
            <div id="cseContainer">
                <div id="factImg">
                    <img src={ ecepics} alt="photo" />
                </div>
                <div id="cseContent">
                    <div>
                        <h3>{ecename}</h3>
                        <p>{ecerole}</p>
                        <p>{ecequalification}</p>
                    </div>
                </div>
                <div id="cseDetails">
                    <div className="email">
                        <p className="cseec">{eceemail}</p>
                    </div>
                    <div className="email">
                        <p className="cseec">{ececontact}</p>
                    </div>
                </div>
            </div>
            <br></br>
        </div>

    );
}
export default ece;
