/**
 * PORTFOLIO DATA CONFIGURATION
 * ----------------------------------------------------
 * Update your personal information, links, projects, 
 * skills, and education here in one single place.
 */

export const portfolioData = {
  // Personal & Hero Information
  personal: {
    name: "Amanpreet Singh",
    role: "B.Tech CSE | AI & ML Student",
    yearStatus: "2nd Year B.Tech CSE Undergrad",
    statusBadge: "Available for Internships & Projects",
    bio: "I am a Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, software development, and building practical projects.",
    location: "India",
    email: "amanpreet.singh@example.com", // Replace with your real email
    github: "https://github.com/#github-link", // Replace with your GitHub URL
    linkedin: "https://linkedin.com/in/#linkedin-link", // Replace with your LinkedIn URL
    resumeUrl: "#resume-link", // Replace with link to your PDF resume (Google Drive, etc.)
  },

  // About Me Section
  about: {
    summary: [
      "I am currently in my 2nd year of Bachelor of Technology in Computer Science Engineering with a specialization and deep interest in Artificial Intelligence and Machine Learning.",
      "My primary focus is on building strong fundamentals in software engineering, core data structures, algorithms, and practical AI applications. I enjoy transforming theoretical concepts into functional, user-centric software.",
      "I am actively seeking internship opportunities, research collaborations, and open-source contributions to learn from industry mentors and deliver meaningful impact."
    ],
    highlights: [
      {
        title: "Current Focus",
        value: "AI & ML + Full Stack",
        iconName: "Brain"
      },
      {
        title: "Academic Stage",
        value: "2nd Year Undergrad",
        iconName: "GraduationCap"
      },
      {
        title: "Primary Goal",
        value: "Summer / Tech Internships",
        iconName: "Briefcase"
      },
      {
        title: "Philosophy",
        value: "Learn by Building",
        iconName: "Code2"
      }
    ],
    focusAreas: [
      "Programming",
      "Data Structures & Algorithms",
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development",
      "Problem Solving"
    ]
  },

  // Skills Section (Grouped categories - presented as learning & working with)
  skills: [
    {
      category: "Programming",
      description: "Languages I write logic, algorithms, and applications in",
      iconName: "Code",
      items: [
        { name: "Java", level: "Intermediate", note: "OOP & Problem Solving" },
        { name: "Python", level: "Proficient", note: "AI/ML & Scripting" },
        { name: "C++", level: "Intermediate", note: "DSA & Core Fundamentals" },
        { name: "JavaScript", level: "Intermediate", note: "ES6+ & Web Logic" }
      ]
    },
    {
      category: "AI & ML",
      description: "Libraries and concepts I study and use for intelligent systems",
      iconName: "Cpu",
      items: [
        { name: "Python", level: "Proficient", note: "Primary AI Language" },
        { name: "NumPy", level: "Intermediate", note: "Numerical Computing" },
        { name: "Pandas", level: "Intermediate", note: "Data Manipulation" },
        { name: "Machine Learning", level: "Learning", note: "Supervised & Unsupervised" },
        { name: "Data Analysis", level: "Intermediate", note: "EDA & Visualization" }
      ]
    },
    {
      category: "Web Development",
      description: "Modern tools for crafting responsive user interfaces and apps",
      iconName: "Globe",
      items: [
        { name: "HTML", level: "Proficient", note: "Semantic Structure" },
        { name: "CSS", level: "Proficient", note: "Flexbox, Grid & Animations" },
        { name: "JavaScript", level: "Intermediate", note: "DOM & Async API" },
        { name: "React.js", level: "Intermediate", note: "Component Architecture" }
      ]
    },
    {
      category: "Tools & Platforms",
      description: "Developer workflow, version control, and containerization",
      iconName: "Wrench",
      items: [
        { name: "Git", level: "Intermediate", note: "Version Control" },
        { name: "GitHub", level: "Intermediate", note: "Collaboration & Repos" },
        { name: "VS Code", level: "Proficient", note: "Primary IDE & Extensions" },
        { name: "Docker", level: "Beginner", note: "Container Basics" }
      ]
    }
  ],

  // Projects Section
  projects: [
    {
      id: "ai-resume-analyzer",
      title: "AI Resume Analyzer",
      badge: "AI / ML & NLP",
      featured: true,
      description: "An AI-based application that analyzes a resume and provides feedback on skills, keywords, structure, and areas for improvement.",
      technologies: ["Python", "AI/ML", "NLP", "React"],
      githubUrl: "#github-link",
      demoUrl: "#demo-link",
      highlights: [
        "Parses candidate resumes to extract key skill matrices and education history",
        "Uses Natural Language Processing to score keyword relevance against job descriptions",
        "Interactive React frontend displaying actionable tips and strengths breakdown"
      ]
    },
    {
      id: "real-time-chat-app",
      title: "Real-Time Chat & Collaboration App",
      badge: "Full Stack",
      featured: true,
      description: "A full-stack real-time communication application designed for messaging and collaboration.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubUrl: "#github-link",
      demoUrl: "#demo-link",
      highlights: [
        "Instant bidirectional messaging with WebSocket communication",
        "User authentication, room-based discussions, and message history persistence",
        "Clean responsive UI with active presence indicators"
      ]
    }
  ],

  // Education Section
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      status: "Currently in 2nd Year (2024 – 2028)",
      institution: "Engineering College / University",
      specialization: "Artificial Intelligence & Machine Learning",
      description: "Building strong foundational knowledge across computing theory, algorithmic problem solving, software engineering, and artificial intelligence.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (Java/C++)",
        "Database Management Systems",
        "Probability & Statistics for AI",
        "Computer Organization & Architecture",
        "Discrete Mathematics"
      ]
    }
  ],

  // Currently Learning Section
  currentlyLearning: [
    {
      topic: "Data Structures & Algorithms",
      detail: "Solving pattern-based problems (Trees, Graphs, DP) in C++ / Java",
      status: "In Progress"
    },
    {
      topic: "Machine Learning",
      detail: "Model training, evaluation metrics, and scikit-learn pipelines",
      status: "Active"
    },
    {
      topic: "Data Analysis",
      detail: "Exploratory data analysis, cleaning, and visualizations with Pandas & Seaborn",
      status: "Active"
    },
    {
      topic: "React.js",
      detail: "State management, hooks, component architecture, and modern UI patterns",
      status: "Active"
    },
    {
      topic: "Backend Development",
      detail: "RESTful API creation, Node.js, Express, and database integrations",
      status: "Exploring"
    },
    {
      topic: "Git & GitHub",
      detail: "Branch management, pull requests, and collaborative open-source workflows",
      status: "Practicing"
    },
    {
      topic: "Problem Solving",
      detail: "Daily competitive programming & technical problem solving on LeetCode",
      status: "Continuous"
    }
  ],

  // Navigation Links
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ],

  // Footer
  footer: {
    text: "© 2026 Amanpreet Singh. Built with React.",
    note: "Designed with clean modern aesthetics for developer & internship portfolios."
  }
};
