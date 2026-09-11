# Interactive 3D Portfolio & Signature Hero

A high-performance, accessible, and interactive 3D web application built with **Next.js**, **React Three Fiber (R3F)**, and custom **GLSL Fragment Shaders**.

Designed with strict web standards, responsive interaction, and GPU execution optimization.

## 🚀 Live Demo & Repository

- **Production URL:** https://interactive-3d-adham.vercel.app
- **GitHub Profile:** https://github.com/AdhamHamdyMohamed

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js (App Router, React 19)
- **3D Engine & Shaders:** React Three Fiber (R3F), `@react-three/drei`, Three.js, Custom GLSL
- **Styling & UI:** Tailwind CSS
- **Analytics & Hosting:** Vercel Analytics, Vercel Edge Network

### Key Architectural & Performance Decisions

- **Custom Fragment Shader:** Implemented a full-screen procedural shader featuring trigonometric wave calculations driven by `uTime`, `uMouse`, and `uResolution` uniforms.
- **GPU Performance Optimization:** Capped Device Pixel Ratio using `dpr={[1, 2]}` to prevent frame drops on high-density Retina displays.
- **Accessibility (`prefers-reduced-motion`):** Built-in listener that detects system motion settings and anchors `uTime` to `0.0`, delivering a clean static gradient frame for users sensitive to motion.
- **API Route Safeguards:** Input character capping and dynamic timeout management (`export const maxDuration = 30`) applied to serverless handlers to prevent resource exhaustion.

## 🗝️ Environment Variables

| Variable Name                     | Description                     | Required                     |
| --------------------------------- | ------------------------------- | ---------------------------- |
| `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` | Vercel Analytics tracking token | No (Auto-injected by Vercel) |

## 💻 Local Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/AdhamHamdyMohamed/interactive-3d-portfolio.git
cd interactive-3d-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 4. Build for production

```bash
npm run build
```
