import React from "react";
import { Button, Menu } from 'antd';
import "./Sidebar.css";

import {
  HomeTwoTone,
  InfoCircleTwoTone,
  AppstoreTwoTone,
  BookTwoTone,
  QuestionCircleTwoTone,
  ScheduleTwoTone,
  CalendarTwoTone,
  AlertTwoTone,
  TrophyTwoTone,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';




class Sidebar extends React.Component {
  state = {
    collapsed: true,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="sidebar">
        <Button id="Button" type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 1 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={!this}
          defaultOpenKeys={['sub1']}
          mode="inline"

          inlineCollapsed={this.state.collapsed}
        >
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
              <a href="/Accalender">Academic Calander</a>
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
        </Menu>
      </div>
    );
  }
}
export default Sidebar;