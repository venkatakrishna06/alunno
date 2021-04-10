import React from "react";


function cseAtt() {
  return (
    <div className="cseAtt">
      <div id="tt">
        <div id="bname">
          <span>BRANCH : CSE-A</span>
          <span>SEM : IV</span>
        </div>
        <table id="Table">
          <thead>
            <tr>
              <th>Days/Period</th>
              <th>9.00AM-10.15AM</th>
              <th>10.30AM-11.15AM</th>
              <th>1.30PM-2.45PM</th>
              <th>3.00PM-4.15PM</th>
              <th>4.15PM-5.00PM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Monday</th>
              <td>
                <a href="https://bit.ly/3d5oULB"> OS</a><p>Dr. A. Padmavathi</p>
              </td>
              <td>
                <a href="https://bit.ly/3wJ2uHw">COA</a><p>Karpagam M.</p>
              </td>

              <td colspan="2">
                <a href="https://bit.ly/2PQwOQ2">OS LAB</a><p></p>
              </td>
              <td> <a href="">BC (3.45PM-5.00PM)</a>  </td>
            </tr>
            <tr>
              <th>Tuesday</th>
              <td colspan="2"><a href="">SOFT SKILLS</a></td>

              <td>
                <a href="">PROBABILITY</a><p>Mr.Tharasi Dilleswar Rao</p>
              </td>
              <td>
                <a href="">TOC</a><p>Dr. Sreedevi A. G.</p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th>Wednesday</th>

              <td>
                <a href="https://bit.ly/3wJ2uHw" target="-"> COA</a><p>Karpagam M.</p>
              </td>
              <td>
                <a href="">DSA</a><p>Dr. S. Sathya</p>
              </td>
              <td><a href="https://bit.ly/3d5oULB">OS</a><p>Dr. A. Padmavathi</p></td>
              <td colSpan="2">COA LAB </td>

            </tr>
            <tr>
              <th>Thursday</th>

              <td>
                <a href="">TOC</a><p>Dr. Sreedevi A. G.</p>
              </td>
              <td>
                <a href="">DSA</a><p>Dr. S. Sathya</p>
              </td>

              <td> <a href="">DSA LAB</a><p></p> (1.30PM-3.30PM)</td>
              <td colSpan="2"><a href="">BC</a> (3.45PM-5.00PM)</td>

            </tr>
            <tr>
              <th>Friday</th>

              <td id="elective"> Free Elective</td>
              <td>
                <a href="">PROBABILITY</a><p>Mr.Tharasi Dilleswar Rao</p>
              </td>

              <td><a href="">CULTURAL </a><p>Dr. Shreehari V. Gokarnakar</p></td>
              <td></td>
              <td>
                <a href="">TOC (3.45PM-500PM)</a><p>Dr. Sreedevi A. G.</p> 
              </td>
            </tr>
            <tr>
              <th>Saturday*</th>

              <td>
                <a href="">DISASTER MANAGMENT</a><p>S. Shriram</p>
              </td>
              <td>
                <a href="">PROBABILITY</a><p>Mr.Tharasi Dilleswar Rao</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div>
          <div id="note">
            <p id="yoga">Saturday 5.30PM-6.30PM YOGA class.</p>

            <p>
              *2nd and 4th Saturdays will be working day. 1st and 3rd
              Saturdays are holidays.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default cseAtt;