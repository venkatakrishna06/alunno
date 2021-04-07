import React from "react";
import "./Facultyinfo.css";
import "./cse.css";

function maths({mathspics, mathsrole, mathsname, mathsqualification, mathsemail, mathscontact }) {
    return (
        <div className="cse">
            <div id="cseContainer">
                <div id="factImg">
                    <img src={mathspics}  />
                </div>
                <div id="cseContent">
                    <div>
                        <h3>{mathsname}</h3>
                        <p>{mathsrole}</p>
                        <p>{mathsqualification}</p>
                    </div>
                </div>
                <div id="cseDetails">
                    <div className="email">
                        <p className="cseec">{mathsemail}</p>
                    </div>
                    <div className="email">
                        <p className="cseec">{mathscontact}</p>
                    </div>
                </div>
            </div>
            <br></br>
        </div>

    );
}
export default maths;
