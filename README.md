# Amanpreet Singh | Personal Portfolio Website

A clean, modern, and professional portfolio website built with **React.js**, **Vite**, **CSS3**, and **Lucide React** icons. Specifically tailored for a **2nd-year B.Tech Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning**, this portfolio is optimized for internship applications, resume links, GitHub profiles, and showcasing academic projects.

---

## 🌟 Key Features

- ⚡ **Lightweight & Fast**: Built on Vite with React 18 for instant hot-module-reloading and lightning-fast bundle performance.
- 🎨 **Modern Developer Aesthetic**: Sleek dark/light theme switcher, subtle glowing accents, glassmorphism cards, and smooth hover interactions.
- 📱 **Fully Responsive**: Flawless layout and typography across mobile phones, tablets, laptops, and wide desktop screens.
- 🧭 **Smooth Navigation**: Smooth scrolling with active section indicator and a sliding mobile drawer menu.
- 🧩 **Modular Architecture**: Clean, reusable React components with isolated CSS stylesheets.
- 📝 **Centralized Data Configuration**: Update all your personal details, bio, links, skills, projects, and coursework in **one single file** (`src/data/portfolioData.js`).
- 📬 **Interactive Contact Form**: Client-side validated form with real-time feedback and a one-click "Copy Email" button.
- 🚀 **Zero Backend Required**: Ready for free static hosting on Vercel, Netlify, or GitHub Pages.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/)
- **Build Tool / Bundler**: [Vite 6](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Pure modern CSS3 with custom variables, CSS Grid, and Flexbox
- **Fonts**: Inter & JetBrains Mono

---

## 📂 Project Structure

```text
amanpreet-portfolio/
├── index.html                   # HTML entry point with fonts & metadata
├── package.json                 # Project dependencies and build scripts
├── vite.config.js               # Vite bundler configuration
├── README.md                    # Project documentation & deployment guide
├── public/
│   └── favicon.svg              # Modern monogram developer favicon
└── src/
    ├── main.jsx                 # React DOM mount point
    ├── App.jsx                  # Main application container & theme state
    ├── index.css                # Global design system & theme variables
    ├── data/
    │   └── portfolioData.js     # ⭐ Centralized personal & project data config
    ├── components/
    │   ├── Navbar.jsx           # Responsive header with theme toggle
    │   ├── Hero.jsx             # Hero section with interactive terminal preview
    │   ├── About.jsx            # Professional bio & core competencies
    │   ├── Skills.jsx           # Categorized technical skill cards
    │   ├── Projects.jsx         # Project showcase cards with GitHub/Demo links
    │   ├── Education.jsx        # Academic timeline & coursework modules
    │   ├── CurrentlyLearning.jsx# Active learning topics & roadmap badges
    │   ├── Contact.jsx          # Direct communication cards & contact form
    │   └── Footer.jsx           # Copyright & back-to-top button
    └── styles/
        ├── Navbar.css
        ├── Hero.css
        ├── About.css
        ├── Skills.css
        ├── Projects.css
        ├── Education.css
        ├── CurrentlyLearning.css
        ├── Contact.css
        └── Footer.css
```

---

## 🚀 Quick Start Guide

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed on your system.

### 1. Install Dependencies
Navigate into the project folder in your terminal and run:

```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view your portfolio live with hot module reloading.

### 3. Build for Production
```bash
npm run build
```
This generates a production-ready, minified build in the `dist/` directory.

---

## ⚙️ How to Customize Personal Information

You do not need to hunt through multiple JSX files to update your details! Simply open **`src/data/portfolioData.js`** and edit:

1. **Personal Information & Links**:
   ```javascript
   personal: {
     name: "Amanpreet Singh",
     role: "B.Tech CSE | AI & ML Student",
     email: "your.real.email@example.com",
     github: "https://github.com/your-username",
     linkedin: "https://linkedin.com/in/your-profile",
     resumeUrl: "https://drive.google.com/.../your-resume.pdf",
   }
   ```

2. **Add / Edit Projects**:
   ```javascript
   {
     id: "my-new-project",
     title: "Project Title",
     badge: "AI / ML",
     description: "What the project accomplishes...",
     technologies: ["Python", "TensorFlow", "React"],
     githubUrl: "https://github.com/your-username/repo-name",
     demoUrl: "https://my-demo-link.vercel.app",
     highlights: [
       "Key accomplishment 1",
       "Key accomplishment 2"
     ]
   }
   ```

3. **Skills & Education**:
   Update your languages, AI/ML tools, courses, and currently learning topics directly in the corresponding arrays.

---

## 🌐 Free Deployment Guide

### Option 1: Deploy on Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default settings (Framework Preset: `Vite`, Build Command: `npm run build`, Output Directory: `dist`).
5. Click **"Deploy"**. Your portfolio will be live on a fast global CDN in seconds with automatic HTTPS!

### Option 2: Deploy on Netlify
1. Drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop), or
2. Connect your GitHub repository to Netlify with build command `npm run build` and publish directory `dist`.

### Option 3: Deploy to GitHub Pages
1. Install `gh-pages`: `npm install gh-pages --save-dev`
2. Add `"base": "/<repo-name>/"` in `vite.config.js`.
3. Add `"deploy": "gh-pages -d dist"` under `"scripts"` in `package.json`.
4. Run `npm run build && npm run deploy`.

---

## 📄 License & Attribution

Designed and created for **Amanpreet Singh**. Feel free to customize and expand this template for your own developer journey!
