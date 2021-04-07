import React from "react";
import "./App.css";


// importing local files
import Sidebar from "./Sidebar";
import Home from "./Home/Home";
import Classtt from "./Classtt/Classtt";
import Assignments from "./Assignments/Assignments";
import Accalendar from "./Accalendar/Accalendar";
import Examschedule from "./Examschedule/Examschedule";
import Studymaterial from "./Studymaterial/Studymaterial";
import Announcements from "./Announcements/Announcements";
import Achievements from "./Achievements/Achievements";


//importing courses files

import Facultyinfo from "./Facultyinfo/Facultyinfo";


//importing facultyusesate files
import CseFaculty from "./Facultyinfo/CseFaculty";
import EceFaculty from "./Facultyinfo/EceFaculty";
import MechFaculty from "./Facultyinfo/MechFaculty";
import MathsFaculty from "./Facultyinfo/MathsFaculty";
import EnglishFaculty from "./Facultyinfo/EnglishFaculty";
import PhysicsFaculty from "./Facultyinfo/PhysicsFaculty";
import ChemFaculty from "./Facultyinfo/ChemFaculty";
import CulturalFaculty from "./Facultyinfo/CulturalFaculty";





//importing classtt js files
import cseAtt from "./Classtt/cseAtt/cseAtt";
import cseBtt from "./Classtt/cseBtt/cseBtt";
import ecett from "./Classtt/ecett/ecett";
import cseAItt from "././Classtt/cseAItt/cseAItt";
import cseA2tt from "././Classtt/cseA2tt/cseA2tt";
import cseB2tt from "././Classtt/cseB2tt/cseB2tt";
import cseCYStt from "././Classtt/cseCYStt/cseCYStt";
import mech2tt from "././Classtt/mech2tt/mech2tt";

//importing studymaterial files
import cse4 from "./Studymaterial/cse4";
import ece4 from "./Studymaterial/ece4";
import eee4 from "./Studymaterial/eee4";
import cys2 from "./Studymaterial/cys2";
import cse2 from "./Studymaterial/cse2";
import ai2 from "./Studymaterial/ai2";


//importing assignment files



import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" id="outer-container">


      <Router>
        <div id="page-wrap">
          <div>
            <Route path="/" exact component={Home} />
          </div>
          <div>
           
            <Route path="/Facultyinfo" exact component={Facultyinfo} />
            <Route path="/Facultyinfo" component={CseFaculty} />
           
          </div>
          <div>
            
            <Route path="/Classtt" exact component={Classtt} />
            <Route path="/classtt" component={cseAtt} />
          </div>
          <div>
            <Route path="/Assignments" exact component={Sidebar} />
            <Route path="/Assignments" exact component={Assignments} />
        
          </div>
          <div>
            <Route path="/Accalendar" exact component={Sidebar} />
            <Route path="/Accalendar" exact component={Accalendar} />
          </div><div>
            <Route path="/Examschedule" exact component={Sidebar} />
          <Route path="/Examschedule" exact component={Examschedule} />
          </div>
          <div>
            
            <Route path="/Studymaterial" exact component={Studymaterial} />
            <Route path="/Studymaterial" exact component={cse4} />
    

          </div>
          <div>
            <Route path="/Announcements" exact component={Sidebar} />
            <Route path="/Announcements" exact component={Announcements} />
          </div>
          <div>
            <Route path="/Achievements" exact component={Sidebar} />
            <Route path="/Achievements" exact component={Achievements} />
          </div>
        </div>
      </Router>


      {/* Faculty info */}
      <Router>
        <div>
       
        <div>
            <Route path="/cse" component={Facultyinfo} />
            <Route path="/cse" component={CseFaculty} />
           
        </div>
        <div>
            <Route path="/ece" component={Facultyinfo} />
            <Route path="/ece" component={EceFaculty} />
            
        </div>
        <div>
            <Route path="/mech" component={Facultyinfo} />
            <Route path="/mech" component={MechFaculty} />
           
        </div>

        <div>
            <Route path="/maths" component={Facultyinfo} />
            <Route path="/maths" component={MathsFaculty} />
           
        </div>

        <div>
            <Route path="/english" component={Facultyinfo} />
            <Route path="/english" component={EnglishFaculty} />
            
        </div>

        <div>
            <Route path="/physics" component={Facultyinfo} />
            <Route path="/physics" component={PhysicsFaculty} />
           
        </div>

        <div>
            <Route path="/chem" component={Facultyinfo} />
            <Route path="/chem" component={ChemFaculty} />
            
        </div>

        <div>
            <Route path="/cultural" component={Facultyinfo} />
            <Route path="/cultural" component={CulturalFaculty} />
           
          </div>
          </div>
      </Router>

      {/* classtt */}
      <Router>
        <div>
          <Route path="/cseAtt" component={Classtt} />
          <Route path="/cseAtt" component={cseAtt} />
        </div>
        <div>
          <Route path="/cseBtt" component={Classtt} />
          <Route path="/cseBtt" component={cseBtt} />
        </div>
        <div>
          <Route path="/ecett" component={Classtt} />
          <Route path="/ecett" component={ecett} />
        </div><div>
          <Route path="/eeett" component={Classtt} />
          <Route path="/eeett"  />
        </div>
         <div><Route path="/mechtt" component={Classtt} />
        <Route path="/mechtt" />
      </div>

        <div>
          <Route path="/cseAItt" component={Classtt} />
          <Route path="/cseAItt" component={cseAItt} />
        </div>
        <div>
          <Route path="/cseA2tt" component={Classtt} />
          <Route path="/cseA2tt" component={cseA2tt} />
        </div>
        <div>
          <Route path="/cseB2tt" component={Classtt} />
          <Route path="/cseB2tt" component={cseB2tt} />
        </div>
        <div>
          <Route path="/cseCYStt" component={Classtt} />
          <Route path="/cseCYStt" component={cseCYStt} />
        </div>
        <div>
          <Route path="/ece2tt" component={Classtt} />
          <Route path="/ece2tt"  />
        </div>
        <div>
          <Route path="/cce2tt" component={Classtt} />
          <Route path="/cce2tt" />
        </div>
        <div>
          <Route path="/mech2tt" component={Classtt} />
          <Route path="/mech2tt" component={mech2tt} />
        </div>
      </Router>

      {/* studymaterial  */}
      <Router>
        <div>
          <Route path="/studymaterial/cse4" component={Studymaterial} />
          <Route path="/studymaterial/cse4" component={cse4} />
        </div>
        <div>
          <Route path="/studymaterial/ece4" component={Studymaterial} />
          <Route path="/studymaterial/ece4" component={ece4} />
        </div>
        <div> 
          <Route path="/studymaterial/mech4" component={Studymaterial} />
          <Route path="/studymaterial/mech4" component={cse4} />
        </div>
        <div>
          <Route path="/studymaterial/eee4" component={Studymaterial} />
          <Route path="/studymaterial/eee4" component={eee4} />

        </div>
        <div>
          <Route path="/studymaterial/cys2" component={Studymaterial} />
          <Route path="/studymaterial/cys2" component={cys2} />

        </div>
        <div>
          <Route path="/studymaterial/ai2" component={Studymaterial} />
          <Route path="/studymaterial/ai2" component={ai2} />

        </div>
        <div>
          <Route path="/studymaterial/cse2" component={Studymaterial} />
          <Route path="/studymaterial/cse2" component={cse2} />

        </div>
        <div>
          <Route path="/studymaterial/ece2" component={Studymaterial} />
          <Route path="/studymaterial/ece2" component={cse4} />
        </div>

        <div>
          <Route path="/studymaterial/mech2" component={Studymaterial} />
          <Route path="/studymaterial/mech2" component={cse4} />

        </div>
      </Router>


      {/* Assignments */}
     
    </div >
  );
}

export default App;
