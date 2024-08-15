import React from 'react';
import './About.css';
import theme from '../../assets/theme_pattern.svg';
import profile from '../../assets/Atul ranjan.png';

function About() {
  return (
    <section id='about' className='about'>
      <div className="about-header">
        <h1>About Me</h1>
        <img src={theme} alt="Theme pattern" />
      </div>
      <div className="about-content">
        <div className='about-profile'>
          <img src={profile} alt="Atul Ranjan" />
        </div>
        <div className="about-description">
          <p>I am an experienced Frontend Developer with over 10 years of experience in building visually appealing and highly functional user interfaces.</p>
          <p>My passion for frontend development is not just about coding, but about creating experiences that users love and find easy to use. I am skilled in a wide range of frontend technologies including React, JavaScript, HTML5, CSS3, and more.</p>
          {/* <p>Throughout my career, I have worked on a variety of projects that required a deep understanding of both design and technical aspects. I am constantly learning and staying updated with the latest trends and tools in the industry to ensure that the solutions I create are modern, efficient, and aligned with best practices.</p>
          <p>Whether I am working on a large-scale application or a small website, my goal is always to deliver high-quality work that meets the needs of the users and exceeds the expectations of my clients.</p> */}
          <div className="about-skills">
            <SkillBar skill="HTML & CSS" level="90%" />
            <SkillBar skill="JavaScript" level="85%" />
            <SkillBar skill="React" level="80%" />
            <SkillBar skill="UI/UX Design" level="75%" />
          </div>
        </div>
      </div>
      <div className="about-stats">
        <StatBox number="10+" label="YEARS OF EXPERIENCE" />
        <StatBox number="90+" label="PROJECTS COMPLETED" />
        <StatBox number="10+" label="HAPPY CLIENTS" />
      </div>
    </section>
  )
}

function SkillBar({ skill, level }) {
  return (
    <div className="skill-bar">
      <p>{skill}</p>
      <div className="bar">
        <div className="bar-fill" style={{ width: level }}></div>
      </div>
    </div>
  );
}

function StatBox({ number, label }) {
  return (
    <div className="stat-box">
      <h1>{number}</h1>
      <p>{label}</p>
    </div>
  );
}

export default About;
