 import Cse from "./cse";

import React, { useState } from "react";


function CseFaculty() {
    const [csefaculty, setCsefculty] = useState([

        // cse faculty


        {
            name: "Dr. Sreedevi A. G.", qualification: "Qualification : Ph.D, M.Tech, B-Tech", role: "Assistant Professor,",
            email: " Email : ag_sreedevi@ch.amrita.edu", contact: "", img: "/csefaculty/sreedevi.png"
        },
        {
            name: "Dr. A. Padmavathi", qualification: "Qualification : Ph.D, M.E, BE", role: "Assistant Professor,",
            email: "Email : a_padmavathi@ch.amrita.edu", contact: "", img: "/csefaculty/padmavathi.png"
        },
        {
            name: "Dr. S. Sathya", qualification: "Qualification : Ph.D, B-Tech", role: "Assistant Professor,",
            email: "Email : s_sathya@ch.amrita.edu", contact: "" ,img: "/csefaculty/sathya-s.png"
        },
        {
            name: "Dr. A. Maheshwari", qualification: "Qualification : Ph.D, M.E, BE", role: "Assistant Professor,",
            email: "Email : a_maheshwari@ch.amrita.edu", contact: "", img: "/csefaculty/a-maheswary.jpg"
        },
        {
            name: "Dr. R. Prasanna Kumar", qualification: "Qualification : Ph.D, M.Tech, BE", role: "Assistant Professor,",
            email: "Email : r_prasannakumar@ch.amrita.edu", contact: "", img: "/csefaculty/prasanna-kumar.jpg"
        },
        {
            name: "Karpagam M.", qualification: "Qualification : M.Tech., B-Tech", role: "Assistant Professor,",
            email: "Email : m_karpagam@ch.amrita.edu", contact: "", img: "/csefaculty/karpagam-m.jpg"
        },
        {
            name: "R. V. Aswiga", qualification: "Qualification : M.E., B.E", role: "Assistant Professor,",
            email: "Email : rv_aswiga@ch.amrita.edu", contact: "", img: "/csefaculty/rv-aswiga.png"
        }

        // ECE faculty

    ]);

    return (
        <div>
            {
                csefaculty.map((user) => (
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
export default CseFaculty;