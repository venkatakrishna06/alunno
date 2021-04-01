import Mech from "./mech";

import React, { useState } from "react";


function Mechusestate() {
    const [mechfaculty, setMechfculty] = useState([

        // MECH faculty


        {
            name: "Dr. V. Jayakumar", qualification: "Qualification : Ph.D, MBA, M.E.", role: "Associate Professor,,",
            email: " Email : v_jayakumar@ch.amrita.edu", contact: ""
        },
        {
            name: "Dr. P. K. Giridharan", qualification: "Qualification : Ph.D, M.E", role: "Professor,,",
            email: "Email : pk_giridharan@ch.amrita.edu", contact: ""
        },
        {
            name: "Dr. Kondeti Lakshmi Vasudev", qualification: "Qualification : Ph.D.", role: "Assistant Professor,",
            email: "Email : kl_vasudev@ch.amrita.edu", contact: ""
        },
        {
            name: "Madhulika Srivastava", qualification: "Qualification : PG.", role: "Assistant Professor,",
            email: "Email : s_madhulika@ch.amrita.edu", contact: ""
        },
        {
            name: "M. Sathishkumar", qualification: "Qualification : M.Tech, BE.", role: "Assistant Professor,",
            email: "Email : m_sathishkumar@ch.amrita.edu", contact: ""
        },
        {
            name: "S. Shriram", qualification: "Qualification : M.Tech.", role: "Assistant Professor,",
            email: "Email : s_shriram@ch.amrita.edu", contact: ""
        }



    ]);

    return (
        <div>
            {
                mechfaculty.map((mechuser) => (
                    <Mech
                        mechname={mechuser.name}
                        mechrole={mechuser.role}
                        mechqualification={mechuser.qualification}
                        mechemail={mechuser.email}
                        mechcontact={mechuser.contact}
                    />
                ))
            }


        </div>



    );

}
export default Mechusestate;