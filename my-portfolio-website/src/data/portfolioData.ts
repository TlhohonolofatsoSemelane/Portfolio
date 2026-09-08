import { CertificationItem, ContactItem, ExperienceItem, NavItem, ProjectItem, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Tlhohonolofatso',
  surname: 'Temana Semelane',
  fullName: 'Tlhohonolofatso Temana Semelane',
  shortName: 'T.S.',
  title: 'BSc Information Technology Student — Software Engineering Major | Aspiring AI & Cloud Computing Professional',
  status: 'Open to Work',
  statusDescription: 'Available for internships & full-time roles',
  location: 'Kigali, Rwanda',
  email: 'tlhohonolofatsosemelane2@gmail.com',
  phones: ['+250 798 977 221', '+266 6277 1662'],
  linkedin: 'https://www.linkedin.com/in/tlhohonolofatso-temana-semelane-a6788a283/',
  linkedinDisplay: 'linkedin.com/in/tlhohonolofatso-temana-semelane',
  github: 'https://github.com/TlhohonolofatsoSemelane',
  githubDisplay: 'github.com/TlhohonolofatsoSemelane',
  photoUrl: '/photo_hero.jpg',
  fallbackPhotoUrl: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-e7j8wza5q6f4/app-e7je2vz7r75t/20260905/photo_hero_1788624945833.jpg',
  education: {
    degree: 'BSc Information Technology',
    major: 'Software Engineering Major',
    school: 'Adventist University of Central Africa (AUCA)',
    location: 'Kigali, Rwanda',
    period: 'Jan 2024 – Expected Nov 2027',
    coursework: 'OOP, Data Structures & Algorithms, Database Development with PL/SQL, Software Security, Software Modeling Design, Requirements Engineering, Software Testing Techniques, Best Programming Practice & Design Patterns, Introduction to Big Data, Introduction to Linux, Java Programming, Programming with C, Web Design, Web Technology (Full-Stack), .NET/C#, Software Engineering, Software Project Management, Software Quality Assurance, Computer Networks, Operating Systems, Database Management Systems'
  },
  objective: 'Software Engineering student at AUCA with hands-on experience in mobile development, databases, and networking. Skilled in various programming languages with a growing interest in AI and cloud computing. A collaborative team player eager to apply strong technical foundations and problem-solving skills to real-world challenges.'
};

export const typingRoles = [
  'Software Engineering Student',
  'Mobile App Developer',
  'Aspiring AI & Cloud Professional',
  'Full-Stack Enthusiast'
];

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

export const skillsData: SkillCategory[] = [
  {
    category: 'Mobile & Web',
    skills: ['Dart', 'Flutter', 'JavaScript', 'React.js', 'Node.js', 'Spring Boot', 'HTML5', 'CSS3', '.NET / C#', 'Web Design'],
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    dot: 'bg-blue-500'
  },
  {
    category: 'Programming',
    skills: ['Java', 'C', 'C# (.NET)', 'Python', 'OOP', 'PL/SQL', 'SQL', 'Data Structures & Algorithms (C)'],
    color: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20',
    dot: 'bg-emerald-500'
  },
  {
    category: 'Databases',
    skills: ['Oracle Database', 'PostgreSQL', 'MySQL', 'Hibernate', 'Database Design', 'DBMS'],
    color: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20',
    dot: 'bg-orange-500'
  },
  {
    category: 'Systems & Networking',
    skills: ['Linux System Administration', 'Computer Network Operations', 'Computer Networking'],
    color: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
    dot: 'bg-purple-500'
  },
  {
    category: 'Tools & Practices',
    skills: ['Git/GitHub', 'VS Code', 'IntelliJ IDEA', 'NetBeans', 'Figma', 'Maven', 'JUnit', 'HikariCP', 'pgAdmin'],
    color: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20',
    dot: 'bg-rose-500'
  },
  {
    category: 'Other',
    skills: ['Software Project Management', 'Requirements Gathering & Analysis', 'Big Data Analytics', 'Machine Learning', 'Python (ML/Data)', 'Software Testing', 'Software Design', 'Full-Stack Web Technology', '.NET / C#'],
    color: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
    dot: 'bg-amber-500'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Mobile Application Developer Intern',
    company: 'Academic Bridge',
    location: 'Kigali, Rwanda',
    period: 'Jun 2026 – Jul 2026',
    bullets: [
      'Worked as a mobile app developer building cross-platform mobile applications using Dart and Flutter.'
    ],
    tags: ['Dart', 'Flutter', 'Mobile Development']
  }
];

export const projectsData: ProjectItem[] = [
  {
    title: 'Subscription Management System',
    subtitle: 'SubTrack',
    description: 'Built a Java-based subscription management system using Hibernate ORM and a PostgreSQL database. Enables users to track and manage recurring subscriptions efficiently.',
    tags: ['Java', 'Hibernate ORM', 'PostgreSQL'],
    iconType: 'database',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    github: 'https://github.com/TlhohonolofatsoSemelane'
  },
  {
    title: 'Mining Equipment Maintenance Scheduler',
    subtitle: '',
    description: 'Designed an Oracle database solution using PL/SQL, applying database design and business intelligence principles to schedule and track equipment maintenance cycles.',
    tags: ['PL/SQL', 'Oracle Database', 'Database Design', 'Business Intelligence'],
    iconType: 'database',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10',
    github: 'https://github.com/TlhohonolofatsoSemelane'
  },
  {
    title: 'AUCA Library Management System',
    subtitle: '',
    description: 'Built a Java backend library system (Hibernate/JPA, PostgreSQL, Maven) managing users, memberships, books, shelves, rooms, and borrowing records. Implemented borrow-limit validation, room-based inventory tracking, and membership-based late fee calculation. Wrote a full JUnit automated test suite covering core business logic.',
    tags: ['Java', 'Hibernate/JPA', 'PostgreSQL', 'Maven', 'JUnit'],
    iconType: 'book-open',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
    github: 'https://github.com/TlhohonolofatsoSemelane'
  },
  {
    title: 'Flutter Food Delivery App & Expense Tracker',
    subtitle: '',
    description: 'Built cross-platform mobile applications in Dart/Flutter, including a food delivery app faithfully implemented from a Figma UI kit, and a personal expense tracker with budget management.',
    tags: ['Dart', 'Flutter', 'Figma', 'Mobile Development'],
    iconType: 'smartphone',
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/10',
    github: 'https://github.com/TlhohonolofatsoSemelane'
  },
  {
    title: 'Smart Course Registration & Prerequisite Validation System',
    subtitle: '',
    description: 'Designed a system to validate course prerequisites and streamline student registration workflows, reducing registration errors and improving the academic administration experience.',
    tags: ['System Design', 'Validation Logic', 'Workflow Automation'],
    iconType: 'network',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-500/10',
    github: 'https://github.com/TlhohonolofatsoSemelane'
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: 'English Proficiency Certificate',
    issuer: 'AUCA English Language Centre',
    date: 'May 2026',
    detail: '90 hours of training; intermediate-level English competence',
    color: 'border-l-blue-500',
    badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
  },
  {
    title: 'Preparatory Training: Code in the Gap Year',
    issuer: 'The GYM & Code and Design Alliance',
    date: 'Feb 2026',
    detail: 'React.js, JavaScript, HTML, CSS',
    color: 'border-l-purple-500',
    badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
  },
  {
    title: 'Dart and Flutter',
    issuer: 'Coursera (IBM)',
    date: 'Jul 2026',
    detail: 'Cross-platform mobile development with Dart & Flutter',
    color: 'border-l-emerald-500',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
  },
  {
    title: 'Advanced Network Operations 2.0',
    issuer: 'Internet Society Learning',
    date: 'Dec 2025',
    detail: 'Advanced network operations and management',
    color: 'border-l-orange-500',
    badgeColor: 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
  },
  {
    title: 'Introduction to Network Operations',
    issuer: 'Internet Society Learning',
    date: 'Sep 2025',
    detail: 'Fundamentals of network operations',
    color: 'border-l-amber-500',
    badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Jun 2026',
    detail: 'Core networking concepts and protocols',
    color: 'border-l-rose-500',
    badgeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
  },
  {
    title: 'Computer Hardware Basics',
    issuer: 'Cisco',
    date: 'Jun 2024',
    detail: 'Hardware components, peripherals, and basic maintenance',
    color: 'border-l-teal-500',
    badgeColor: 'bg-teal-500/10 text-teal-600 dark:text-teal-400'
  }
];

export const contactData: ContactItem[] = [
  {
    iconType: 'mail',
    label: 'Email',
    value: 'tlhohonolofatsosemelane2@gmail.com',
    href: 'mailto:tlhohonolofatsosemelane2@gmail.com',
    external: false
  },
  {
    iconType: 'phone',
    label: 'Phone',
    value: '+250 798 977 221',
    href: 'tel:+250798977221',
    external: false
  },
  {
    iconType: 'phone',
    label: 'Phone',
    value: '+266 6277 1662',
    href: 'tel:+26662771662',
    external: false
  },
  {
    iconType: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/tlhohonolofatso-temana-semelane',
    href: 'https://www.linkedin.com/in/tlhohonolofatso-temana-semelane-a6788a283/',
    external: true
  },
  {
    iconType: 'github',
    label: 'GitHub',
    value: 'github.com/TlhohonolofatsoSemelane',
    href: 'https://github.com/TlhohonolofatsoSemelane',
    external: true
  }
];

export const generateCvHtml = (): string => `<!DOCTYPE html><html lang="en"><head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CV — Tlhohonolofatso Temana Semelane</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Georgia', serif;
      font-size: 11pt;
      color: #111;
      background: #fff;
      padding: 32px 40px;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.5;
    }
    h1 { font-size: 22pt; letter-spacing: -0.5px; margin-bottom: 2px; }
    .subtitle { font-size: 11pt; color: #555; margin-bottom: 6px; font-style: italic; }
    .open-badge {
      display: inline-block;
      font-family: sans-serif;
      font-size: 8.5pt;
      font-weight: 700;
      color: #166534;
      background: #dcfce7;
      border: 1px solid #86efac;
      border-radius: 20px;
      padding: 2px 10px;
      margin-bottom: 8px;
    }
    .contact-row {
      font-size: 9pt;
      color: #444;
      display: flex;
      flex-wrap: wrap;
      gap: 8px 18px;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 2px solid #111;
    }
    .contact-row a { color: #444; text-decoration: none; }
    h2 {
      font-size: 11pt;
      font-family: sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #111;
      border-bottom: 1px solid #ccc;
      padding-bottom: 3px;
      margin-top: 18px;
      margin-bottom: 10px;
    }
    .section { margin-bottom: 8px; }
    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 4px;
    }
    .entry-title { font-weight: bold; font-size: 11pt; }
    .entry-sub { font-style: italic; font-size: 10pt; color: #444; }
    .entry-date { font-size: 9.5pt; color: #555; white-space: nowrap; }
    ul { margin: 5px 0 0 18px; }
    li { margin-bottom: 3px; font-size: 10.5pt; color: #222; }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 5px;
    }
    .tag {
      font-family: sans-serif;
      font-size: 8.5pt;
      background: #f0f0f0;
      border: 1px solid #ddd;
      border-radius: 3px;
      padding: 1px 7px;
      color: #333;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px 24px;
    }
    .skill-row { font-size: 10pt; }
    .skill-cat { font-weight: bold; font-family: sans-serif; }
    @media print {
      body { padding: 20px 28px; }
      a { color: #111 !important; }
    }
  </style>
</head>
<body>
  <h1>Tlhohonolofatso Temana Semelane</h1>
  <div class="subtitle">BSc Information Technology Student — Software Engineering Major &nbsp;|&nbsp; Aspiring AI &amp; Cloud Computing Professional</div>
  <div class="contact-row">
    <span>📍 Kigali, Rwanda</span>
    <span>📧 <a href="mailto:tlhohonolofatsosemelane2@gmail.com">tlhohonolofatsosemelane2@gmail.com</a></span>
    <span>📞 +250 798 977 221</span>
    <span>📞 +266 6277 1662</span>
    <span>🔗 <a href="https://www.linkedin.com/in/tlhohonolofatso-temana-semelane-a6788a283/">LinkedIn</a></span>
    <span>🐙 <a href="https://github.com/TlhohonolofatsoSemelane">GitHub</a></span>
  </div>
  <h2>Objective</h2>
  <div class="section">
    <p style="font-size:10.5pt;color:#222;">
      Software Engineering student at the Adventist University of Central Africa with hands-on experience in mobile
      application development, database systems, and network operations. Skilled in Dart/Flutter, Java, and PL/SQL,
      with a growing interest in artificial intelligence and cloud computing. Experienced in cross-cultural, team-based
      environments and eager to apply strong technical foundations and problem-solving skills to real-world challenges.
    </p>
  </div>
  <h2>Education</h2>
  <div class="section">
    <div class="entry-header">
      <div>
        <div class="entry-title">Bachelor of Science in Information Technology — Software Engineering Major</div>
        <div class="entry-sub">Adventist University of Central Africa (AUCA) · Kigali, Rwanda</div>
      </div>
      <div class="entry-date">Jan 2024 – Expected Nov 2027</div>
    </div>
    <div style="margin-top:5px;font-size:9.5pt;color:#444;">
      <strong>Relevant Coursework:</strong> OOP, Data Structures &amp; Algorithms, Database Development with PL/SQL,
      Software Security, Software Modeling Design, Requirements Engineering, Software Testing Techniques,
      Best Programming Practice &amp; Design Patterns, Introduction to Big Data, Introduction to Linux,
      Java Programming, Programming with C, Web Design, Web Technology (Full-Stack), .NET/C#,
      Software Engineering, Software Project Management, Software Quality Assurance,
      Computer Networks, Operating Systems, Database Management Systems
    </div>
  </div>
  <h2>Experience</h2>
  <div class="section">
    <div class="entry-header">
      <div>
        <div class="entry-title">Mobile Application Developer Intern</div>
        <div class="entry-sub">Academic Bridge · Kigali, Rwanda</div>
      </div>
      <div class="entry-date">Jun 2026 – Jul 2026</div>
    </div>
    <ul>
      <li>Worked as a mobile app developer building cross-platform mobile applications using Dart and Flutter.</li>
    </ul>
    <div class="tags">
      <span class="tag">Dart</span><span class="tag">Flutter</span><span class="tag">Mobile Development</span>
    </div>
  </div>
  <h2>Projects</h2>
  <div class="section">
    <div class="entry-header">
      <div class="entry-title">Subscription Management System (SubTrack)</div>
    </div>
    <ul><li>Built a Java-based subscription management system using Hibernate ORM and a PostgreSQL database.</li></ul>
    <div class="tags"><span class="tag">Java</span><span class="tag">Hibernate ORM</span><span class="tag">PostgreSQL</span></div>
  </div>
  <div class="section">
    <div class="entry-title">Mining Equipment Maintenance Scheduler</div>
    <ul><li>Designed an Oracle database solution using PL/SQL for scheduling and tracking equipment maintenance cycles.</li></ul>
    <div class="tags"><span class="tag">PL/SQL</span><span class="tag">Oracle Database</span><span class="tag">Database Design</span></div>
  </div>
  <div class="section">
    <div class="entry-title">AUCA Library Management System</div>
    <ul>
      <li>Built a Java backend library system (Hibernate/JPA, PostgreSQL, Maven) managing users, memberships, books, shelves, rooms, and borrowing records.</li>
      <li>Implemented borrow-limit validation, room-based inventory tracking, and membership-based late fee calculation.</li>
      <li>Wrote a full JUnit automated test suite covering core business logic.</li>
    </ul>
    <div class="tags"><span class="tag">Java</span><span class="tag">Hibernate/JPA</span><span class="tag">PostgreSQL</span><span class="tag">Maven</span><span class="tag">JUnit</span></div>
  </div>
  <div class="section">
    <div class="entry-title">Flutter Food Delivery App &amp; Expense Tracker</div>
    <ul><li>Built cross-platform mobile applications in Dart/Flutter including a food delivery app (from Figma UI kit) and a personal expense tracker.</li></ul>
    <div class="tags"><span class="tag">Dart</span><span class="tag">Flutter</span><span class="tag">Figma</span></div>
  </div>
  <div class="section">
    <div class="entry-title">Smart Course Registration &amp; Prerequisite Validation System</div>
    <ul><li>Designed a system to validate course prerequisites and streamline student registration workflows.</li></ul>
    <div class="tags"><span class="tag">System Design</span><span class="tag">Validation Logic</span></div>
  </div>
  <h2>Skills</h2>
  <div class="skills-grid">
    <div class="skill-row"><span class="skill-cat">Mobile &amp; Web:</span> Dart, Flutter, JavaScript, React.js, Node.js, HTML5, CSS3</div>
    <div class="skill-row"><span class="skill-cat">Programming:</span> Java, C, C# (.NET), OOP, PL/SQL, SQL, DSA</div>
    <div class="skill-row"><span class="skill-cat">Databases:</span> Oracle, PostgreSQL, MySQL, Hibernate, DBMS</div>
    <div class="skill-row"><span class="skill-cat">Systems &amp; Networking:</span> Linux, Computer Networking, Network Operations</div>
    <div class="skill-row"><span class="skill-cat">Tools:</span> Git/GitHub, VS Code, IntelliJ IDEA, NetBeans, Figma, Maven, JUnit, pgAdmin</div>
    <div class="skill-row"><span class="skill-cat">Other:</span> Software PM, Requirements Analysis, Big Data, Software Testing</div>
  </div>
  <h2>Certifications</h2>
  <div class="section">
    <ul>
      <li>English Proficiency Certificate — AUCA English Language Centre, May 2026</li>
      <li>Preparatory Training: Code in the Gap Year — The GYM &amp; Code and Design Alliance, Feb 2026 (React.js, JS, HTML, CSS)</li>
      <li>Dart and Flutter — Coursera (IBM)</li>
      <li>Advanced Network Operations 2.0 — Internet Society Learning, Dec 2025</li>
      <li>Introduction to Network Operations — Internet Society Learning, Sep 2025</li>
      <li>Networking Basics — Cisco Networking Academy, Jun 2026</li>
      <li>Computer Hardware Basics — Cisco, Jun 2024</li>
    </ul>
  </div>
</body></html>`;
