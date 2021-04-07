

import React, { useState } from "react";
import Cse from "./cse";


function PhysicsFaculty() {
    const [physicsfaculty, setPhysicsfaculty] = useState([

        // physics faculty


        {
            name: "Dr.Naresh Raghava", qualification: "Qualification : Ph.D, National University of Singapore", role: "Assistant Professor,",
            email: " Email : g_nareshraghava@ch.amrita.edu", contact: "", img:"/phyfaculty/naresh-raghava.png"
        },
        {
            name: "Dr. Neelam J. Upadhyay", qualification: "Qualification : Ph.D, National University of Singapore", role: "Assistant Professor,",
            email: "Email : ju_neelam@ch.amrita.edu", contact: "", img: "/phyfaculty/neelam.png"
        }


    ]);

    return (
        <div>
            {
                physicsfaculty.map((user) => (
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
export default PhysicsFaculty;