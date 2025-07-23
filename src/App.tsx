import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHackerrank, FaStackOverflow, FaYoutube, FaMedium, FaChess, FaBook, FaCode, FaCloud, FaMobile, FaDatabase } from 'react-icons/fa';
import { SiLeetcode, SiAmazon, SiNotion } from 'react-icons/si';
import Simple3DBackground from './components/Simple3DBackground';
import MouseTrail from './components/MouseTrail';
import TypewriterText from './components/TypewriterText';
import './App.css';



const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
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

  const socialLinks = [
    { icon: FaLinkedin as React.ComponentType<{ className?: string }>, url: 'https://www.linkedin.com/in/aman-shekhar/', label: 'LinkedIn' },
    { icon: FaGithub as React.ComponentType<{ className?: string }>, url: 'https://github.com/TechnoBlogger14o3', label: 'GitHub' },
    { icon: FaHackerrank as React.ComponentType<{ className?: string }>, url: 'https://www.hackerrank.com/profile/Shekhar14', label: 'HackerRank' },
    { icon: SiLeetcode as React.ComponentType<{ className?: string }>, url: 'https://leetcode.com/u/AmanShekhar/', label: 'LeetCode' },
    { icon: FaStackOverflow as React.ComponentType<{ className?: string }>, url: 'https://stackoverflow.com/users/3469691/aman-shekhar', label: 'Stack Overflow' },
    { icon: FaYoutube as React.ComponentType<{ className?: string }>, url: 'https://www.youtube.com/@technoBlogger14o3/playlists', label: 'YouTube' },
    { icon: FaMedium as React.ComponentType<{ className?: string }>, url: 'https://shekhar14.medium.com/', label: 'Medium' },
    { icon: SiAmazon as React.ComponentType<{ className?: string }>, url: 'https://www.amazon.in/dp/B0CK628QCB', label: 'Amazon Book' },
    { icon: SiNotion as React.ComponentType<{ className?: string }>, url: 'https://notionpress.com/author/867', label: 'Notion Press' },
    { icon: FaChess as React.ComponentType<{ className?: string }>, url: 'https://topmate.io/aman_shekhar', label: 'Topmate' },
  ];

  const skills = [
    {
      category: 'Mobile Development',
      icon: FaMobile as React.ComponentType<{ className?: string }>,
      items: ['Kotlin', 'Swift', 'Java', 'Android SDK', 'SwiftUI', 'Jetpack Compose', 'React Native']
    },
    {
      category: 'Frontend & Backend',
      icon: FaCode as React.ComponentType<{ className?: string }>,
      items: ['TypeScript', 'JavaScript', 'Python', 'Node.js', 'Spring Boot', 'React']
    },
    {
      category: 'Cloud & DevOps',
      icon: FaCloud as React.ComponentType<{ className?: string }>,
      items: ['AWS (S3, Lambda, EC2, CloudWatch)', 'Firebase', 'GitHub Actions', 'Docker', 'AWS Amplify']
    },
    {
      category: 'Databases & APIs',
      icon: FaDatabase as React.ComponentType<{ className?: string }>,
      items: ['Firebase Realtime DB', 'Firestore', 'REST APIs', 'GraphQL', 'CoreData', 'Realm']
    }
  ];

  const experiences = [
    {
      title: 'Mobile App Developer',
      company: 'Professional Experience',
      period: 'Current',
      description: 'Specialized in Android and iOS development with expertise in modern frameworks and architectures.',
      technologies: ['Kotlin', 'Swift', 'Jetpack Compose', 'SwiftUI', 'MVVM', 'Clean Architecture']
    },
    {
      title: 'Full Stack Developer',
      company: 'Freelance & Projects',
      period: 'Ongoing',
      description: 'Building end-to-end solutions with cloud integration and modern web technologies.',
      technologies: ['React Native', 'Node.js', 'AWS', 'Firebase', 'TypeScript']
    }
  ];

  const projects = [
    {
      title: 'Mobile Applications',
      description: 'Developed multiple mobile apps using Kotlin, Swift, and React Native with modern architectures.',
      tech: ['Kotlin', 'Swift', 'React Native', 'Firebase']
    },
    {
      title: 'Cloud Solutions',
      description: 'Implemented cloud-based solutions using AWS services and Firebase for scalable applications.',
      tech: ['AWS', 'Firebase', 'Lambda', 'S3']
    },
    {
      title: 'Chess & Tech Blog',
      description: 'Author of technical content and chess strategy, published on Medium and Amazon.',
      tech: ['Content Creation', 'Technical Writing', 'Chess Strategy']
    }
  ];

  return (
    <div className="App">
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
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
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
                text="Mobile App Developer & Tech Enthusiast" 
                speed={80}
                delay={1000}
              />
            </h2>
            <p className="hero-description">
              Weaving technology, chess, and the written word into innovative mobile experiences. 
              Passionate about creating elegant solutions that bridge the digital and human worlds.
            </p>
            <div className="hero-buttons">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
                onClick={() => scrollToSection('projects')}
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
            <p>My journey through technology, chess, and writing</p>
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
                My life story weaves a rich tapestry from the intricate threads of technology, chess, and the written word. 
                As a Mobile App Developer, I specialize in creating seamless user experiences across Android and iOS platforms.
              </p>
              <p>
                When I'm not coding, you'll find me strategizing on the chessboard or crafting technical content that bridges 
                the gap between complex concepts and practical implementation.
              </p>
              <div className="current-goals">
                <h3>Current Goals</h3>
                <ul>
                  <li>Complete AWS certification and master System Design</li>
                  <li>Achieve a FIDE chess rating</li>
                  <li>Publish a comprehensive chess + tech blog series</li>
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
              <div className="stat-card">
                {/* @ts-ignore */}
                <FaCode className="stat-icon" />
                <h3>5+</h3>
                <p>Programming Languages</p>
              </div>
              <div className="stat-card">
                {/* @ts-ignore */}
                <FaMobile className="stat-icon" />
                <h3>3+</h3>
                <p>Mobile Frameworks</p>
              </div>
              <div className="stat-card">
                {/* @ts-ignore */}
                <FaCloud className="stat-icon" />
                <h3>2+</h3>
                <p>Cloud Platforms</p>
              </div>
              <div className="stat-card">
                {/* @ts-ignore */}
                <FaBook className="stat-icon" />
                <h3>1</h3>
                <p>Published Book</p>
              </div>
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-category"
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
                  <h4>{exp.company}</h4>
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
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="project-card"
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
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
