import Cse from "./cse";

import React, { useState } from "react";


function EceFaculty() {
    const [ecefaculty, setEcefculty] = useState([

         // ECE faculty


        {
            name: "Dr. Ilango Karuppasamy", qualification: "Qualification : Ph.D, M.E.", role: "Assistant Professor,",
            email: " Email : k_ilango@ch.amrita.edu", contact: "", img:"/ecefaculty/dr.illengo.png"
        },
        {
            name: "Dr. Lakshmanan S. A.", qualification: "Qualification : Ph.D, M.E, BE.", role: "Assistant Professor,",
            email: "Email : sa_lakshman@ch.amrita.edu", contact: "", img: "/ecefaculty/lakshmanan.jpg"
        },
        {
            name: "Dr. A. Manikandan", qualification: "Qualification : Ph.D.", role: "Assistant Professor,",
            email: "Email : a_manikandan@ch.amrita.edu", contact: "", img: "/ecefaculty/manikandan.png"
        },
        {
            name: "Dr. Nikhil Kumar C. S.", qualification: "Qualification : Ph.D, MS., B-Tech.", role: "Assistant Professor,",
            email: "Email : cs_nikhilkumar@ch.amrita.edu", contact: "", img: "/ecefaculty/nikhil-kumar.jpg"
        },
        {
            name: "Dr. M. Venkateshkumar", qualification: "Qualification : Ph.D.", role: "Assistant Professor,",
            email: "Email : m_venkateshkumar@ch.amrita.edu", contact: "", img: "/ecefaculty/venkateshkumar.png"
        },
        {
            name: "B. Devanathan", qualification: "Qualification : M.Tech, B-Tech.", role: "Assistant Professor,",
            email: "Email : b_devanathan@ch.amrita.edu", contact: "", img: "/ecefaculty/devanthan-b.png"
        },
       
       

    ]);

    return (
        <div>
            {
                ecefaculty.map((user) => (
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
export default EceFaculty;