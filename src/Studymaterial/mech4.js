
import React from "react";
import "./studymaterial.css";

function mech4() {
    return (
        <div className="mech4">
            <div id="sm">
                <h2>MECH SEM-4 TEXT BOOKS</h2>
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
                            <td>Computational Methods</td>
                            <td colSpan="2">

                                Numerical Methods for Engineers
                            </td>
                            <td>
                                <a href="https://3lib.net/book/970961/cbc810" target="-">
                                    click here
                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Fluid Machanics</td>
                            <td colSpan="2">
                                Fluid Mechanics -<br></br>Fundamentals and Applications
                            </td>
                            <td>
                                <a href="https://3lib.net/book/1227669/81815a" target="-">
                                    click here
                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> Heat Power </td>
                            <td colSpan="2">
                                Thermodynamics: An Engineering Approach</td>
                            <td>
                                <a href="https://3lib.net/book/2577672/f5df58" target="-">
                                    click here
                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Kinematics  I</td>
                            <td colSpan="2">
                                Kinematics and dynamics of machinery
                            </td>
                            <td>
                                <a href="https://3lib.net/book/2925371/07508f" target="-">
                                    click here
                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>Manufacturing Process II</td>
                            <td colSpan="2">
                                Manufacturing Engineering and Technology
                            </td>
                            <td>
                                <a href="https://3lib.net/book/2064848/2e8748" target="-">
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
export default mech4;
