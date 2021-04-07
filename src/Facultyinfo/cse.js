import React from "react";
import "./Facultyinfo.css";


import "./cse.css";

function cse({ csepics,cserole, csename, csequalification, cseemail, csecontact }) {
  return (
    
    <div className="cse">
      
      <div id="infocontainer">
      <div id="cseContainer">
        <div id="factImg">
            <img src={ csepics} />
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
      </div>
    
  );
}
export default cse;
