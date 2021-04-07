

import React, { useState } from "react";
import CseAass from "./CseAass";


function Data() {
    const [data, setData] = useState([


        { subjectName: "Subject", assName: "Assignment", submitThrough: "Submit Through ", dueDate: "Due Date" },
        { subjectName: "Subject", assName: "Assignment", submitThrough: "Submit Through ", dueDate: "Due Date" },

    ]);

    return (
        <div>
            {
                data.map((data) => (
                    <CseAass

                        subject={data.subjectName}
                        assname={data.assName}
                        submit={data.submitThrough}
                        duedate={data.dueDate}

                    />
                ))
            }


        </div>



    );

}
export default Data;