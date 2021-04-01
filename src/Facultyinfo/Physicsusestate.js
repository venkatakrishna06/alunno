import Physics from "./physics";

import React, { useState } from "react";


function Physicsusestate() {
    const [physicsfaculty, setPhysicsfaculty] = useState([

        // physics faculty


        {
            name: "Dr.Naresh Raghava", qualification: "Qualification : Ph.D, National University of Singapore", role: "Assistant Professor,",
            email: " Email : g_nareshraghava@ch.amrita.edu", contact: ""
        },
        {
            name: "Dr. Neelam J. Upadhyay", qualification: "Qualification : Ph.D, National University of Singapore", role: "Assistant Professor,",
            email: "Email : ju_neelam@ch.amrita.edu", contact: ""
        }


    ]);

    return (
        <div>
            {
                physicsfaculty.map((physicsuser) => (
                    <Physics
                        physicsname={physicsuser.name}
                        physicsrole={physicsuser.role}
                        physicsqualification={physicsuser.qualification}
                        physicsemail={physicsuser.email}
                        physicscontact={physicsuser.contact}
                    />
                ))
            }


        </div>



    );

}
export default Physicsusestate;