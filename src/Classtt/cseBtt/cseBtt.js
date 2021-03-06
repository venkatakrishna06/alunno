import React from "react";


function cseBtt() {
    return (
      <div className="cseBtt">
        <div id="tt">
          <div id="bname">
            <span>BRANCH : CSE-B</span>
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
                  COA LAB<p></p>
                </td>
                <td>19ENG230 (3.45PM-5.00PM)</td>
              </tr>
              <tr>
                <th>Tuesday</th>
                <td colspan="2">19SSk211LAB</td>

                <td>
                  19MAT205<p></p>
                </td>
                <td>
                  19CSE214<p></p>
                </td>
                <td></td>
              </tr>
              <tr>
                <th>Wednesday</th>

                <td>
                  <a href="https://bit.ly/3wJ2uHw">COA</a><p>Karpagam M.</p>
                </td>
                <td>
                  19CSE212<p></p>
                </td>
                <td><a href="https://bit.ly/3d5oULB"> OS</a><p>Dr. A. Padmavathi</p></td>
                <td>19AVP211</td>
                <td></td>
              </tr>
              <tr>
                <th>Thursday</th>

                <td>
                  19CSE214 <p></p>
                </td>
                <td>
                  19CSE212 <p></p>
                </td>

                <td> OS LAB (1.30PM-3.30PM)</td>
                <td>19ENG230 (3.45PM-5.00PM)</td>
                <td></td>
              </tr>
              <tr>
                <th>Friday</th>

                <td id="elective"> Free Elective</td>
                <td>
                  19MAT205<p></p>
                </td>

                <td colspan="2">19CSE212 LAB (1.30PM-3.30PM)</td>
                <td>
                  19CSE214 (3.45PM-500PM)<p></p>
                </td>
              </tr>
              <tr>
                <th>Saturday*</th>

                <td>
                  19MNG300<p></p>
                </td>
                <td>
                  19MAT205<p></p>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div>
            <div id="note">
              <p id="yoga">Friday 5.30PM-6.30PM YOGA class.</p>

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
export default cseBtt;