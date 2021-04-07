

import React, { useState } from "react";
import Cse from "./cse";


function MechFaculty() {
    const [mechfaculty, setMechfculty] = useState([

        // MECH faculty


        {
            name: "Dr. V. Jayakumar", qualification: "Qualification : Ph.D, MBA, M.E.", role: "Associate Professor,,",
            email: " Email : v_jayakumar@ch.amrita.edu", contact: "", img :"/mechfaculty/jayakumar.png"
        },
        {
            name: "Dr. P. K. Giridharan", qualification: "Qualification : Ph.D, M.E", role: "Professor,,",
            email: "Email : pk_giridharan@ch.amrita.edu", contact: "", img: "/mechfaculty/giridharan-p-k.png"
        },
        {
            name: "Dr. Kondeti Lakshmi Vasudev", qualification: "Qualification : Ph.D.", role: "Assistant Professor,",
            email: "Email : kl_vasudev@ch.amrita.edu", contact: "", img: "/mechfaculty/kondeti-lakshmi-vasudev.png"
        },
        {
            name: "Madhulika Srivastava", qualification: "Qualification : PG.", role: "Assistant Professor,",
            email: "Email : s_madhulika@ch.amrita.edu", contact: "", img: "/mechfaculty/madhulika.jpg"
        },
        {
            name: "M. Sathishkumar", qualification: "Qualification : M.Tech, BE.", role: "Assistant Professor,",
            email: "Email : m_sathishkumar@ch.amrita.edu", contact: "", img: "/mechfaculty/sathishkumar.jpg"
        },
        {
            name: "S. Shriram", qualification: "Qualification : M.Tech.", role: "Assistant Professor,",
            email: "Email : s_shriram@ch.amrita.edu", contact: "", img: "/mechfaculty/s-shriram.png"
        }



    ]);

    return (
        <div>
            {
                mechfaculty.map((user) => (
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
export default MechFaculty;