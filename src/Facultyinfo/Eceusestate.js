import Ece from "./ece";

import React, { useState } from "react";


function Eceusestate() {
    const [ecefaculty, setEcefculty] = useState([

         // ECE faculty


        {
            name: "Dr. Ilango Karuppasamy", qualification: "Qualification : Ph.D, M.E.", role: "Assistant Professor,",
            email: " Email : k_ilango@ch.amrita.edu", contact: ""
        },
        {
            name: "Dr. Lakshmanan S. A.", qualification: "Qualification : Ph.D, M.E, BE.", role: "Assistant Professor,",
            email: "Email : sa_lakshman@ch.amrita.edu", contact: ""
        },
        {
            name: "Dr. A. Manikandan", qualification: "Qualification : Ph.D.", role: "Assistant Professor,",
            email: "Email : a_manikandan@ch.amrita.edu", contact: ""
        },
        {
            name: "Dr. Nikhil Kumar C. S.", qualification: "Qualification : Ph.D, MS., B-Tech.", role: "Assistant Professor,",
            email: "Email : cs_nikhilkumar@ch.amrita.edu", contact: ""
        },
        {
            name: "Dr. M. Venkateshkumar", qualification: "Qualification : Ph.D.", role: "Assistant Professor,",
            email: "Email : m_venkateshkumar@ch.amrita.edu", contact: ""
        },
        {
            name: "B. Devanathan", qualification: "Qualification : M.Tech, B-Tech.", role: "Assistant Professor,",
            email: "Email : b_devanathan@ch.amrita.edu", contact: ""
        },
       
       

    ]);

    return (
        <div>
            {
                ecefaculty.map((eceuser) => (
                    <Ece
                        ecename={eceuser.name}
                        ecerole={eceuser.role}
                        ecequalification={eceuser.qualification}
                        eceemail={eceuser.email}
                        ececontact={eceuser.contact}
                    />
                ))
            }


        </div>



    );

}
export default Eceusestate;