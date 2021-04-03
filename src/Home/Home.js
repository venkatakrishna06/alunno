import React from "react";
import "./home.css";
import Logo from "../Document/Logo.png";

function Home() {
  return (
    <div className="Home">
      <div id="homePage">
        <div className="navBar">
          <ul>
            <li>
              <a href="/">
                <img id="logo" src={Logo} alt="logo" />
              </a>
            </li>
            <li>
              <a href="/Classtt">Class TT</a>
            </li>
            <li>
              <a href="/Assignments">Assignments</a>
            </li>
            <li>
              <a href="/Studymaterial">Studymaterial</a>
            </li>
            <li>
              <a href="/Announcements">Announcements</a>
            </li>
          </ul>
        </div>
        
        <div id="imgBox">
          <a href="#">
            <img
              alt="campus pics"
              src="C:\Users\sride\Desktop\rentpi\images\head.png"
            ></img>
          </a>
        </div>
        <div id="ancmnt">
          <div id="sem4" className="ann">
            <div id="title">SEM4</div>
            <p>sem4</p>
            <p>sem4</p>

            <p>sem4</p>

            <p>sem4</p>
            <p>sem4</p>
            <p>sem4</p>
          </div>
          <div id="sem2" className="ann">
            <div id="title">SEM2</div>
            <p>sem2</p>
            <p>sem2</p>
            <p>sem2</p>
            <p>sem2</p>
            <p>sem2</p>
            <p>sem2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
