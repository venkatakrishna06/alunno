import React from "react";
import "./studymaterial.css";

function cse2() {
  return (
    <div className="cse2">
      <div id="sm">
        <h2>CSE SEM-2 TEXT BOOKS</h2>
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
              <td>Discrete Maths</td>
              <td colSpan="2">
                Discrete Mathematics and its <br></br>Applications
              </td>
              <td>
                <a href="https://3lib.net/book/736288/761603" target="-">
                  click here
                </a>
              </td>
            </tr>
            <tr>
              <td>Linear Algebra</td>
              <td colSpan="2">Elementary Linear Algebra</td>
              <td>
                <a href="https://3lib.net/book/714855/76b7b7" target="-">
                  click here
                </a>
              </td>
            </tr>
            <tr>
              <td>Engineering Physics-A</td>
              <td colSpan="2">--</td>
              <td>
                <a href="#" target="">
                  --
                </a>
              </td>
            </tr>
            <tr>
              <td>EEE</td>
              <td colSpan="2">
                {" "}
                Basic Electrical and<br></br> Electronics Engineering
              </td>
              <td>
                <a href="https://3lib.net/book/5439892/891c4e" target="-">
                  click here{" "}
                </a>
              </td>
            </tr>

            <tr>
              <td>Computer Programming</td>
              <td colSpan="2">
                Computer Science: A structured<br></br> programming approach
                using C.
              </td>
              <td>
                <a href="#" target="">
                  --
                </a>
              </td>
            </tr>
            <tr>
              <td>UID</td>
              <td colSpan="2">
                Html5 Black Book
              </td>
              <td>
                <a href="#" target="">
                --
                </a>
              </td>
            </tr>
            <tr>
              <td>Data Structures</td>
              <td colSpan="2">
                Data structures and algorithms in Python
              </td>
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
export default cse2;
