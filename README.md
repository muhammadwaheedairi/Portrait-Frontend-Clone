# Portrait.so Landing Page Recreation 🎨

![Project Banner](https://via.placeholder.com/1200x600.png?text=Portrait+Landing+Page+Preview)
<!-- 💡 TIP: Replace the link above with a real screenshot of your Hero section for your GitHub repo -->

A pixel-perfect, high-fidelity recreation of the **Portrait.so** decentralized website builder landing page. 

This project demonstrates the implementation of complex UI interactions, 3D transformations, and responsive data visualizations using **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

## 🚀 Live Demo
[View Live Demo](#) <!-- Add your Vercel/Netlify link here -->

## ✨ Key Features

### 💎 Advanced UI/UX
*   **3D Tilt Interactions:** Implemented a custom 3D perspective scroll effect in the "Creating is Easy" section using CSS transforms and Framer Motion.
*   **Physics-Based Animations:** "Fly-in" spring animations for the Hero section where elements congregate into a mobile viewport.
*   **Interactive Card Stacks:** A "fanned out" card interface in the Community section that handles z-index shuffling and click-to-expand states.

### 📱 Responsive Engineering
*   **Adaptive Network Diagram:** 
    *   *Desktop:* Uses SVG paths to draw complex curved connections between nodes.
    *   *Mobile:* Completely reflows into a vertical flex layout with dashed CSS borders to maintain the visual metaphor on small screens.
*   **Mobile-First Navigation:** Smooth collapsing menus and touch-optimized tap targets.

### ⚡ Modern Tech Stack
*   **Framework:** Next.js 15 (App Router) with React 19.
*   **Styling:** Tailwind CSS with extensive custom configuration (gradients, typography, animations).
*   **Type Safety:** 100% Strict TypeScript for robust component props and state management.
*   **Performance:** Optimized fonts (`next/font`) and modular component architecture.

## 🛠️ Technical Highlights

### The Network Diagram Component (`components/NetworkDiagram.tsx`)
One of the most complex components in this project. It features conditional rendering logic to switch between an SVG-based coordinate system for desktop screens and a vertical Flexbox layout for mobile, ensuring the diagram remains readable on all devices while maintaining the "node-based" design language.

### 3D Perspective Scroll (`components/CreatingSection.tsx`)
Utilizes `perspective`, `rotateX`, and `rotateY` to create a depth-of-field effect. The component accepts scroll triggers to animate the interface from a tilted, transparent state to a fully opaque, flat-facing view as the user scrolls down.

## 💻 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portrait-landing.git
    cd portrait-landing
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
├── app/                  # Next.js 15 App Router
│   ├── layout.tsx        # Root layout with fonts & metadata
│   ├── page.tsx          # Main landing page composition
│   └── globals.css       # Global styles & Tailwind directives
├── components/           # Reusable UI Components
│   ├── Hero.tsx          # Main entry with fly-in animation
│   ├── NetworkDiagram.tsx# Complex SVG/Flex responsive diagram
│   ├── CreatingSection.tsx # 3D Tilt animation section
│   ├── CommunitySection.tsx # Interactive profile cards
│   └── ...               # Other sections (Navbar, FAQ, Footer)
├── lib/                  # Utilities (clsx, tailwind-merge)
└── public/               # Static assets
