import React from "react";



import { Layout, Menu } from 'antd';
import "./home.css";
import {
  HomeTwoTone,
  InfoCircleTwoTone,
  AppstoreTwoTone ,
  BookTwoTone,
  QuestionCircleTwoTone,
  ScheduleTwoTone,
  CalendarTwoTone,
  AlertTwoTone,
  TrophyTwoTone
} from '@ant-design/icons';
const { Header, Sider, Content, Footer } = Layout;


class Home extends React.Component {
 

  render() {
    return (
      <Layout>
        <Sider
          className="sider"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo"  />
          <Menu mode="inline" className="menu">
            <Menu.Item key="1" icon={<HomeTwoTone />}>
              <a href="/"> Home</a>
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleTwoTone />}>
              <a href="/Facultyinfo">Faculty info</a>
            </Menu.Item>
            <Menu.Item key="3" icon={<AppstoreTwoTone />}>
              <a href="/Classtt"> Class Timetable</a>
            </Menu.Item>
            <Menu.Item key="4" icon={<CalendarTwoTone />}>
              <a href="/Accalendar">Academic Calandar</a>
            </Menu.Item>
            <Menu.Item key="5" icon={<QuestionCircleTwoTone />}>
              <a href="/Assignments">Assignments</a>
            </Menu.Item>
            <Menu.Item key="6" icon={<BookTwoTone />}>
              <a href="/Studymaterial">Study Materials</a>
            </Menu.Item>
            <Menu.Item key="7" icon={<ScheduleTwoTone />}>
              <a href="/Examschedule">Exam Schedule</a>
            </Menu.Item>
            <Menu.Item key="8" icon={<AlertTwoTone />}>
              <a href="/Announcements">Announcements</a>
            </Menu.Item>
            <Menu.Item key="9" icon={<TrophyTwoTone />}>
              <a href="/Achievements">Achievements</a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
          
          </Header>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Home;


















































































// import React from "react";
// import "./home.css";
// import Logo from "../Document/Logo.png";

// function Home() {
//   return (
//     <div className="Home">
//       <div id="homePage">
//         <div className="navBar">
//           <ul>
//             <li>
//               <a href="/">
//                 <img id="logo" src={Logo} alt="logo" />
//               </a>
//             </li>
//             <li>
//               <a href="/Classtt">Class TT</a>
//             </li>
//             <li>
//               <a href="/Assignments">Assignments</a>
//             </li>
//             <li>
//               <a href="/Studymaterial">Studymaterial</a>
//             </li>
//             <li>
//               <a href="/Announcements">Announcements</a>
//             </li>
//           </ul>
//         </div>
        
//         <div id="imgBox">
//           <a href="#">
//             <img
//               alt="campus pics"
//               src="C:\Users\sride\Desktop\rentpi\images\head.png"
//             ></img>
//           </a>
//         </div>
//         <div id="ancmnt">
//           <div id="sem4" className="ann">
//             <div id="title">SEM4</div>
//             <p>sem4</p>
//             <p>sem4</p>

//             <p>sem4</p>

//             <p>sem4</p>
//             <p>sem4</p>
//             <p>sem4</p>
//           </div>
//           <div id="sem2" className="ann">
//             <div id="title">SEM2</div>
//             <p>sem2</p>
//             <p>sem2</p>
//             <p>sem2</p>
//             <p>sem2</p>
//             <p>sem2</p>
//             <p>sem2</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Home
