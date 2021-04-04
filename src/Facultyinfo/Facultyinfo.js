import React from "react";
import Sidebar from "../Sidebar";
import "./Facultyinfo.css";




function Facultyinfo() {
  return (
    
    <div >
      <Sidebar />
      <h1>Facultyinfo</h1>
    <div id="coursebox">
      
        <div id="sideBox">
          <a href="/cse">
            <div className="course">
              <p>
                Computer Science Engineering
              </p>
            </div>
          </a>
          <a href="/ece" apex>
            <div className="course">
              <p>ECE & EEE </p>
            </div>
          </a>
          <a href="/mech">
            <div className="course">
              <p>Mechanical Engineering</p>
            </div>
          </a>
          <a href="/maths">
            <div className="course">
              <p>Mathematics</p>
            </div>
          </a>
          <a href="/english">
            <div className="course">
              <p>English</p>
            </div>
          </a>
          <a href="/physics">
            <div className="course">
              <p>Physics</p>
            </div>
          </a>
          <a href="/chem">
            <div className="course">
              <p>Chemistry</p>
            </div>
          </a>
          <a href="/cultural">
            <div className="course">
              <p>Cultural</p>
            </div>
          </a>
          
        </div>
      </div>
    </div>
   
  );
}
export default Facultyinfo;
