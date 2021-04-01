import React from "react";
import "./Facultyinfo.css";




function Facultyinfo() {
  return (
    <div className="Facultyinfo">
      <div id="container">
        <div id="Img">
          <img src="#" alt="photo" />
        </div>
        <div id="content">
          <div>
            <h3> Dr. P. Shankar</h3>
            <p>Principal, School of Engineering,</p>
            <p>Qualification : Ph.D., Indian Institute of Science</p>
          </div>
        </div>
        <div id="details">
          <div className="email">
            <p className="ec">Email : p_shankar@ch.amrita.edu </p>
          </div>
          <div className="email">
            <p className="ec"> Mobile : 1234567890</p>
          </div>
        </div>
      </div>
      <br></br>

      <div id="coursebox">
        <div id="sideBox">
          <a href="/cse">
            <div className="course-cse">
              <p>
                Computer Science &<br></br>Engineering
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
