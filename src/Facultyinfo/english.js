import React from "react";
import "./Facultyinfo.css";
import "./cse.css";

function english({ englishrole, englishname, englishqualification, englishemail, englishcontact }) {
    return (
        <div className="cse">
            <div id="cseContainer">
                <div id="factImg">
                    <img src="#" alt="photo" />
                </div>
                <div id="cseContent">
                    <div>
                        <h3>{englishname}</h3>
                        <p>{englishrole}</p>
                        <p>{englishqualification}</p>
                    </div>
                </div>
                <div id="cseDetails">
                    <div className="email">
                        <p className="cseec">{englishemail}</p>
                    </div>
                    <div className="email">
                        <p className="cseec">{englishcontact}</p>
                    </div>
                </div>
            </div>
            <br></br>
        </div>

    );
}
export default english;
