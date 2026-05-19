# Laundry Day Modernized

A premium, fast, and frictionless laundry service landing page designed for both residential and commercial clients. 

This template was built to provide a seamless user experience, emphasizing an ultra-modern aesthetic with specific focus on high-quality custom visuals, soft mint and blue color palettes, and responsive "glassmorphism" card-based layouts. 

The site includes a comprehensive routing setup, clean UI components, and a specialized commercial landing page featuring an immersive video background.

![Hero Preview](public/fresh_return.png)

## 🌟 Key Features

- **Modern Tech Stack**: Built with Vite, React, TypeScript, and Tailwind CSS.
- **Dynamic Routing**: Multi-page layout (Home, Services, Prices, Commercial, About, Contact) achieved via `react-router-dom`.
- **Intelligent Navigation**: Transparent-to-solid header transitioning with an inverted color scheme specifically for the Dark-mode Commercial Landing page.
- **Micro-Animations**: Uses `framer-motion` (Motion for React) to implement smooth scroll-triggered entry animations and interactive hover scaling effects.
- **Custom Aesthetic Images**: Premium bespoke image integrations replacing generic icons for "Process Steps" and "The Personal Touch".
- **Responsive Layout**: Fluidly adapts card widths, image splits (e.g., 55% text / 45% image), and grids across mobile, tablet, and desktop views to prevent text overlap and ensure legibility.
- **AWS Amplify Ready**: Configured for continuous deployment via AWS Amplify Hosting.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/laundry-service.git
   cd laundry-service
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production
To build the app for production (outputs to the `dist` directory):
```bash
npm run build
```

## 🏗️ Project Structure
- `src/components/`: Reusable UI pieces (Hero, ProcessSteps, Header, Footer, WhyUs, FAQ).
- `src/pages/`: Route-level container components (Home, Commercial, Services).
- `public/`: Static assets including background videos (`black.mp4`) and the custom generated imagery (`bag_it_rule.png`, `fresh_return.png`, `eco_friendly.png`, etc).

## ☁️ Deployment (AWS Amplify)
This project is configured and deployed via AWS Amplify. 
If modifying the infrastructure, ensure the build configuration points to the `dist` directory.

To publish updates manually:
```bash
npm run build
npx amplify publish -y
```

## 🎨 Design System
- **Primary Brand**: Deep Slate (`#0f172a`), Vivid Blue (`#0044FF`)
- **Secondary Tones**: Soft Mint (`#CDE5D2`), Sage Green (`#EAF5E9`), Light Blue (`#E6F0FF`)
- **Typography**: Inter (sans-serif)
- **Cards Style**: Bright airy backgrounds (`#F8FAFC`) with drop-shadow text constraints merging intelligently over edge-aligned media.
