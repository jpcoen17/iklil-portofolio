# Muhammad Iklil — Web3 Portfolio

A modern, premium Web3 portfolio website built with React + Vite + Tailwind CSS + Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ installed
- npm or yarn

### Steps

1. **Extract the ZIP** to a folder of your choice

2. **Open terminal** in that folder and install dependencies:
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open browser** at `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
iklil-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── profile.jpeg        ← Your profile photo
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Customization

- **Contact links**: Edit `src/components/Contact.jsx` — update `href` values with real Twitter/Telegram/email
- **Profile photo**: Replace `src/assets/profile.jpeg`
- **Colors**: Edit `tailwind.config.js` under `theme.extend.colors`
- **Content**: Each section is a standalone component — easy to edit

## 🛠️ Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11** (animations)
- **Google Fonts** — Syne + DM Sans + JetBrains Mono
