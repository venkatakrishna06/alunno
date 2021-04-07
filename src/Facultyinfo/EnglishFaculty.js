
import React, { useState } from "react";
import Cse from "./cse";


function EnglishFaculty() {
    const [englishfaculty, setEnglishfaculty] = useState([

         // English faculty


        {
            name: "Dr. Vinata Sai", qualification: "Qualification : Ph.D, MPhil.", role: "Assistant Professor,",
            email: " Email : s_vinata@ch.amrita.edu", contact: "",img:"/engfaculty/vineta-sai.png"
        },
        {
            name: "J. S. Kavitha", qualification: "Qualification : MPhil, MSc", role: "Assistant Professor,",
            email: "Email : js_kavitha@ch.amrita.edu", contact: "", img: "/engfaculty/js-kavitha.png"
        }
       

    ]);

    return (
        <div>
            {
                englishfaculty.map((user) => (
                    <Cse
                        pics ={user.img}
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
export default EnglishFaculty;