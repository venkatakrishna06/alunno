import React from "react";
import "./studymaterial.css";

function cse4() {
  return (
    <div className="cse4">
      <div id="sm">
        <table id="smtable">
          <thead>
            <tr>
              <th>Subject</th>
              <th colSpan="2">Book Name</th>
              <th>To Get Book</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TOC </td>
              <td colSpan="2">
                An introduction to formal <p>languages and automata</p>
              </td>
              <td>
                <a href="https://3lib.net/book/540092/765249" target="-">
                  click here
                </a>
              </td>
            </tr>
            <tr>
              <td>OS</td>
              <td colSpan="2">Operating system concepts</td>
              <td>
                <a href="https://3lib.net/book/811106/493736" target="-">
                  click here
                </a>
              </td>
            </tr>
            <tr>
              <td>DSA</td>
              <td colSpan="2">
                Data structures and<p> algorithms in Python</p>
              </td>
              <td>
                <a href="https://3lib.net/book/2290976/d1e507" target="-">
                  click here
                </a>
              </td>
            </tr>
            <tr>
              <td>COA</td>
              <td colSpan="2"> Computer Organisation and Design</td>
              <td>--</td>
            </tr>
            <tr>
              <td>MAT</td>
              <td colSpan="2">
                Probability, Random Variables <p>and Stochastic Processes</p>
              </td>
              <td>
                <a href="https://3lib.net/book/557700/30c76f" target="-">
                  click here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default cse4;
