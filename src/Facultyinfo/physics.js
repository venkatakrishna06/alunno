import React from "react";
import "./Facultyinfo.css";
import "./cse.css";

function physics({ physicsrole, physicsname, physicsqualification, physicsemail, physicscontact }) {
    return (
        <div className="cse">
            <div id="cseContainer">
                <div id="factImg">
                    <img src="#" alt="photo" />
                </div>
                <div id="cseContent">
                    <div>
                        <h3>{physicsname}</h3>
                        <p>{physicsrole}</p>
                        <p>{physicsqualification}</p>
                    </div>
                </div>
                <div id="cseDetails">
                    <div className="email">
                        <p className="cseec">{physicsemail}</p>
                    </div>
                    <div className="email">
                        <p className="cseec">{physicscontact}</p>
                    </div>
                </div>
            </div>
            <br></br>
        </div>

    );
}
export default physics;
