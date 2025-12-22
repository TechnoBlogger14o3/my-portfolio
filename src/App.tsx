import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHackerrank, FaStackOverflow, FaYoutube, FaMedium, FaChess, FaBook, FaCode, FaCloud, FaMobile, FaDatabase } from 'react-icons/fa';
import { SiLeetcode, SiAmazon, SiNotion } from 'react-icons/si';
import Simple3DBackground from './components/Simple3DBackground';
import MouseTrail from './components/MouseTrail';
import TypewriterText from './components/TypewriterText';
import ScrollProgress from './components/ScrollProgress';
import AnimatedCounter from './components/AnimatedCounter';
import './App.css';



const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'tutorials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  const socialLinks = [
    { icon: FaLinkedin as React.ComponentType<{ className?: string }>, url: 'https://www.linkedin.com/in/aman-shekhar/', label: 'LinkedIn' },
    { icon: FaGithub as React.ComponentType<{ className?: string }>, url: 'https://github.com/TechnoBlogger14o3', label: 'GitHub' },
    { icon: FaHackerrank as React.ComponentType<{ className?: string }>, url: 'https://www.hackerrank.com/profile/Shekhar14', label: 'HackerRank' },
    { icon: SiLeetcode as React.ComponentType<{ className?: string }>, url: 'https://leetcode.com/u/AmanShekhar/', label: 'LeetCode' },
    { icon: FaStackOverflow as React.ComponentType<{ className?: string }>, url: 'https://stackoverflow.com/users/3469691/aman-shekhar', label: 'Stack Overflow' },
    { icon: FaYoutube as React.ComponentType<{ className?: string }>, url: 'https://www.youtube.com/@technoBlogger14o3/playlists', label: 'YouTube' },
    { icon: FaMedium as React.ComponentType<{ className?: string }>, url: 'https://shekhar14.medium.com/', label: 'Medium' },
    { icon: SiAmazon as React.ComponentType<{ className?: string }>, url: 'https://www.amazon.in/dp/B0DK258DF5?binding=kindle_edition&ref=dbs_dp_rwt_sb_pc_tkin', label: 'Amazon Books' },
    { icon: SiNotion as React.ComponentType<{ className?: string }>, url: 'https://notionpress.com/author/867', label: 'Notion Press' },
    { icon: FaChess as React.ComponentType<{ className?: string }>, url: 'https://topmate.io/aman_shekhar', label: 'Topmate' },
  ];

  const skills = [
    {
      category: 'Platforms',
      icon: FaMobile as React.ComponentType<{ className?: string }>,
      items: ['Android', 'iOS', 'Web']
    },
    {
      category: 'Languages & Frameworks',
      icon: FaCode as React.ComponentType<{ className?: string }>,
      items: ['Java', 'Kotlin', 'SwiftUI', 'React-Native', 'React JS', 'Redux', 'Javascript', 'Typescript']
    },
    {
      category: 'Tools & Technologies',
      icon: FaCloud as React.ComponentType<{ className?: string }>,
      items: ['Git/GitHub/Bitbucket', 'Android Studio', 'XCode', 'VS Code', 'Jira', 'Figma', 'Zeplin']
    },
    {
      category: 'Others',
      icon: FaDatabase as React.ComponentType<{ className?: string }>,
      items: ['App Performance', 'Agile Methodology', 'Scrum', 'Firebase', 'Tailwind', 'Bootstrap']
    }
  ];

  const experiences = [
    {
      title: 'FullStack Engineer (Android, iOS, React-Native)',
      company: 'Boeing',
      location: 'Bengaluru',
      period: 'June 2024 - Present',
      description: 'Responsible for Mobile and Web app development using React JS, Node JS, React-Native, TypeScript',
      technologies: ['React JS', 'Node JS', 'React-Native', 'TypeScript']
    },
    {
      title: 'Lead Engineer (Android, iOS, React-Native)',
      company: 'Bluesheets',
      location: 'Singapore',
      period: 'Feb 2023 - May 2024',
      description: 'Improved Core Architecture and App performance by 25%. Built Offline support feature and increased App Stability by 20%. Reduced APK from 21 MB to 9.8 MB.',
      technologies: ['Android', 'iOS', 'React-Native', 'Performance Optimization', 'Modular Architecture']
    },
    {
      title: 'Lead Engineer (Android, iOS, React-Native)',
      company: 'Dhani',
      location: 'Gurugram',
      period: 'Oct 2021 - Feb 2023',
      description: 'Spearheaded UI Library development, built features increasing user engagement by 20%. Complete app revamp using MVVM with Clean Architecture. Achieved 99.97% crash-free session rate.',
      technologies: ['Kotlin', 'MVVM', 'Clean Architecture', 'Memory Optimization', 'UI Library']
    },
    {
      title: 'Lead Engineer (Android, iOS, React-Native)',
      company: 'Freecharge',
      location: 'Gurugram',
      period: 'Jul 2020 - Sep 2021',
      description: 'Developed features end-to-end, created React-Native plugins, implemented RSA/AES encryption and Fingerprint authentication for secure payments.',
      technologies: ['React-Native', 'RSA/AES Encryption', 'Fingerprint Authentication', 'Payment Security']
    },
    {
      title: 'Senior Software Engineer (Android)',
      company: 'Photon Infotech',
      location: 'Bengaluru',
      period: 'Oct 2017 - Jun 2020',
      description: 'Worked on Health Sector apps (Sentara and Optima), optimized code, revamped to MVVM architecture, created high-quality optimized products.',
      technologies: ['Android', 'MVVM', 'Health Apps', 'Code Optimization']
    },
    {
      title: 'Software Engineer (Android)',
      company: 'eSecForte Technology',
      location: 'Bengaluru',
      period: 'June 2014 - Sep 2017',
      description: 'Developed various apps including ANI News, Fingertips Education app, and Essential Newborn Care APP.',
      technologies: ['Android', 'News Apps', 'Education Apps', 'Healthcare Apps']
    }
  ];

  const majorProjects = [
    {
      title: 'Bluesheets',
      description: 'Contributed to designing comprehensive front-end architecture and collaborated with project management teams to incorporate new requirements.',
      tech: ['React-Native', 'Frontend Architecture', 'Project Management'],
      appStore: 'https://apps.apple.com/in/app/bluesheets/id1634779626/',
      playStore: 'https://play.google.com/store/apps/details?id=com.bluesheets&pli=1'
    },
    {
      title: 'Dhani',
      description: 'Led development of features that increased user engagement by 20%. Addressed memory optimization issues and improved app stability.',
      tech: ['Kotlin', 'MVVM', 'Memory Optimization', 'User Engagement'],
      appStore: 'https://apps.apple.com/in/app/dhani-online-shopping-app/id1273192455',
      playStore: 'https://play.google.com/store/apps/details?id=com.indiaBulls'
    },
    {
      title: 'Freecharge Business',
      description: 'Improved application performance through optimization techniques and played a key role in overseeing React-Native module flow.',
      tech: ['React-Native', 'Performance Optimization', 'Payment Integration'],
      appStore: 'https://apps.apple.com/us/app/freecharge-upi-credit-cards/id877495926',
      playStore: 'https://play.google.com/store/apps/details?id=com.freecharge.android'
    },
    {
      title: 'Sentara Healthcare',
      description: 'Successfully integrated Video Calling Feature and actively engaged in scrum meetings for effective project management.',
      tech: ['Android', 'Video Calling', 'Healthcare', 'Scrum'],
      playStore: 'https://play.google.com/store/apps/details?id=com.sentara.android'
    }
  ];

  const otherProjects = [
    {
      title: 'ANI News',
      description: 'Integral to the inception and development of this project, contributing to its creation from the ground up.',
      tech: ['Android', 'News App', 'Content Management'],
      playStore: 'https://play.google.com/store/apps/details?id=com.ani.news'
    },
    {
      title: 'Fingertips',
      description: 'Played a pivotal role in the conception and development of the Fingertips project, actively contributing to its creation from the very beginning.',
      tech: ['Android', 'Education App', 'Student Portal'],
      playStore: 'https://play.google.com/store/apps/details?id=com.fingertips'
    }
  ];

  const tutorials = [
    {
      title: 'React Native Tutorial',
      description: 'Comprehensive guide to building cross-platform mobile applications with React Native. Learn from basics to advanced concepts.',
      tech: ['React Native', 'JavaScript', 'Mobile Development'],
      githubUrl: 'https://github.com/TechnoBlogger14o3/react-native-tutorials',
      icon: FaMobile as React.ComponentType<{ className?: string }>
    },
    {
      title: 'React Web Tutorial',
      description: 'Complete tutorial series on building modern web applications with React. Covers hooks, routing, state management, and more.',
      tech: ['React', 'JavaScript', 'Web Development'],
      githubUrl: 'https://github.com/TechnoBlogger14o3/react-web-tutorials',
      icon: FaCode as React.ComponentType<{ className?: string }>
    },
    {
      title: 'React Three Fiber Tutorial',
      description: 'Learn 3D graphics and interactive experiences in React using React Three Fiber. Build stunning 3D web applications.',
      tech: ['React Three Fiber', 'Three.js', '3D Graphics'],
      githubUrl: 'https://github.com/TechnoBlogger14o3/react-three-fiber-tutorials',
      icon: FaCloud as React.ComponentType<{ className?: string }>
    },
    {
      title: 'Python Tutorial',
      description: 'Master Python programming from fundamentals to advanced topics. Includes data structures, algorithms, and best practices.',
      tech: ['Python', 'Programming', 'Algorithms'],
      githubUrl: 'https://github.com/TechnoBlogger14o3/python-tutorial',
      icon: FaDatabase as React.ComponentType<{ className?: string }>
    }
  ];

  return (
    <div className="App">
      <ScrollProgress />
      <MouseTrail />
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <motion.div 
          className="nav-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="nav-logo">
            {/* @ts-ignore */}
            <FaCode className="logo-icon" />
            <span>Aman Shekhar</span>
          </div>
          <div className="nav-links">
            {['home', 'about', 'skills', 'experience', 'projects', 'tutorials', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <Simple3DBackground />
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Aman Shekhar</span>
            </h1>
            <h2 className="hero-subtitle">
              <TypewriterText 
                text="Lead Engineer with 11+ Years of Experience" 
                speed={80}
                delay={1000}
              />
            </h2>
            <p className="hero-description">
              Lead Engineer with 11+ years of experience in Mobile App Development. 
              Specialized in Android, iOS, and React-Native with expertise in performance optimization and modern architectures.
            </p>
            <div className="hero-buttons">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 215, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary ripple-button"
                onClick={(e) => {
                  createRipple(e);
                  scrollToSection('contact');
                }}
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary ripple-button"
                onClick={(e) => {
                  createRipple(e);
                  scrollToSection('projects');
                }}
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-visual"
          >
            <div className="floating-icons">
              {/* @ts-ignore */}
              <FaMobile className="floating-icon" style={{ animationDelay: '0s' }} />
              {/* @ts-ignore */}
              <FaCode className="floating-icon" style={{ animationDelay: '1s' }} />
              {/* @ts-ignore */}
              <FaCloud className="floating-icon" style={{ animationDelay: '2s' }} />
              {/* @ts-ignore */}
              <FaChess className="floating-icon" style={{ animationDelay: '3s' }} />
              {/* @ts-ignore */}
              <FaBook className="floating-icon" style={{ animationDelay: '4s' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>About Me</h2>
            <p>Lead Engineer with 11+ years of experience in Mobile App Development</p>
          </motion.div>
          
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="about-text"
            >
              <p>
                I am a Lead Engineer with 11+ years of experience in Mobile App Development, specializing in Android, iOS, and React-Native. 
                Throughout my career, I've worked with companies like Boeing, Bluesheets, Dhani, and Freecharge, delivering high-quality mobile applications.
              </p>
              <p>
                My expertise includes performance optimization, architecture design, and building scalable mobile solutions. 
                I've successfully improved app performance by 25%, reduced APK sizes, and achieved 99.97% crash-free session rates.
              </p>
              <div className="current-goals">
                <h3>Key Achievements</h3>
                <ul>
                  <li>Improved Core Architecture and App performance by 25%</li>
                  <li>Reduced APK size from 21 MB to 9.8 MB</li>
                  <li>Achieved 99.97% crash-free session rate</li>
                  <li>Built features increasing user engagement by 20%</li>
                </ul>
              </div>
              <div className="education">
                <h3>Education</h3>
                <p><strong>Master of Computer Application</strong> - Greater Noida Institute of Technology (2011 - 2014)</p>
                <p><strong>Bachelor of Arts</strong> - Nalanda Open University (2007 - 2011)</p>
              </div>
              <div className="extra-activities">
                <h3>Extra-Curricular Activities</h3>
                <ul>
                  <li>Actively write technical blog posts on <a href="https://shekhar14.medium.com" target="_blank" rel="noopener noreferrer">Medium</a> and contribute to <a href="https://github.com/TechnoBlogger14o3" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li>Author of "The Manas Saga: Mysteries of the Ancients" trilogy - <a href="https://www.amazon.in/dp/B0CK628QCB" target="_blank" rel="noopener noreferrer">Book 1</a> and <a href="https://www.amazon.in/Manas-Quest-Karans-Mysteries-Ancients-ebook/dp/B0DJYK83DD" target="_blank" rel="noopener noreferrer">Book 2</a> available on Amazon</li>
                  <li>Consistently contribute to problem-solving challenges on <a href="https://www.hackerrank.com/profile/Shekhar14/" target="_blank" rel="noopener noreferrer">HackerRank</a> and <a href="https://leetcode.com/AmanShekhar/" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
                  <li>Share solutions and tutorials on my <a href="https://www.youtube.com/@technoBlogger14o3" target="_blank" rel="noopener noreferrer">YouTube channel</a></li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="about-stats"
            >
              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* @ts-ignore */}
                <FaCode className="stat-icon" />
                <h3><AnimatedCounter value={11} suffix="+" /></h3>
                <p>Years Experience</p>
              </motion.div>
              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* @ts-ignore */}
                <FaMobile className="stat-icon" />
                <h3><AnimatedCounter value={15} suffix="+" /></h3>
                <p>Mobile Apps</p>
              </motion.div>
              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* @ts-ignore */}
                <FaCloud className="stat-icon" />
                <h3><AnimatedCounter value={6} /></h3>
                <p>Companies</p>
              </motion.div>
              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* @ts-ignore */}
                <FaBook className="stat-icon" />
                <h3><AnimatedCounter value={2} /></h3>
                <p>Published Books</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Skills & Expertise</h2>
            <p>Technologies and frameworks I work with</p>
          </motion.div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-category interactive-skill-card"
              >
                <div className="skill-header">
                  <skill.icon className="skill-icon" />
                  <h3>{skill.category}</h3>
                </div>
                <div className="skill-items">
                  {skill.items.map((item) => (
                    <span key={item} className="skill-item">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Experience</h2>
            <p>My professional journey</p>
          </motion.div>
          
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="experience-content">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company} • {exp.location}</h4>
                  <span className="period">{exp.period}</span>
                  <p>{exp.description}</p>
                  <div className="tech-stack">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Projects & Achievements</h2>
            <p>Some of my recent work and accomplishments</p>
          </motion.div>
          
          <div className="projects-grid">
            {majorProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="project-card interactive-card"
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="app-store-links">
                  {project.appStore && (
                    <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="app-store-link">
                      📱 App Store
                    </a>
                  )}
                  {project.playStore && (
                    <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="app-store-link">
                      📱 Play Store
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="project-card interactive-card"
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="app-store-links">
                  {project.playStore && (
                    <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="app-store-link">
                      📱 Play Store
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Tutorials & Learning Resources</h2>
            <p>Comprehensive tutorials I've created to help developers learn and grow</p>
          </motion.div>
          
          <div className="tutorials-grid">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="tutorial-card"
              >
                <div className="tutorial-header">
                  <tutorial.icon className="tutorial-icon" />
                  <h3>{tutorial.title}</h3>
                </div>
                <p>{tutorial.description}</p>
                <div className="tutorial-tech">
                  {tutorial.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a 
                  href={tutorial.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="tutorial-link"
                >
                  {/* @ts-ignore */}
                  <FaGithub className="github-icon" />
                  <span>View on GitHub</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Get In Touch</h2>
            <p>Let's connect and create something amazing together</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="social-links"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* @ts-ignore */}
                <link.icon className="social-icon" />
                <span>{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Aman Shekhar. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
