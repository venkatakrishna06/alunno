import React from "react";
import "./Facultyinfo.css";


import "./cse.css";

function cse({ cserole, csename, csequalification, cseemail, csecontact }) {
  return (
    <div className="cse">
      <div id="cseContainer">
        <div id="factImg">
          <img src="#" alt="photo" />
        </div>
        <div id="cseContent">
          <div>
            <h3>{csename}</h3>
            <p>{cserole}</p>
            <p>{csequalification}</p>
          </div>
        </div>
        <div id="cseDetails">
          <div className="email">
            <p className="cseec">{cseemail}</p>
          </div>
          <div className="email">
            <p className="cseec">{csecontact}</p>
          </div>
        </div>
          </div>
          <br></br>
    </div>
    
  );
}
export default cse;
