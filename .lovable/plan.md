

# DigiMoria – AI-Powered Customer Acquisition Website

## Overview
A dark, futuristic single-page website that visually walks users through DigiMoria's automated sales meeting system. The design uses deep purple, black, electric gradients, and neon blue accents with glass UI elements and animated particle/node effects.

## Pages & Navigation
- **Home** – Main scroll-through funnel experience
- **About** – Company story & team
- **Contact** – Contact form
- **Services dropdown**: AI-Powered Digital Performance, Custom AI Automation Solutions, Website Development, AI Content Production, AI Agent Development, Full AI System Infrastructure, Vibe Coding Software Solutions

## Homepage Sections (Scroll-Driven Funnel)

### 1. Hero
Cinematic dark hero with the DigiMoria logo, headline "AI-Powered Customer Acquisition Infrastructure", glowing particle funnel animation, and "Explore the System" CTA button.

### 2. Lead Sources
Animated glowing nodes for each traffic source (Google Ads, Meta Ads, LinkedIn, WhatsApp, etc.) with animated connection lines flowing into a central point. Particles stream toward the next section.

### 3. Contacts CRM
A futuristic glass-panel dashboard where leads merge. Small contact avatars appear dynamically inside the panel with a continuous flow animation.

### 4. AI Communication
Two branching systems: AI WhatsApp Conversations and AI Qualification Engine. Chat bubble animations, AI analysis visuals, optional AI Voice Agent branch. Unqualified leads filter out visually.

### 5. Qualified Leads
Fewer glowing leads continue forward, transforming into verified candidate nodes with a "AI filters real prospects" message.

### 6. Custom Landing Pages
A miniature landing page UI appears with a calendar selection animation showing the prospect booking a meeting.

### 7. Calendar Booking
Calendar interface with meeting slots filling automatically, animated transitions showing meetings moving to the sales team.

### 8. CRM Pipeline
Pipeline dashboard with auto-updating stages: Contacted → Meeting Scheduled → Proposal Sent → Follow Up. Glass UI cards with glowing state indicators.

### 9. Sales Team Calendar
Final result: a filled calendar. Headline: "Your sales team only focuses on real meetings." Strong closing CTA.

## Visual & Interaction Design
- **Color palette**: Deep purple (#1a0533), black, white text, electric blue (#00d4ff), neon purple gradients
- **Glass morphism** UI panels with backdrop blur
- **CSS animations**: Gradient shifts, glowing pulses, floating particles (CSS-based for performance)
- **Scroll-triggered animations**: Each section fades/slides in as user scrolls using Intersection Observer
- **Hover effects**: Nodes glow brighter, gradients activate, connection lines pulse
- **Particle flow lines**: Animated SVG paths with dash-offset animations connecting sections
- **Smooth transitions**: Sections flow into each other like traveling through a machine

## Technical Approach
- React + Tailwind with custom CSS animations and keyframes
- Intersection Observer for scroll-triggered section reveals
- CSS gradient animations and glowing effects (no heavy WebGL library needed for performance)
- SVG animated connection lines between sections
- Responsive design for mobile and desktop
- DigiMoria logos embedded from uploaded assets

