import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import "./Sidebar.css";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/Facultyinfo">
        Faculty Info
      </a>
      <a className="menu-item" href="/Classtt">
        Class Timetable
      </a>
      <a className="menu-item" href="/Accalender">
        Academic Calander
      </a>
      <hr></hr>
      <a className="menu-item" href="/Assignments">
        Assignments
      </a>
      <a className="menu-item" href="/Studymaterial">
        Study Materials
      </a>
      <a className="menu-item" href="/Examschedule">
        Exam Schedule
      </a>
      
      <hr></hr>
      <a className="menu-item" href="/Announcements">
        Announcements
      </a>
      <a className="menu-item" href="/Achievements">
        Achievements
      </a>
    </Menu>
  );
}