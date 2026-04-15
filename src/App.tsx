import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emailDigest, setEmailDigest] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleTwoFactor = () => setTwoFactor(!twoFactor);
  const toggleNotifications = () => setNotifications(!notifications);
  const toggleEmailDigest = () => setEmailDigest(!emailDigest);

  const handleSessionClick = (session: string) => {
    console.log(`Navigating to session: ${session}`);
    // Placeholder for navigation
  };

  const sessions = [
    'Dashboard - 2 min ago',
    'Profile Settings - 1 hour ago',
    'Team Workspace - 3 hours ago',
    'Project Review - yesterday'
  ];

  return (
    <div className="profile-app">
      {/* MFE Header */}
      <div className="mfe-header">
        <div className="header-content">
          <h1 className="header-title">User Profile</h1>
          <div className="header-badges">
            <span className="badge primary">Profile Micro Frontend</span>
            <a 
              href="https://mfe-remote-profile.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="badge"
              aria-label="Open Profile MFE"
            >
              Port: https://mfe-remote-profile.vercel.app/
            </a>
            <span className="badge">Team: User</span>
            <span className="badge">Version: v1.0.0</span>
          </div>
        </div>
      </div>

      <div className="profile-content">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-avatar-section">
            <div className="avatar-container">
              <div className="avatar">
                <span className="avatar-initials">AU</span>
              </div>
              <div className="status-indicator online"></div>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">Ankit User</h2>
              <p className="profile-role">Senior Software Engineer</p>
              <div className="profile-id">ID: #A12456</div>
            </div>
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <div className="stat-number">1,247</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">89</div>
              <div className="stat-label">Teams</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Rating</div>
            </div>
          </div>
        </div>

        <div className="content-grid">
          {/* Contact Info */}
          <div className="info-card">
            <h3>📧 Contact Info</h3>
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">ankit@example.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone</span>
                <span className="info-value">+1 (555) 123-4567</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="settings-card">
            <h3>⚙️ Preferences</h3>
            <div className="settings-list">
              <label className="setting-item" onClick={toggleDarkMode} role="switch" aria-checked={darkMode}>
                <span>Dark Mode</span>
                <div className="toggle-container">
                  <div className={`toggle-switch ${darkMode ? 'active' : ''}`}></div>
                </div>
              </label>
              <label className="setting-item" onClick={toggleTwoFactor} role="switch" aria-checked={twoFactor}>
                <span>Two-Factor Auth</span>
                <div className="toggle-container">
                  <div className={`toggle-switch ${twoFactor ? 'active' : ''}`}></div>
                </div>
              </label>
              <label className="setting-item" onClick={toggleNotifications} role="switch" aria-checked={notifications}>
                <span>Notifications</span>
                <div className="toggle-container">
                  <div className={`toggle-switch ${notifications ? 'active' : ''}`}></div>
                </div>
              </label>
              <label className="setting-item" onClick={toggleEmailDigest} role="switch" aria-checked={emailDigest}>
                <span>Email Digest</span>
                <div className="toggle-container">
                  <div className={`toggle-switch ${emailDigest ? 'active' : ''}`}></div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="activity-card">
          <h3>Recent Sessions</h3>
          <div className="sessions-list">
            {sessions.map((session, index) => (
              <div 
                key={index} 
                className="session-item"
                onClick={() => handleSessionClick(session)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleSessionClick(session)}
              >
                <div className="session-dot"></div>
                <span>{session}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

