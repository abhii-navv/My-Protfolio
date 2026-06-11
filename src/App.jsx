import React, { useState, useCallback } from 'react';
import StaggeredMenu from './StaggeredMenu';
import DomeGallery from './DomeGallery';
import './App.css';

const PHOTO_IMAGES = [
  { src: 'assets/images/img1.jpeg', alt: 'Photo 1' },
  { src: 'assets/images/img2.jpg',  alt: 'Photo 2' },
  { src: 'assets/images/img3.jpeg', alt: 'Photo 3' },
  { src: 'assets/images/img4.jpg',  alt: 'Photo 4' },
  { src: 'assets/images/img5.jpg',  alt: 'Photo 5' },
  { src: 'assets/images/img6.jpeg', alt: 'Photo 6' },
  { src: 'assets/images/img7.jpeg', alt: 'Photo 7' },
  { src: 'assets/images/img8.JPG',  alt: 'Photo 8' },
  { src: 'assets/images/img9.JPG',  alt: 'Photo 9' },
  { src: 'assets/images/img10.jpeg',alt: 'Photo 10' },
  { src: 'assets/images/img11.jpg',alt: 'Photo 11' },
  { src: 'assets/images/img12.jpg',alt: 'Photo 12' },
  { src: 'assets/images/img13.jpg',alt: 'Photo 13' },
  { src: 'assets/images/img14.jpg',alt: 'Photo 14' },
  { src: 'assets/images/img15.JPG',alt: 'Photo 15' },

];

const PAGES = ['home','about','resume','projects','photography','contact'];

// ── SVG Icons ──────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.7a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
);
const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
);
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5v-2z"/></svg>
);
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);
const DriveIcon = () => (
  <svg width="16" height="16" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"/>
    <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0-1.2 4.5h27.5z"/>
    <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.5l5.85 11.5z"/>
    <path d="m43.65 25 13.75-23.8a9.15 9.15 0 0 0-4.5-1.2h-18.5a9.15 9.15 0 0 0-4.5 1.2z" opacity=".8"/>
    <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" opacity=".6"/>
    <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 27h27.45c0-1.55-.4-3.1-1.2-4.5z" opacity=".4"/>
  </svg>
);

// ── Page Components ─────────────────────────────────────────

function HomePage({ onNav }) {
  return (
    <div className="page-home">
      {/* <img src="assets/images/logo.png" alt="Abhii" className="home-logo" /> */}
      <div className="home-left">
        <div>
          <p className="home-eyebrow">Pasumarthy</p>
          <h1 className="home-name">Abhinav</h1>
        </div>
        <div className="home-role-pill">Full Stack Developer &nbsp;/&nbsp; Photographer</div>
      </div>
      <div className="home-socials">
        <a href="https://www.linkedin.com/in/pasumarthy-abhinav-8695ba34a" className="home-icon-btn" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon /></a>
        <a href="https://github.com/abhii-navv" className="home-icon-btn" target="_blank" rel="noreferrer" title="GitHub"><GitHubIcon /></a>
        <a href="https://leetcode.com/u/abhii-navv/" className="home-icon-btn" target="_blank" rel="noreferrer" title="LeetCode"><LeetCodeIcon /></a>
        <a href="mailto:pasumarthyabhinav955@gmail.com" className="home-icon-btn" title="Email"><EmailIcon /></a>
      </div>
      <div className="home-right">
        <div className="home-oval">
          <img src="assets/images/profile.jpeg" alt="Pasumarthy Abhinav" />
        </div>
        <button className="home-worktag" onClick={() => onNav('contact')}>↳ &nbsp; Work with me today</button>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="page-inner">
      <p className="pg-label">Welcome</p>
      <h1 className="pg-title">About <em>Me</em></h1>
      <div className="hairline" />
      <div className="about-bio">
        <p>I am a Computer Science student with a strong interest in backend development, real-time systems, and building practical solutions through technology. My journey has been shaped by hands-on experiences — from developing projects to contributing to research work.</p>
        <p>I was part of a research team that worked on a LiDAR-based vehicle safety system designed to perform reliably even in adverse weather conditions, giving me exposure to real-time data processing and embedded systems.</p>
        <p>Alongside my technical interests, I explored photography through my college media club. What started casually grew into a passion — especially wildlife photography, where I enjoy capturing natural moments with patience and observation.</p>
        <p>I like combining creativity with technology — whether building systems or telling stories through visuals — and I'm continuously learning.</p>
      </div>
      <div className="skills-section">
        <h3>Skill Sets</h3>
        <div className="skill-groups">
          {[
            { label: 'Languages', skills: [
              { name: 'Java',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
              { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
              { name: 'C',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
              { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
              { name: 'HTML',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
              { name: 'CSS',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            ]},
            { label: 'Frameworks & Libraries', skills: [
              { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'Express',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
              { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Flask',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
              { name: 'OpenCV',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
              { name: 'NumPy',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
            ]},
            { label: 'Databases & Tools', skills: [
              { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
              { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
              { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
              { name: 'Linux',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
              { name: 'ROS2',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg' },
              { name: 'Jetson',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg' },
            ]},
            { label: 'Creative', skills: [
              { name: 'Lightroom',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
              { name: 'Photography',icon: null, emoji: '📷' },
              { name: 'Videography',icon: null, emoji: '🎬' },
              { name: 'Snapseed',   icon: null, emoji: '✨' },
            ]},
          ].map(g => (
            <div key={g.label} className="skill-group-row">
              <h4>{g.label}</h4>
              <div className="skill-icons">
                {g.skills.map(s => (
                  <div key={s.name} className="skill-icon-item">
                    {s.icon
                      ? <img src={s.icon} alt={s.name} className="skill-icon-img" />
                      : <span className="skill-icon-emoji">{s.emoji}</span>
                    }
                    <span className="skill-icon-label">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResumePage({ onOpenResume }) {
  return (
    <div className="page-inner">
      <p className="pg-label">My Journey</p>
      <h1 className="pg-title">Resume &amp; <em>Experience</em></h1>
      <div className="hairline" />
      <div className="resume-grid">
        <div>
          <div className="r-block">
            <h3>Education</h3>
            <div className="tl">
              {[
                { school:'Amrita Vishwa Vidyapeetham', degree:'B.Tech — Computer Science & Engineering', date:'Jul 2024 — Present · Coimbatore' },
                { school:'Narayana Junior College', degree:'Intermediate — MPC', date:'Jun 2022 — Apr 2024 · Hyderabad' },
                { school:'New Vision School', degree:'Secondary Education', date:'Jun 2021 — Apr 2022 · Khammam' },
              ].map(e => (
                <div key={e.school} className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <h4>{e.school}</h4>
                    <div className="tl-sub">{e.degree}</div>
                    <div className="tl-date">{e.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="r-block">
            <h3>Activities</h3>
            <div className="tl">
              <div className="tl-item"><div className="tl-dot" /><div className="tl-body">
                <h4>Team Media — Multimedia Club</h4>
                <div className="tl-sub">Executive Member · Photographer</div>
                <div className="tl-date">2024 — Present · Amrita Vishwa Vidyapeetham</div>
                <div className="tl-desc">Captured and edited photographs and videos for major college events, workshops, and technical fests. Collaborated with design and media teams to produce promotional content for social media platforms.</div>
              </div></div>
              <div className="tl-item"><div className="tl-dot" /><div className="tl-body">
                <h4>Anokha'26 — Annual TechFest</h4>
                <div className="tl-sub">WMD Member · Photographer & Videographer</div>
                <div className="tl-date">Dec 2025 — Jan 2026 · Amrita Vishwa Vidyapeetham</div>
                <div className="tl-desc">Captured and edited photographs and videos for the annual technical festival. Produced promotional content for social media and event documentation.</div>
              </div></div>
            </div>
          </div>
          <div className="r-block">
            <h3>Download</h3>
            <button className="dl-btn" onClick={onOpenResume}><DownloadIcon /> View Resume</button>
          </div>
        </div>
        <div>
          <div className="r-block">
            <h3>Research & Achievements</h3>
            <div className="ach-card">
              <h4>📄 Published Research Paper</h4>
              <div className="ach-title">"A Portable LiDAR-Based Adverse Weather Perception System for Four-Wheelers with Multi-Stage Denoising"</div>
              <p>Developed a portable, cost-effective LiDAR-based perception system for vehicle safety in adverse weather (rain, fog, dust). Uses a multi-stage denoising pipeline — voxel-grid downsampling, Statistical Outlier Removal (SOR), and RANSAC-based ground segmentation. Implemented on NVIDIA Jetson Orin Nano with ROS2, achieving <strong>91.7% detection accuracy</strong> and &lt;100 ms processing latency.</p>
              <a href="#" title="Link coming soon">View Paper →</a>
            </div>
          </div>
          <div className="r-block">
            <h3>Skill Proficiency</h3>
            <div className="skill-bars">
              {[
                { label:'Backend Development', level:'Advanced', pct:80 },
                { label:'Full Stack (MERN)', level:'Intermediate', pct:65 },
                { label:'Computer Vision / OpenCV', level:'Intermediate', pct:62 },
                { label:'Real-Time Systems / ROS2', level:'Intermediate', pct:58 },
                { label:'Photography & Editing', level:'Proficient', pct:78 },
              ].map(s => (
                <div key={s.label} className="sbar-row">
                  <div className="sbar-top"><span>{s.label}</span><span>{s.level}</span></div>
                  <div className="sbar-track"><div className="sbar-fill" style={{width:`${s.pct}%`}} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PROJECTS = {
  webdev: [
    {
      title:'AI Wildlife Photo Analyzer', cats:['webdev','backend'],
      desc:'AI-based web application using Python and Flask for wildlife image analysis and editing recommendations. Uses OpenCV and NumPy to evaluate brightness, blur, and image quality — then generates automated suggestions for Adobe Lightroom and Snapseed.',
      tags:['Python','Flask','OpenCV','NumPy','JavaScript'],
      links:[{label:'GitHub',href:'https://github.com/abhii-navv/Image-analyzer'},{label:'Live Demo',href:'https://image-analyzer-2.onrender.com/'}],
      date:'Apr–May 2026',
    },
    {
      title:'Stock Market Trading Web App', cats:['webdev','backend'],
      desc:'Full-stack stock trading platform with buy/sell functionality, portfolio tracking, secure user authentication, session management, and transaction history. Integrated stock news display with backend validation.',
      tags:['HTML/CSS','JavaScript','PHP','MySQL'],
      links:[{label:'GitHub',href:'https://github.com/HackstreetBoyzz/Stock-Market-Trading-web-Application'},{label:'Live Demo',href:'http://novacapital.42web.io/'}],
      date:'Feb–Apr 2025',
    },
  ],
  backend: [
    {
      title:'Task Manager API', cats:['backend','webdev'],
      desc:'Full-stack Task Management application built with Node.js, Express, and PostgreSQL. Features JWT authentication, role-based access control, complete CRUD operations, a React frontend with protected routes, and Swagger API documentation.',
      tags:['Node.js','Express','PostgreSQL','JWT','React','Swagger'],
      links:[{label:'GitHub',href:'https://github.com/abhii-navv/primetrade'}],
      date:'May 2026',
    },
  ],
  embedded: [
    {
      title:'Autonomous Robot Navigation System', cats:['embedded'],
      desc:'Autonomous mobile robot using Arduino UNO R4 WiFi, integrating ultrasonic and IR sensors for obstacle avoidance and path following. Features BLE manual control through a responsive web application.',
      tags:['Arduino C','Embedded Systems','BLE','Robotics','IR Sensors','Ultrasonic'],
      links:[{label:'GitHub',href:'https://github.com/HackstreetBoyzz/Autonomus-Robot-Navigation-System'}],
      date:'Sep–Nov 2025',
    },
  ],
  research: [
    {
      title:'LiDAR Adverse Weather Perception System', cats:['research','embedded'],
      desc:'Research-grade portable LiDAR system for vehicle safety in fog, rain, and dust. Multi-stage denoising pipeline (voxel-grid, SOR, RANSAC) deployed on NVIDIA Jetson Orin Nano using ROS2 — achieving 91.7% detection accuracy with <100 ms latency.',
      tags:['Python','ROS2','LiDAR','Embedded Systems','NVIDIA Jetson'],
      links:[],
      badge:'📄 Published Research',
      date:null,
    },
  ],
  java: [
    {
      title:'Uber Ride-Sharing Simulation', cats:['java'],
      desc:'Java-based ride-sharing simulation replicating user registration, driver assignment, and ride booking workflows. Applies core OOP principles — encapsulation, abstraction, inheritance — with a CLI-based interface.',
      tags:['Java','OOP','Data Structures','CLI'],
      links:[{label:'GitHub',href:'https://github.com/abhii-navv/Smart-Ride-Sharing-System'}],
      date:'Jan–Mar 2025',
    },
  ],
};

const CATEGORIES = [
  { key:'all', label:'All' },
  { key:'webdev', label:'Web Dev' },
  { key:'backend', label:'Backend' },
  { key:'embedded', label:'Embedded / Robotics' },
  { key:'research', label:'Research' },
  { key:'java', label:'Java / OOP' },
];

const CAT_HEADINGS = {
  webdev: '🌐 Web Development',
  backend: '⚙️ Backend & API',
  embedded: '🤖 Embedded Systems & Robotics',
  research: '🔬 Research',
  java: '☕ Java / OOP',
};

function ProjectCard({ p }) {
  return (
    <div className="proj-card">
      <h3>{p.title}</h3>
      <p dangerouslySetInnerHTML={{__html: p.desc}} />
      <div className="ptags">{p.tags.map(t => <span key={t} className="ptag">{t}</span>)}</div>
      <div className="plinks">
        {p.badge && <span className="pbadge">{p.badge}</span>}
        {p.links.map(l => (
          <a key={l.label} className="plink" href={l.href} target="_blank" rel="noreferrer">
            {l.label === 'GitHub' ? <GitHubIcon /> : <ExternalIcon />} {l.label}
          </a>
        ))}
        {p.date && <span className="proj-date">{p.date}</span>}
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const catKeys = ['webdev','backend','embedded','research','java'];

  return (
    <div className="page-inner">
      <p className="pg-label">What I've Built</p>
      <h1 className="pg-title">Projects &amp; <em>Work</em></h1>
      <div className="hairline" />
      <div className="proj-filters">
        {CATEGORIES.map(c => (
          <button key={c.key} className={`pf-btn${filter===c.key?' active':''}`} onClick={() => setFilter(c.key)}>{c.label}</button>
        ))}
      </div>
      {catKeys.map(cat => {
        const visible = filter === 'all' || filter === cat;
        if (!visible) return null;
        const cards = filter === 'all'
          ? PROJECTS[cat]
          : PROJECTS[cat].filter(p => p.cats.includes(filter));
        if (!cards.length) return null;
        return (
          <div key={cat}>
            <div className="proj-cat-heading">{CAT_HEADINGS[cat]}</div>
            <div className="proj-grid">{cards.map(p => <ProjectCard key={p.title} p={p} />)}</div>
          </div>
        );
      })}
    </div>
  );
}

function PhotographyPage() {
  return (
    <div className="page-inner">
      <p className="pg-label">Through the Lens</p>
      <h1 className="pg-title">Photography <em>Portfolio</em></h1>
      <div className="hairline" />
      <div className="photo-intro">
        <p>Photography came into my life gradually. I initially started taking pictures casually, but things changed when I got the opportunity to be part of my college media club team.</p>
        <p>Being in the media team helped me understand photography more seriously — learning composition, capturing moments during events, and working in real environments. That experience made me more passionate about photography and pushed me to explore it further.</p>
        <p>Over time, I developed a strong interest in wildlife photography. Capturing animals in their natural surroundings taught me patience, timing, and observation, making photography more meaningful to me.</p>
        <p>For me, photography is about capturing real moments and telling stories through simple, authentic frames.</p>
      </div>
      <div className="dome-wrap">
      <DomeGallery
  images={PHOTO_IMAGES}
  overlayBlurColor="#0c0b09"
  fit={0.7}
  minRadius={500}
  segments={28
    
  }
  dragDampening={2}
  grayscale={false}
  imageBorderRadius="14px"
  openedImageBorderRadius="14px"
  openedImageWidth="320px"
  openedImageHeight="420px"
/>
      </div>
      <div className="drive-bar">
        <p>These are just a few favourites. Explore my complete gallery — wildlife, college events, and more — on Google Drive.</p>
        <a className="drive-btn" href="#" target="_blank" rel="noreferrer"><DriveIcon /> Explore Full Gallery</a>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="page-inner">
      <p className="pg-label">Get In Touch</p>
      <h1 className="pg-title">Let's <em>Connect</em></h1>
      <div className="hairline" />
      <div className="contact-grid">
        <div>
          <p className="contact-intro">I'm always open to interesting conversations, collaborations, or opportunities. Whether it's a project, a research idea, or just a hello — reach out!</p>
          <a className="cdetail" href="mailto:pasumarthyabhinav955@gmail.com"><EmailIcon /> pasumarthyabhinav955@gmail.com</a>
          <a className="cdetail" href="tel:+917842426027"><PhoneIcon /> +91 78424 26027</a>
          <div className="cdetail"><LocationIcon /> Coimbatore, Tamil Nadu, India</div>
        </div>
        <div className="soc-cards">
          <a className="soc-card" href="https://www.linkedin.com/in/pasumarthy-abhinav-8695ba34a" target="_blank" rel="noreferrer">
            <LinkedInIcon /><div><span className="soc-lbl">LinkedIn</span><span className="soc-val">Pasumarthy Abhinav</span></div>
          </a>
          <a className="soc-card" href="https://github.com/abhii-navv" target="_blank" rel="noreferrer">
            <GitHubIcon /><div><span className="soc-lbl">GitHub</span><span className="soc-val">abhii-navv</span></div>
          </a>
          <a className="soc-card" href="https://leetcode.com/u/abhii-navv/" target="_blank" rel="noreferrer">
            <LeetCodeIcon /><div><span className="soc-lbl">LeetCode</span><span className="soc-val">abhii-navv</span></div>
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Sidebar ──────────────────────────────────────────────────
function Sidebar({ onNav, onOpenResume }) {
  return (
    <aside>
      <div className="side-photo">
        <img src="assets/images/profile.jpeg" alt="Pasumarthy Abhinav" />
      </div>
      <div>
        <div className="side-name">Pasumarthy Abhinav</div>
      </div>
      <div className="side-role">Full Stack Dev · Photographer</div>
      <div className="side-divider" />
      <div className="side-contacts">
        <a className="side-contact" href="mailto:pasumarthyabhinav955@gmail.com"><EmailIcon /> pasumarthyabhinav955@gmail.com</a>
        <a className="side-contact" href="tel:+917842426027"><PhoneIcon /> +91 78424 26027</a>
        <div className="side-contact"><LocationIcon /> Coimbatore, India</div>
      </div>
      <div className="side-divider" />
      <button className="side-dl" onClick={onOpenResume}><DownloadIcon /> Download Resume</button>
    </aside>
  );
}

// ── Main App ─────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState('home');
  const [resumeOpen, setResumeOpen] = useState(false);

  const goTo = useCallback((id) => {
    setPage(id);
    window.scrollTo({ top: 0 });
  }, []);

  const menuCloseRef = React.useRef(null);

  // Intercept StaggeredMenu item clicks for SPA navigation
  React.useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest('.sm-panel-item');
      if (!link) return;
      e.preventDefault();
      const label = link.querySelector('.sm-panel-itemLabel')?.textContent?.toLowerCase();
      if (label && PAGES.includes(label)) {
        goTo(label);
        // Trigger menu close by simulating toggle button click
        const toggleBtn = document.querySelector('.sm-toggle');
        if (toggleBtn) toggleBtn.click();
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [goTo]);

  // Logo click — navigate home
  React.useEffect(() => {
    const handler = (e) => {
      if (e.target.closest('.sm-logo')) { e.preventDefault(); goTo('home'); }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [goTo]);

  const isHome = page === 'home';

  return (
    <>
      {/* STAGGERED MENU */}
      <StaggeredMenu
        isFixed
        position="right"
        colors={['#2a1f0e', '#8B6F47']}
        accentColor="#c9a96e"
        menuButtonColor="#e9e9e9"
        openMenuButtonColor="#111"
        changeMenuColorOnOpen
        logoUrl="assets/images/logo.png"
        items={PAGES.map(p => ({
          label: p.charAt(0).toUpperCase() + p.slice(1),
          link: '#',
          ariaLabel: `Go to ${p}`,
          _page: p,
        }))}
        socialItems={[
          { label: 'LinkedIn', link: 'https://www.linkedin.com/in/pasumarthy-abhinav-8695ba34a' },
          { label: 'GitHub',   link: 'https://github.com/abhii-navv' },
          { label: 'LeetCode', link: 'https://leetcode.com/u/abhii-navv/' },
        ]}
        displaySocials
        displayItemNumbering
        onMenuOpen={() => {}}
        onMenuClose={() => {}}
        // Intercept nav link clicks via event delegation on the panel
        className="portfolio-menu"
      />

      {/* SHELL */}
      <div className={`shell${isHome?' shell--home':''}`}>
        {!isHome && <Sidebar onNav={goTo} onOpenResume={() => setResumeOpen(true)} />}
        <main className={`main-content${isHome?' main-home':''}`}>
          <div className={`page-wrap${page==='home'?' page-home-wrap':''}`}>
            {page === 'home'       && <HomePage onNav={goTo} />}
            {page === 'about'      && <AboutPage />}
            {page === 'resume'     && <ResumePage onOpenResume={() => setResumeOpen(true)} />}
            {page === 'projects'   && <ProjectsPage />}
            {page === 'photography'&& <PhotographyPage />}
            {page === 'contact'    && <ContactPage />}
          </div>
        </main>
      </div>

      {/* RESUME MODAL */}
      {resumeOpen && (
        <div className="modal" onClick={e => e.target === e.currentTarget && setResumeOpen(false)}>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setResumeOpen(false)}>×</button>
            <iframe src="assets/files/resume.pdf" title="Resume" style={{flex:1,width:'100%',border:'none',borderRadius:16,minHeight:'70vh'}} />
            <a href="assets/files/resume.pdf" download className="download-btn"><DownloadIcon /> Download Resume</a>
          </div>
        </div>
      )}
    </>
  );
}