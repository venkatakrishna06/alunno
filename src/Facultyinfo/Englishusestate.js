import English from "./english";

import React, { useState } from "react";


function Englishusestate() {
    const [englishfaculty, setEnglishfaculty] = useState([

         // English faculty


        {
            name: "Dr. Vinata Sai", qualification: "Qualification : Ph.D, MPhil.", role: "Assistant Professor,",
            email: " Email : s_vinata@ch.amrita.edu", contact: ""
        },
        {
            name: "J. S. Kavitha", qualification: "Qualification : MPhil, MSc", role: "Assistant Professor,",
            email: "Email : js_kavitha@ch.amrita.edu", contact: ""
        }
       

    ]);

    return (
        <div>
            {
                englishfaculty.map((englishuser) => (
                    <English
                        englishname={englishuser.name}
                        englishrole={englishuser.role}
                        englishqualification={englishuser.qualification}
                        englishemail={englishuser.email}
                        englishcontact={englishuser.contact}
                    />
                ))
            }


        </div>



    );

}
export default Englishusestate;