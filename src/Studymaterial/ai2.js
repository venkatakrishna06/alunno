import React from "react";
import "./studymaterial.css";

function ai2() {
  return (
    <div className="ai2">
      <div id="sm">
        <h2>AI SEM-2 TEXT BOOKS</h2>
        <table id="smtable">
          <thead>
            <tr>
              <th>Subject</th>
              <th colSpan="2">Book Name</th>
              <th> Book Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Maths </td>
              <td colSpan="2">
                Linear Algebra and <br></br> Learning from Data
              </td>
              <td>
                <a href="https://3lib.net/book/5599691/6906f5" target="-">
                  click here
                </a>
              </td>
            </tr>
            <tr>
              <td>Mechanics 2</td>
              <td colSpan="2">
                Vector Mechanics<br></br> for Engineers
              </td>
              <td>
                <a href="https://3lib.net/book/700652/2ea690" target="-">
                  click here
                </a>
              </td>
            </tr>
            <tr>
              <td>Measurements and Sensors </td>
              <td colSpan="2">--</td>
              <td>
                <a href="#" target="">
                  --
                </a>
              </td>
            </tr>
            <tr>
              <td>DSA</td>
              <td colSpan="2">
                Data Structures and <br></br>Algorithms
              </td>
              <td>
                <a href="https://3lib.net/book/963483/744069" target="-">
                  click here{" "}
                </a>
              </td>
            </tr>

            <tr>
              <td>Computing Systems-2</td>
              <td colSpan="2">
                Computer Architecture:<br></br> A Quantitative Approach
              </td>
              <td>
                <a href="https://3lib.net/book/461657/73b8eb" target="-">
                  click here
                </a>
              </td>
            </tr>
            <tr>
              <td>Introduction to Electronics</td>
              <td colSpan="2">Microelectronics</td>
              <td>
                <a href="https://3lib.net/book/5331049/fe702c" target="-">
                  click here
                </a>
              </td>
            </tr>
            <tr>
              <td>Biological Systems-2</td>
              <td colSpan="2">Finding hidden messages in DNA </td>
              <td>
                <a href="#" target="">
                  --
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ai2;
