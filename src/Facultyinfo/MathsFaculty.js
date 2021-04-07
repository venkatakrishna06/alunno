

import React, { useState } from "react";
import Cse from "./cse";


function MathsFaculty() {
    const [mathsfaculty, setMathsfculty] = useState([

        // maths faculty


        
        {
            name: "Tharasi Dilleswar Rao", qualification: "Qualification : PG.", role: "Assistant Professor,",
            email: "Email : t_dilesswarrao@ch.amrita.edu", contact: "",img:"/mathsfaculty/dileswar-rao.jpg"
        },
        {
            name: "Dr. M. Ranjith Kumar", qualification: "Qualification : Ph.D, MPhil, MSc, BSc.", role: "Assistant Professor,",
            email: "Email : m_ranjithkumar@ch.amrita.edu", contact: "", img: "/mathsfaculty/ranjith-kumar.jpg"
        },
        {
            name: "Dharminder Chaudhary", qualification: "Qualification : M.Tech, MSc.", role: "Assistant Professor,",
            email: "Email : c_dharminder@ch.amrita.edu", contact: "", img: "/mathsfaculty/dharminder-chaudary.jpg"
        },
        {
            name: "Dr. Satyendra Singh Chauhan", qualification: "Qualification : Ph.D, MSc, BSc.", role: "Assistant Professor,",
            email: "Email : c_satyendrasingh@ch.amrita.edu", contact: "", img: "/mathsfaculty/satyendra.jpg"
        }




    ]);

    return (
        <div>
            {
                mathsfaculty.map((user) => (
                    <Cse
                        pics={user.img}
                        name={user.name}
                        role={user.role}
                        qualification={user.qualification}
                        email={user.email}
                        contact={user.contact}
                    />
                ))
            }


        </div>



    );

}
export default MathsFaculty;