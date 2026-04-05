# RestNet

A cinematic, highly polished landing page and multi-page platform designed to showcase digital minimalism, deep focus, and cognitive clarity. Built with a modern React stack, RestNet represents an "Apple/Linear-esque" standard of aesthetics, featuring floating glassmorphic navigation, high-end typography, smooth transitions, and a stunning video background.

## 🌟 Features

- **Cinematic Hero Video**: A fully immersive, muted autoplaying background video layered underneath elegant typography and glassmorphic overlays.
- **Glassmorphic Aesthetic**: Beautifully frosted glass UI components (Navbar, Feature Cards, Authentication Modals) using `backdrop-blur` utilities.
- **Client-Side Routing (SPA)**: Lightning-fast seamless navigation between pages utilizing `react-router-dom` without full page reloads.
- **Multi-Page Architecture**:
  - **Home**: The cinematic gateway highlighting features and primary CTAs.
  - **About**: A beautifully typeset manifesto explaining the platform's core philosophy.
  - **Insights**: A responsive grid of article cards with smooth hover lift and glow interactions.
  - **Sign In**: A stunning, premium authentication modal layered over an abstract dark background.
  - **404 (Not Found)**: A minimal "Lost in the noise" error page.
- **Micro-Interactions**: Subtle, fluid CSS animations, including scroll bouncing, fade-in-up observers, and hover states.
- **Fully Responsive**: Flawless layout adaptation across mobile, tablet, and desktop devices, featuring a custom animated mobile hamburger menu.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Inter Font Family](https://fonts.google.com/specimen/Inter)

## 📂 Project Structure

```text
RestNet/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Features.jsx    # Glassmorphism grid section
│   │   ├── Footer.jsx      # Global footer
│   │   ├── Hero.jsx        # Video background hero section
│   │   ├── Layout.jsx      # App shell wrapper outlining Navbar & Footer
│   │   └── Navbar.jsx      # Floating, responsive glass nav
│   ├── pages/              # Route-level components
│   │   ├── About.jsx       # Manifesto & philosophy page
│   │   ├── Home.jsx        # Landing page composer
│   │   ├── Insights.jsx    # Blog / Article grid
│   │   ├── NotFound.jsx    # Custom 404 page
│   │   └── SignIn.jsx      # Authentication page
│   ├── App.jsx             # React Router configuration
│   ├── index.css           # Global CSS & Tailwind directives
│   └── main.jsx            # React root & strict mode
├── index.html              # HTML entry point
├── tailwind.config.js      # Custom theme & animation config
├── postcss.config.js       # PostCSS configuration
└── vite.config.js          # Vite build configuration
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your local machine.

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/yourusername/RestNet.git
   ```

2. **Navigate to the directory**:
   ```bash
   cd RestNet
   ```

3. **Install NPM packages**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Visit `http://localhost:5173` to see the application running.

## 🎨 Design Philosophy

This project strictly adheres to a "doing less, but better" philosophy. Every shadow, border opacity, font weight, and transition duration was purposefully selected to eliminate visual noise and promote an unbreakable state of user flow. No bloated CSS libraries were used—only utility-first Tailwind CSS classes were composed to build the custom design system.

---
*Ascend to a Higher State of Mind.*
----
**Demo: Watch Here**


https://github.com/user-attachments/assets/e63a5221-6ccc-47cf-a8e0-393df236a5a4


