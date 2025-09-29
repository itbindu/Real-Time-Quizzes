import React from "react";
import "./StudentDashboard.css";

function StudentDashboard() {
  return (
    <div className="dashboard-container">
      <h2>Student Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-box">Meeting Links</div>
        <div className="dashboard-box">Notifications</div>
        <div className="dashboard-box">Assignments / Quiz</div>
        <div className="dashboard-box">Leaderboard</div>
        <div className="dashboard-box">Attendance</div>
      </div>
    </div>
  );
}

export default StudentDashboard;
