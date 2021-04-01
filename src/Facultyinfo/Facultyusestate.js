import Cse from "./cse";

import React, { useState } from "react";


function Facultyusestate() {
    const [csefaculty, setCsefculty] = useState([

        // cse faculty


        {
            name: "Dr. Sreedevi A. G.", qualification: "Qualification : Ph.D, M.Tech, B-Tech", role: "Assistant Professor,",
            email: " Email : ag_sreedevi@ch.amrita.edu", contact: ""
        },
        {
            name: "Dr. A. Padmavathi", qualification: "Qualification : Ph.D, M.E, BE", role: "Assistant Professor,",
            email: "Email : a_padmavathi@ch.amrita.edu", contact: ""
        },
        {
            name: "Dr. S. Sathya", qualification: "Qualification : Ph.D, B-Tech", role: "Assistant Professor,",
            email: "Email : s_sathya@ch.amrita.edu", contact: ""
        },
        {
            name: "Dr. A. Maheshwari", qualification: "Qualification : Ph.D, M.E, BE", role: "Assistant Professor,",
            email: "Email : a_maheshwari@ch.amrita.edu", contact: ""
        },
        {
            name: "Dr. R. Prasanna Kumar", qualification: "Qualification : Ph.D, M.Tech, BE", role: "Assistant Professor,",
            email: "Email : r_prasannakumar@ch.amrita.edu", contact: ""
        },
        {
            name: "Karpagam M.", qualification: "Qualification : M.Tech., B-Tech", role: "Assistant Professor,",
            email: "Email : m_karpagam@ch.amrita.edu", contact: ""
        },
        {
            name: "R. V. Aswiga", qualification: "Qualification : M.E., B.E", role: "Assistant Professor,",
            email: "Email : rv_aswiga@ch.amrita.edu", contact: ""
        }

        // ECE faculty

    ]);

    return (
        <div>
            {
                csefaculty.map((user) => (
                    <Cse
                        csename={user.name}
                        cserole={user.role}
                        csequalification={user.qualification}
                        cseemail={user.email}
                        csecontact={user.contact}
                    />
                ))
            }

 
        </div>
        
        

    );

}
export default Facultyusestate;