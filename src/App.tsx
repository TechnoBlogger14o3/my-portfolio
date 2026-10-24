import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHackerrank, FaStackOverflow, FaYoutube, FaMedium, FaChess, FaBook, FaCode, FaCloud, FaMobile, FaDatabase } from 'react-icons/fa';
import { SiLeetcode, SiAmazon, SiNotion } from 'react-icons/si';
import ScrollProgress from './components/ScrollProgress';
import AnimatedCounter from './components/AnimatedCounter';
import HeroIllustration from './components/HeroIllustration';
import MobileMenu from './components/MobileMenu';
import BackToTop from './components/BackToTop';
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
      title: 'Boeing: Lead Full Stack Engineer',
      employment: 'Full-time',
      location: 'Bengaluru, Karnataka, India',
      arrangement: 'Hybrid',
      period: 'Jun 2024 – Present',
      duration: '2 yrs 5 mos',
      summary: 'Architecting and delivering full-stack mobile and web solutions at one of the world\'s leading aerospace companies.',
      highlights: [
        'Build and maintain scalable applications using React, Node.js, and React Native, serving internal and enterprise users',
        'Design modular frontend architectures that improve code maintainability, team velocity, and long-term scalability',
        'Implement high-performance UI rendering and optimised API communication to ensure smooth cross-platform experiences',
        'Drive technical decisions in collaboration with product, design, and backend engineering teams',
        'Apply mobile-first engineering principles to web platforms, bridging React Native and React ecosystems'
      ],
      technologies: ['Full-Stack Development', 'React', 'Node.js', 'React Native']
    },
    {
      title: 'Bluesheets: Lead Mobile App Engineer (Android & iOS)',
      employment: 'Full-time',
      location: 'Singapore',
      arrangement: 'Remote',
      period: 'Feb 2023 – May 2024',
      duration: '1 yr 4 mos',
      summary: 'Led mobile engineering for Bluesheets, a Singapore-based enterprise fintech platform, delivering Android and iOS applications used by financial institutions across Asia.',
      highlights: [
        'Spearheaded end-to-end development of Android and iOS mobile applications, owning architecture, implementation, and release cycles',
        'Designed scalable cross-platform mobile architecture using React Native, Kotlin, and Swift — enabling rapid feature delivery across both platforms',
        'Drove significant performance improvements and stability enhancements, reducing crash rates and improving app responsiveness',
        'Delivered high-quality, robust applications supporting complex enterprise financial workflows and real-time data processing',
        'Led and mentored a mobile engineering team, establishing best practices for code review, testing, and CI/CD pipelines'
      ],
      technologies: ['React Native', 'Kotlin', 'Swift', 'Redux.js', 'Scrum']
    },
    {
      title: 'Dhani: Lead Mobile App Engineer (Android & iOS)',
      employment: 'Full-time',
      location: 'Gurugram, Haryana, India',
      arrangement: 'Remote',
      period: 'Oct 2021 – Feb 2023',
      duration: '1 yr 5 mos',
      summary: 'Led mobile engineering for Dhani, one of India\'s leading fintech super-apps, building Android and iOS products serving millions of users in the lending, insurance, and payments space.',
      highlights: [
        'Architected and maintained mobile application infrastructure for Android and iOS fintech products, ensuring reliability at scale',
        'Improved application stability and crash-free rate through proactive monitoring, crash analysis, and systematic bug resolution',
        'Implemented scalable mobile architecture patterns capable of supporting large, rapidly growing user traffic',
        'Collaborated with product and backend teams to deliver new features on aggressive timelines without compromising quality',
        'Established performance benchmarks and monitoring processes to maintain a high-quality user experience'
      ],
      technologies: ['Android', 'iOS', 'Redux.js', 'Scrum'],
      links: [
        { label: 'App Store', href: 'https://apps.apple.com/in/app/dhani-online-shopping-app/id1273192455' },
        { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.indiaBulls' }
      ]
    },
    {
      title: 'Freecharge: Lead Mobile App Engineer (Android & iOS)',
      employment: 'Full-time',
      location: 'Gurugram, Haryana, India',
      arrangement: 'Remote',
      period: 'Jul 2020 – Oct 2021',
      duration: '1 yr 4 mos',
      summary: 'Led mobile engineering at Freecharge, one of India\'s pioneering digital payments and fintech platforms, building high-traffic Android and iOS applications.',
      highlights: [
        'Led development of high-traffic fintech mobile applications serving millions of active users on the Freecharge platform',
        'Optimised application performance and significantly reduced APK size, directly improving install conversion rates and app store ranking',
        'Improved installation rates and overall user experience through systematic performance tuning and UX enhancements',
        'Drove stability improvements and reduced crash rates through rigorous testing, crash reporting, and root cause analysis',
        'Worked closely with product and backend teams to ship payments and financial features on tight release schedules'
      ],
      technologies: ['Android', 'iOS', 'Redux.js', 'Scrum']
    },
    {
      title: 'Photon: Senior Software Engineer (Android & iOS)',
      employment: 'Full-time',
      location: 'Bangalore',
      arrangement: 'On-site',
      period: 'Oct 2017 – Jun 2020',
      duration: '2 yrs 9 mos',
      summary: 'Built high-impact Android and iOS applications at Photon, a global digital transformation and product engineering company, delivering solutions for enterprise clients.',
      highlights: [
        'Built high-performance, feature-rich Android applications with a strong focus on responsiveness, battery efficiency, and clean architecture',
        'Integrated external APIs and third-party services to enhance app capabilities and deliver rich user experiences',
        'Collaborated closely with product managers, designers, and backend teams to deliver new features from concept to production',
        'Contributed to code review culture and shared best practices across the mobile team',
        'Gained deep expertise in native Android development, Kotlin, and cross-platform mobile patterns'
      ],
      technologies: ['Android', 'Kotlin', 'iOS', 'Scrum'],
      links: [
        { label: 'Sentara', href: 'https://play.google.com/store/apps/details?id=com.sentara.android' }
      ]
    },
    {
      title: 'eSecForte Technology: Android Application Developer',
      employment: 'Full-time',
      location: 'Bangalore',
      arrangement: '',
      period: 'Jun 2014 – Sep 2017',
      duration: '3 yrs 4 mos',
      summary: 'Started my engineering career at eSecForte Technology, a cybersecurity and software company, where I laid the foundation for my expertise in Android, iOS, and React Native development.',
      highlights: [
        'Reduced Android APK size by 53%, significantly improving download rates and device storage efficiency',
        'Improved overall application performance by 25% through systematic profiling and code optimisation',
        'Achieved 99.97% crash-free sessions through rigorous testing, memory management, and stability fixes',
        'Designed and implemented offline-first architecture for robust app behaviour in low-connectivity environments',
        'Led development across Android, iOS, and React Native, building strong foundations in cross-platform mobile engineering'
      ],
      technologies: ['Android', 'iOS', 'React Native'],
      links: [
        { label: 'ANI News', href: 'https://play.google.com/store/apps/details?id=com.ani.news' },
        { label: 'Fingertips', href: 'https://play.google.com/store/apps/details?id=com.fingertips' }
      ]
    }
  ];

  const projects = [
    {
      title: 'Bluesheets',
      description: 'Front-end architecture for Android and iOS apps used by financial institutions, with new requirements folded in alongside the project team.',
      tech: ['React Native', 'Kotlin', 'Swift'],
      appStore: 'https://apps.apple.com/in/app/bluesheets/id1634779626/',
      playStore: 'https://play.google.com/store/apps/details?id=com.bluesheets&pli=1'
    },
    {
      title: 'Dhani',
      description: 'Features on a fintech super-app that raised user engagement by 20%, plus memory work that improved stability.',
      tech: ['Kotlin', 'MVVM', 'Android', 'iOS'],
      appStore: 'https://apps.apple.com/in/app/dhani-online-shopping-app/id1273192455',
      playStore: 'https://play.google.com/store/apps/details?id=com.indiaBulls'
    },
    {
      title: 'Freecharge',
      description: 'Performance work and React Native module flow on a high-traffic UPI and bill-payments app.',
      tech: ['React Native', 'Android', 'iOS'],
      appStore: 'https://apps.apple.com/in/app/freecharge-upi-bill-payments/id877495926',
      playStore: 'https://play.google.com/store/apps/details?id=com.freecharge.android'
    },
    {
      title: 'Sentara Healthcare',
      description: 'Video calling integrated into the Sentara Android app, delivered through the scrum cycle.',
      tech: ['Android', 'Video Calling', 'Healthcare'],
      playStore: 'https://play.google.com/store/apps/details?id=com.sentara.android'
    },
    {
      title: 'ANI News',
      description: 'News app built from the first version, covering the Android client and how stories reach the reader.',
      tech: ['Android', 'News'],
      playStore: 'https://play.google.com/store/apps/details?id=com.ani.news'
    },
    {
      title: 'Fingertips',
      description: 'Education app for students, taken from the first concept through the Android release.',
      tech: ['Android', 'Education'],
      playStore: 'https://play.google.com/store/apps/details?id=com.fingertips'
    },
    {
      title: 'Dharmic Treasures',
      description: 'A React site for cultural and spiritual writing. The repository and the live site are both public.',
      tech: ['React', 'Web'],
      website: 'https://dharmic-treasures.com/',
      githubUrl: 'https://github.com/TechnoBlogger14o3/dharmic-treasures'
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

  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'tutorials', 'contact'];

  return (
    <div className="App">
      <ScrollProgress />
      <BackToTop />
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
            {sections.map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          <MobileMenu 
            sections={sections}
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Aman Shekhar</span>
            </h1>
            <h2 className="hero-subtitle">
              Lead Engineer with 12+ Years of Experience
            </h2>
            <p className="hero-description">
              Lead Engineer with 12+ years of experience delivering high-performance mobile applications. 
              I help companies build scalable, efficient mobile solutions that drive business growth. 
              Specialized in React Native, Android, iOS, and modern architectures.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              <button
                className="btn-secondary"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </button>
              <a
                className="btn-secondary"
                href={`${process.env.PUBLIC_URL}/resume.html`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-visual"
          >
            <div className="hero-visual-content">
              <HeroIllustration />
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
            <p>Lead Engineer with 12+ years of experience in Mobile App Development</p>
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
                I am a Lead Engineer with 12+ years of experience in Mobile App Development, specializing in Android, iOS, and React-Native. 
                Throughout my career, I've worked with companies like Boeing, Bluesheets, Dhani, and Freecharge, delivering high-quality mobile applications.
              </p>
              <p>
                My expertise includes performance optimization, architecture design, and building scalable mobile solutions. 
                I've reduced Android APK size by 53%, improved application performance by 25%, and reached 99.97% crash-free sessions.
              </p>
              <div className="current-goals">
                <h3>Key Achievements</h3>
                <ul>
                  <li>Reduced Android APK size by 53%</li>
                  <li>Improved application performance by 25%</li>
                  <li>Achieved 99.97% crash-free sessions</li>
                  <li>Designed an offline-first architecture for low-connectivity use</li>
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
              >
                {/* @ts-ignore */}
                <FaCode className="stat-icon" />
                <h3><AnimatedCounter value={12} suffix="+" /></h3>
                <p>Years Experience</p>
              </motion.div>
              <motion.div 
                className="stat-card"
              >
                {/* @ts-ignore */}
                <FaMobile className="stat-icon" />
                <h3><AnimatedCounter value={15} suffix="+" /></h3>
                <p>Mobile Apps</p>
              </motion.div>
              <motion.div 
                className="stat-card"
              >
                {/* @ts-ignore */}
                <FaCloud className="stat-icon" />
                <h3><AnimatedCounter value={6} /></h3>
                <p>Companies</p>
              </motion.div>
              <motion.div 
                className="stat-card"
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
                className="experience-item"
              >
                <div className="experience-content">
                  <h3>{exp.title}</h3>
                  <p className="experience-meta">
                    <span>{exp.employment}</span>
                    <span>{exp.period} · {exp.duration}</span>
                    <span>{exp.arrangement ? `${exp.location} · ${exp.arrangement}` : exp.location}</span>
                  </p>
                  <p>{exp.summary}</p>
                  <ul className="experience-points">
                    {exp.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="tech-stack">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {exp.links && (
                    <div className="app-store-links">
                      {exp.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="app-store-link">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
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
            <h2>Projects</h2>
            <p>Apps shipped on Android and iOS, plus a public site.</p>
          </motion.div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                  {'website' in project && project.website && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="app-store-link">
                      Website
                    </a>
                  )}
                  {'githubUrl' in project && project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="app-store-link">
                      {/* @ts-ignore */}
                      <FaGithub className="github-icon-small" />
                      GitHub
                    </a>
                  )}
                  {'appStore' in project && project.appStore && (
                    <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="app-store-link">
                      App Store
                    </a>
                  )}
                  {'playStore' in project && project.playStore && (
                    <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="app-store-link">
                      Play Store
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
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
      <section id="contact" className="section contact-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Ready to Build Something Great?</h2>
            <p>Let's discuss how I can help bring your mobile app vision to life</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="cta-box"
          >
            <h3>Looking for a Mobile and Web Developer?</h3>
            <p>I specialize in building high-performance, scalable mobile and web applications that deliver exceptional user experiences. With 12+ years of experience and a track record of success at companies like Boeing, Bluesheets, and Dhani, I can help you:</p>
            <ul className="cta-features">
              <li>Build cross-platform mobile apps with React Native</li>
              <li>Develop modern web applications with React and TypeScript</li>
              <li>Optimize app performance and reduce crash rates</li>
              <li>Implement modern architectures and best practices</li>
              <li>Deliver production-ready applications on time</li>
            </ul>
            <button
              className="btn-primary cta-button"
              onClick={() => window.open('https://www.linkedin.com/in/aman-shekhar/', '_blank')}
            >
              Let's Connect on LinkedIn
            </button>
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
          <p>&copy; 2026 Aman Shekhar. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
