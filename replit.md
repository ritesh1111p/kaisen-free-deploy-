# WhatsApp Bot Management Dashboard

## Overview

This project is a modern web-based management dashboard for WhatsApp bot operations. It provides a user interface for managing WhatsApp bot sessions, including the ability to pair new phone numbers and manage existing sessions. The application is built with Next.js 15, React 18, and TypeScript, featuring beautiful animations and a glassmorphic design.

## Recent Updates (October 2025)

- **Migrated from Vercel to Replit**: Configured for Replit environment with proper port binding (0.0.0.0:5000)
- **Updated API Endpoint**: Now using Railway API at http://turntable.proxy.rlwy.net:24259
- **Enhanced Animations**: Added Framer Motion scroll animations and parallax effects
- **Improved UX**: Added hover effects, loading states, and smooth transitions throughout the app

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Next.js 15**: Modern React framework with App Router for server-side rendering and optimal performance
- **React 18**: Component-based architecture with hooks for state management
- **TypeScript**: Type-safe development for better code quality and developer experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS for responsive styling
- **Component-based Structure**: Modular design with reusable components for cards, animations, and UI elements

### UI/UX Design Patterns
- **Glassmorphic Design**: Modern frosted glass effect with backdrop blur for cards and containers
- **Gradient Backgrounds**: Animated purple-to-blue gradients with floating orbs for depth
- **Scroll Animations**: Framer Motion powered animations that trigger on scroll
- **Parallax Effects**: Background elements move at different speeds for visual depth
- **Hover Interactions**: Scale and shadow effects on cards for better user engagement
- **Loading States**: Animated spinners and skeleton screens for async operations

### API Integration
- **RESTful Communication**: Frontend communicates with Railway-hosted WhatsApp API
- **React Query**: For efficient data fetching, caching, and state management
- **Error Handling**: Comprehensive error handling with user-friendly error messages
- **Auto-retry Logic**: Built-in retry mechanism for failed requests

### Animation & Motion
- **Framer Motion**: Professional animation library for scroll-triggered and hover effects
- **Scroll Animations**: Elements fade in and slide up as they enter the viewport
- **Parallax Background**: Floating gradient orbs move at different speeds when scrolling
- **Micro-interactions**: Button hovers, card lifts, and icon rotations for polish

## External Dependencies

### Third-party Services
- **Railway API**: WhatsApp bot backend hosted at http://turntable.proxy.rlwy.net:24259
- **Google Fonts (Inter)**: Modern sans-serif font for clean typography

### Key Libraries
- **Next.js 15.5.4**: React framework with App Router
- **React 18.3.1**: UI library
- **Framer Motion 11.13.1**: Animation library
- **React Query 5.60.5**: Data fetching and state management
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Radix UI**: Headless UI components for accessibility
- **Lucide React**: Icon library

## Replit-Specific Configuration

### Port Configuration
- **Development**: Runs on port 5000 with host 0.0.0.0 for Replit compatibility
- **Scripts**: `npm run dev` starts the development server
- **Workflow**: Automated workflow restarts server on changes

### Environment Variables
- `WHATSAPP_API_URL`: Railway API endpoint (defaults to http://turntable.proxy.rlwy.net:24259)

## Known Issues & Solutions

### Page Load Time
- Initial compilation takes ~8-10 seconds due to large module count (1487 modules)
- This is normal for development mode with Framer Motion and all animations
- Production build will be optimized and much faster

### Cross-Origin Warnings
- Configured `allowedDevOrigins` in next.config.ts to handle Replit's proxy environment
- Warning is informational only and doesn't affect functionality