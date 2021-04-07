import React from "react";
import "./Facultyinfo.css";


import "./cse.css";

function cse({ pics,role, name, qualification, email, contact }) {
  return (
    
    <div className="cse">
      
      <div id="infocontainer">
      <div id="cseContainer">
        <div id="factImg">
            <img src={ pics} />
        </div>
        <div id="cseContent">
          <div>
            <h3>{name}</h3>
            <p>{role}</p>
            <p>{qualification}</p>
          </div>
        </div>
        <div id="cseDetails">
          <div className="email">
            <p className="cseec">{email}</p>
          </div>
          <div className="email">
            <p className="cseec">{contact}</p>
          </div>
        </div>
          </div>
          <br></br>
      </div>
      </div>
    
  );
}
export default cse;
