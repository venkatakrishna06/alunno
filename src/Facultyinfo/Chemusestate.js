import Chem from "./chem";

import React, { useState } from "react";


function Chemusestate() {
    const [chemfaculty, setChemfaculty] = useState([

        // chem faculty


        {
            name: "Dr. Darbha Venkata Ravi Kumar", qualification: "Qualification : Ph.D, M.Sc.", role: "Assistant Professor,",
            email: " Email : vrk_darbha@ch.amrita.edu", contact: "", img: "/chemfaculty/darbha-venkata-ravi.png"
        },
        {
            name: "Dr. C. Sarath Chandran", qualification: "Qualification : Ph.D", role: "Assistant Professor,",
            email: "Email : c_sarathchandran@ch.amrita.edu", contact: "", img: "/chemfaculty/sarath-chandran.png"
        }


    ]);

    return (
        <div>
            {
                chemfaculty.map((chemuser) => (
                    <Chem
                        chempics={chemuser.img}
                        chemname={chemuser.name}
                        chemrole={chemuser.role}
                        chemqualification={chemuser.qualification}
                        chememail={chemuser.email}
                        chemcontact={chemuser.contact}
                    />
                ))
            }


        </div>



    );

}
export default Chemusestate;