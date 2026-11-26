# ✦ YASIN — Personal Portfolio

### A Creative Frontend Developer Portfolio

A modern, interactive and animation-rich personal portfolio designed and developed to showcase my development journey, technical skills, featured projects, certifications and creative approach to frontend development.

<p align="center">
  <strong>Designed with creativity. Developed with passion. Powered by code.</strong>
</p>

---

## ✦ About The Project

YASIN is my personal developer portfolio, built to present my identity as a Frontend Developer and my journey towards becoming a Full Stack Developer.

The portfolio focuses on a clean editorial design, a distinctive Cream, Black and Red color palette, smooth interactions, engaging animations and a user-friendly browsing experience.

It includes multiple sections to highlight my technical knowledge, development projects, education, certifications, services and contact information.

The project combines modern frontend technologies with GSAP animation techniques to create an engaging digital experience.

## ✦ Live Preview

- **Live Website:** https://portfolio-orpin-chi-82.vercel.app/
- **GitHub Repository:** https://github.com/yasin7458

---

## ✦ Key Features

### 🎨 Design & User Interface
- Modern and minimal editorial-style design.
- Premium Cream, Black and Red color combination.
- Consistent typography and visual hierarchy.
- Clean layouts with carefully designed spacing.
- Reusable and modular React components.
- Custom-designed UI elements.
- Light and Dark theme support.
- Theme preference saved using Local Storage.

### ⚡ Animation & Interactions
- Custom animated preloader.
- GSAP-powered entrance animations.
- Scroll-triggered reveal animations.
- Smooth heading and text reveal effects.
- Image reveal animations.
- Parallax scrolling effects.
- Interactive button hover animations.
- Project card hover interactions.
- Image zoom hover effects.
- Icon movement and rotation animations.
- Decorative element animations.
- Floating hero image animation.
- Animated hero section elements.
- Horizontal scrolling animation utility.
- Card flip animation utility.
- SVG animation utility.
- Page transition animation utility.

### 📱 User Experience
- Responsive layout for desktop, tablet and mobile.
- Mobile navigation menu.
- Interactive navigation links.
- Smooth section navigation.
- Dedicated sections for portfolio content.
- Social media integration.
- Contact section with direct links.
- Reusable animation utilities.
- Component-based architecture.

---

## ✦ Technologies & Tools

### Frontend Development

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and layouts |
| JavaScript (ES6+) | Interactive functionality |
| React.js | Component-based UI |
| Bootstrap | Layout utilities and styling |

### Animation & Interaction

| Library | Purpose |
|---|---|
| GSAP | Advanced animations |
| GSAP ScrollTrigger | Scroll-based animations |
| React Icons | Icon integration |

### Development Tools

| Tool | Purpose |
|---|---|
| Vite | Development server and build tool |
| VS Code | Code editor |
| Git | Version control |
| GitHub | Source code hosting |
| Vercel | Portfolio deployment |
| npm | Package management |

---

## ✦ Animation Architecture

The project uses reusable GSAP animation utilities to maintain clean and organized animation logic.

### Animation Modules

| File | Functionality |
|---|---|
| `loaderAnimation.js` | Preloader animation |
| `heroAnimation.js` | Hero section entrance animations |
| `textAnimation.js` | Heading, paragraph and label reveals |
| `scrollAnimation.js` | Section, image, card and decoration reveals |
| `parallaxAnimation.js` | Scroll-based parallax effects |
| `horizontalScroll.js` | Horizontal scrolling animation |
| `hoverAnimation.js` | Button, card, image and icon hover effects |
| `flipAnimation.js` | Card flip animation utility |
| `svgAnimation.js` | SVG animation utility |
| `pageTransition.js` | Page transition animation utility |

### Animation Techniques
- GSAP Timelines
- ScrollTrigger
- Stagger Animations
- Transform Animations
- Opacity Transitions
- Parallax Effects
- Hover Interactions
- Context-based Animation Cleanup

---

## ✦ Portfolio Sections

| Section | Description |
|---|---|
| Home / Hero | Introduction, developer identity and social links |
| About | Personal introduction and development journey |
| Skills | Technical skills and technologies |
| Projects | Featured development projects |
| Education | Academic background and learning journey |
| Certifications | Professional courses and certificates |
| Services | Frontend development services |
| Workflow | Development process and working approach |
| Contact | Contact information and social connections |
| Footer | Final navigation and social links |

---

## ✦ Featured Projects

### 01. Student Management CRUD Application
A student management application built with React.js and JSON Server.

**Features:**
- Create student records.
- Display student information.
- Update existing records.
- Delete student records.
- API integration.

**Technologies:** HTML5, CSS3, JavaScript, React.js, JSON Server, Fetch API.

### 02. E-commerce Website
An interactive e-commerce website featuring product listings and a user-friendly shopping interface.

**Features:**
- Product listing interface.
- Interactive product cards.
- Product browsing experience.
- Shopping-focused UI.

**Technologies:** HTML5, CSS3, JavaScript, Bootstrap.

### 03. Quiz Application
An interactive quiz application designed to provide a question-and-answer experience.

**Features:**
- Interactive quiz interface.
- Question and answer interaction.
- User-friendly quiz experience.

### 04. GSAP Animation Project
A creative frontend project focused on modern animations and interactive visual experiences.

**Features:**
- GSAP-powered animations.
- Interactive elements.
- Creative motion effects.

---

## ✦ Project Structure

```text
YASIN-PORTFOLIO/
│
├── public/
│   └── images/
│       ├── certificates/
│       ├── projects/
│       └── sections/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── Loader/
│   │   ├── Navbar/
│   │   ├── ThemeToggle/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Education/
│   │   ├── Certifications/
│   │   ├── Services/
│   │   ├── Workflow/
│   │   ├── Contact/
│   │   └── Footer/
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Home.css
│   │
│   ├── animations/
│   │   ├── loaderAnimation.js
│   │   ├── heroAnimation.js
│   │   ├── textAnimation.js
│   │   ├── scrollAnimation.js
│   │   ├── parallaxAnimation.js
│   │   ├── horizontalScroll.js
│   │   ├── hoverAnimation.js
│   │   ├── flipAnimation.js
│   │   ├── svgAnimation.js
│   │   ├── pageTransition.js
│   │   └── smoothScroll.js
│   │
│   ├── hooks/
│   │   ├── useGSAPAnimations.js
│   │   └── useScrollAnimations.js
│   │
│   ├── styles/
│   │   ├── index.css
│   │   ├── global.css
│   │   ├── themes.css
│   │   └── responsive.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ✦ Installation & Setup

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### 1. Clone Repository

```bash
git clone https://github.com/yasin7458/YASIN-PORTFOLIO.git
```

### 2. Navigate to Project Directory

```bash
cd YASIN-PORTFOLIO
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open in Browser

Open the local URL provided by Vite.

### 6. Create Production Build

```bash
npm run build
```

### 7. Preview Production Build

```bash
npm run preview
```

---

## ✦ Theme System

The portfolio includes a custom Light and Dark theme system.

**Light Theme**
- Cream background.
- Dark typography.
- Red accent color.

**Dark Theme**
- Dark background.
- Light typography.
- Brighter red accent color.

The theme system is managed using React Context API and Local Storage.

---

## ✦ Development Approach

The project follows a component-based development approach.

- Modular React components.
- Reusable GSAP animation functions.
- Centralized theme management.
- Organized project folder structure.
- Separate CSS files for components.
- Shared CSS theme variables.
- Animation cleanup using GSAP Context.
- Scroll-based animation management.

---

## ✦ Future Improvements

- Add more interactive project details.
- Improve accessibility across all sections.
- Add advanced interactive visual elements.
- Continue improving animation performance.
- Expand the portfolio with new projects.

---

## ✦ Connect With Me

**Yasin Mithani**  
Frontend Developer | Aspiring Full Stack Developer

- GitHub: https://github.com/yasin7458
- LinkedIn: https://linkedin.com/in/yashin-mithani-7421093ab
- Portfolio: https://portfolio-orpin-chi-82.vercel.app/

---

<p align="center">
  <strong>THANK YOU FOR VISITING MY PORTFOLIO!</strong>
  <br/>
  <em>Turning ideas into meaningful digital experiences through creativity and code.</em>
</p>

<p align="center">
  Made with ❤️ by Yasin Mithani
</p>
