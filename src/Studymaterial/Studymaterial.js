import React from "react";
import Sidebar from "../Sidebar";

function Studymaterial() {
    return (
        <div className="studymaterial">
            <Sidebar />
            <h1>Study Material </h1>
            <div id="classtt">
            <div id="classttsideBox">
                
                    <a href="/studymaterial/cse4">
                    <div className="course">
                        <p>
                            CSE (SEM 4)
                            </p>
                    </div>
                </a>
                    <a href="/studymaterial/ece4" >
                    <div className="course">
                        <p>ECE (SEM 4)</p>
                    </div>
                </a>
                    <a href="/studymaterial/mech4">
                    <div className="course">
                        <p>MECH (SEM 4)</p>
                    </div>
                </a>
                    <a href="/studymaterial/eee4">
                    <div className="course">
                        <p>EEE (SEM 4)</p>
                    </div>
                </a>
                    <a href="/studymaterial/ai2">
                    <div className="course">
                        <p>CSE-AI (SEM 2)</p>
                    </div>
                </a>
                <a href="/studymaterial/cys2">
                    <div className="course">
                        <p>CSE-CYS (SEM 2)</p>
                    </div>
                </a>
                
                    <a href="/studymaterial/cse2">
                    <div className="course">
                        <p>CSE (SEM 2)</p>
                    </div>
                </a>
                    <a href="/studymaterial/ece2">
                    <div className="course">
                        <p>ECE (SEM 2)</p>
                    </div>
                </a>
                    <a href="/studymaterial/mech2">
                    <div className="course">
                        <p> MECH (SEM 2)</p>
                    </div>
                </a>
                </div>
            </div>
            </div>


            
    );
}
export default Studymaterial;