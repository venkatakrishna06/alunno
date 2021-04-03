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
                <a href="/"><img src={Logo} alt="logo"/></a>
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
        </div>
      </div>
    );
}
export default Home;