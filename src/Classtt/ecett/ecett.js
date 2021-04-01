import React from "react";


function ecett() {
    return (
      <div className="ecett">
        <div id="tt">
          <div id="bname">
            <span>BRANCH : ECE</span>
            <span>SEM : II</span>
          </div>
          <table id="Table">
            <thead>
              <tr>
                <th>Days/Period</th>
                <th>9.00AM-10.15AM</th>
                <th>10.30AM-11.15AM</th>

                <th>1.30PM-2.45PM</th>
                <th>3.00PM-4.15PM</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Monday</th>
                <td>
                  19ECE213<p></p>
                </td>
                <td>
                  19MAT213<p></p>
                </td>

                <td colspan="2">
                  19ECE284 LAB<p></p>
                </td>
                
              </tr>
              <tr>
                <th>Tuesday</th>
                <td>19ECE211</td>
                <td>19ECE214</td>

                <td>19ECE212</td>
                <td></td>
           
              </tr>
              <tr>
                <th>Wednesday</th>

                <td colspan="2">19SSk211LAB</td>

                <td>19ECE214</td>
                <td>19AVP211</td>
               
              </tr>
              <tr>
                <th>Thursday</th>

                <td>
                  19ECE213 <p></p>
                </td>
                <td>
                  19ECE211 <p></p>
                </td>

                <td> 19MAT213</td>

                <td>19ECE214</td>
               
              </tr>
              <tr>
                <th>Friday</th>

                <td> 19ECE212</td>
                <td>
                  19LAW300<p></p>
                </td>

                <td>19ECE213</td>
                <td></td>
              
              </tr>
              <tr>
                <th>Saturday*</th>

                <td>
                  19ECE212<p></p>
                </td>
                <td>
                  19ECE211<p></p>
                </td>
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
export default ecett;