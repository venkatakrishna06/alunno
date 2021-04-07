

import React, { useState } from "react";
import Cse from "./cse";


function CulturalFaculty() {
    const [culturalfaculty, setCulturalfaculty] = useState([

        // cultural faculty


        {
            name: "Dr. Shreehari V. Gokarnakar", qualification: "Qualification : Ph.D, MPhil", role: "Assistant Professor,",
            email: " Email : vg_shreehari@ch.amrita.edu", contact: "",img:"/sreehari.png"
        }, 
    
        


    ]);

    return (
        <div>
            {
                culturalfaculty.map((user) => (
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
export default CulturalFaculty;