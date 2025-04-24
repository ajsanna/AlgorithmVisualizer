"use client";

import React from 'react';

export default function Header() {
  const handleGitHubClick = () => {
    window.open('https://github.com/ajsanna', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/alexander-sanna', '_blank');
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:alexsanna50@gmail.com';
  };

  return (
    <div className="header">
      <div className="headerText">
        <h1>Algorithmic Visualization</h1>
        <p>A Weekend Project, Created by Alexander Sanna</p>
      </div> 
      <div className="RightHeaderButtons">
        <button className="HeaderButton" onClick={handleGitHubClick}>GitHub</button>
        <button className="HeaderButton" onClick={handleLinkedInClick}>LinkedIn</button>
        <button className="HeaderButton" onClick={handleContactClick}>Contact</button>
      </div>
    </div>
  );
} 