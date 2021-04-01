import React from "react";
import "./App.css";


// importing local files
import Sidebar from "./Sidebar";
import Home from "./Home/Home";
import Classtt from "./Classtt/Classtt";
import Assignments from "./Assignments/Assignments";
import Accalender from "./Accalender/Accalender";
import Examschedule from "./Examschedule/Examschedule";
import Studymaterial from "./Studymaterial/Studymaterial";
import Announcements from "./Announcements/Announcements";
import Achievements from "./Achievements/Achievements";


//importing courses files

import cse from "./Facultyinfo/cse";
import ece from "./Facultyinfo/ece";
import mech from "./Facultyinfo/mech"
import maths from "./Facultyinfo/maths";
import english from "./Facultyinfo/english";
import physics from "./Facultyinfo/physics";
import chem from "./Facultyinfo/chem";
import cultural from "./Facultyinfo/cultural";
import Facultyinfo from "./Facultyinfo/Facultyinfo";


//importing facultyusesate files
import Facultyusestate from "./Facultyinfo/Facultyusestate";
import Eceusestate from "./Facultyinfo/Eceusestate";
import Mechusestate from "./Facultyinfo/Mechusestate";
import Mathsusestate from "./Facultyinfo/Mathsusestate";
import Englishusestate from "./Facultyinfo/Englishusestate";
import Physicsusestate from "./Facultyinfo/Physicsusestate";
import Chemusestate from "./Facultyinfo/Chemusestate";
import Culturalusestate from "./Facultyinfo/Culturalusestate";

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


import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

      <Router>
        <div id="page-wrap">
          <Route path="/" exact component={Home} />
          <Route path="/Facultyinfo" exact component={Facultyinfo} />
          <Route path="/Classtt" exact component={Classtt} />
          <Route path="/Assignments" exact component={Assignments} />
          <Route path="/Accalender" exact component={Accalender } />
          <Route path="/Examschedule" exact component={Examschedule} />
          <Route path="/Studymaterial" exact component={Studymaterial} />
          <Route path="/Announcements" exact component={Announcements} />
          <Route path="/Achievements" exact component={Achievements} />

        </div>
      </Router>

      
      {/* Faculty info */}
      <Router>
        <div>
          <Route path="/cse" component={Facultyinfo} />
          <Route path="/cse" component={Facultyusestate} />
          <Route path="/cse" component={cse} />
        </div>
        <div>
          <Route path="/ece" component={Facultyinfo} />
          <Route path="/ece" component={Eceusestate} />
          <Route path="/ece" component={ece} />
        </div>
        <div>
          <Route path="/mech" component={Facultyinfo} />
          <Route path="/mech" component={Mechusestate} />
          <Route path="/mech" component={mech} />
        </div>

        <div>
          <Route path="/maths" component={Facultyinfo} />
          <Route path="/maths" component={Mathsusestate} />
          <Route path="/maths" component={maths} />
        </div>

        <div>
          <Route path="/english" component={Facultyinfo} />
          <Route path="/english" component={Englishusestate} />
          <Route path="/english" component={english} />
        </div>

        <div>
          <Route path="/physics" component={Facultyinfo} />
          <Route path="/physics" component={Physicsusestate} />
          <Route path="/physics" component={physics} />
        </div>

        <div>
          <Route path="/chem" component={Facultyinfo} />
          <Route path="/chem" component={Chemusestate} />
          <Route path="/chem" component={chem} />
        </div>

        <div>
          <Route path="/cultural" component={Facultyinfo} />
          <Route path="/cultural" component={Culturalusestate} />
          <Route path="/cultural" component={cultural} />
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
          <Route path="/studymaterial/eee4" component={cse4} />

        </div>
        <div>
          <Route path="/studymaterial/cys2" component={Studymaterial} />
          <Route path="/studymaterial/cys2" component={cse4} />

        </div>
        <div>
          <Route path="/studymaterial/ai2" component={Studymaterial} />
          <Route path="/studymaterial/ai2" component={cse4} />

        </div>
        <div>
          <Route path="/studymaterial/cse2" component={Studymaterial} />
          <Route path="/studymaterial/cse2" component={cse4} />

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

    </div>
  );
}

export default App;
