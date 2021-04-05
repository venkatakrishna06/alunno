import Cultural from "./cultural";

import React, { useState } from "react";


function Culturalusestate() {
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
                culturalfaculty.map((culturaluser) => (
                    <Cultural
                        culturalpics={culturaluser.img}
                        culturalname={culturaluser.name}
                        culturalrole={culturaluser.role}
                        culturalqualification={culturaluser.qualification}
                        culturalemail={culturaluser.email}
                        culturalcontact={culturaluser.contact}
                    />
                ))
            }


        </div>



    );

}
export default Culturalusestate;