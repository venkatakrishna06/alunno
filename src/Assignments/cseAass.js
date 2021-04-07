import React, { useState } from "react";

import "../Assignments/assignments.css";

function CseAass({ subject, assname, duedate, submit }) {
 
  return (
    <div className="CseAass">
      
        
      <div id="main">
      <div id="body">
        <div className="content" id="subject">
          <p>{subject}</p>
        </div>
        <div className="content" id="assname">
          <p>{assname}</p>
        </div>
        <div className="content" id="submit">
          <p>{submit}</p>
        </div>
        <div className="content" id="duedate">
          <p>{duedate}</p>
        </div>
      </div>
      </div>
      </div>
      
  );
}
export default CseAass;
