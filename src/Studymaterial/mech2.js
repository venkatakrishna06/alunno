
import React from "react";
import "./studymaterial.css";

function mech2() {
    return (
        <div className="mech2">
            <div id="sm">
                <h2>MECH SEM-2 TEXT BOOKS</h2>
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
                            <td>Differential Equations</td>
                            <td colSpan="2">

                                Advanced engineering mathematics
                            </td>
                            <td>
                                <a href="https://3lib.net/book/441394/024267" target="-">
                                    click here
                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Biology - B</td>
                            <td colSpan="2">
                                Applied Cell and Molecular<br></br> Biology for Engineers
                            </td>
                            <td>
                                <a href="https://3lib.net/book/509871/7709c8" target="-">
                                    click here
                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Engineering Chemisrty - A </td>
                            <td colSpan="2">
                                Engineering Chemistry</td>
                            <td>
                                <a href="#" target="">
                                    --
                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Computer Programming</td>
                            <td colSpan="2">
                                The C Programming Language
                            </td>
                            <td>
                                <a href="#" target="">
                                    --
                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>CAD</td>
                            <td colSpan="2">

                                Engineering Graphics<br></br> with AutoCAD 2020
                            </td>
                            <td>
                                <a href="https://3lib.net/book/5224906/00d456" target="-">
                                    click here
                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Engineering Mechanics</td>
                            <td colSpan="2">

                                Vector Mechanics for Engineers<br></br>-Statics and Dynamics
                            </td>
                            <td>
                                <a href="https://3lib.net/book/1047781/efbcee" target="-">
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
export default mech2;
