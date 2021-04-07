import Cse from "./cse";

import React, { useState } from "react";


function ChemFaculty() {
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
                chemfaculty.map((user) => (
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
export default ChemFaculty;