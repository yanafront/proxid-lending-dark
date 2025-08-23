# ProxiD - AI-Powered Recruitment Platform

## Overview

ProxiD is an AI-powered recruitment platform that revolutionizes hiring by combining Tinder-like swiping mechanics with machine learning algorithms. The platform serves both businesses looking to hire talent and specialists seeking work opportunities. It features video resumes, AI-powered matching with 89% accuracy, and automated analytics to streamline the recruitment process.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for interactive animations and transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: TSX for running TypeScript directly in development
- **Build**: ESBuild for production bundling
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for production)
- **Connection**: Neon Database serverless for cloud deployment
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Validation**: Drizzle-Zod for runtime schema validation

### Development Environment
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Hot Reload**: Vite HMR with Express middleware mode
- **Error Handling**: Runtime error overlay for development
- **Code Mapping**: Cartographer plugin for Replit code navigation

### Component Architecture
- **Design System**: Modular component library with consistent theming
- **Accessibility**: Built on Radix UI for keyboard navigation and screen reader support
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Dark Theme**: CSS custom properties for theme switching

### Landing Page Structure
The application is structured as a single-page marketing site with multiple sections:
- Hero section with animated messaging
- Pain points highlighting market problems
- Solution showcase with AI features
- Benefits comparison for businesses vs specialists
- How-it-works process explanation
- Social proof and testimonials
- Pricing tiers (Free, Basic, Pro)
- Final call-to-action

## External Dependencies

### Core Infrastructure
- **Neon Database**: Serverless PostgreSQL for production data storage
- **Replit**: Development and hosting platform with custom integrations

### Frontend Libraries
- **Radix UI**: Unstyled, accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for interactive experiences
- **TanStack Query**: Server state management and data fetching
- **React Hook Form**: Form state management and validation
- **Wouter**: Lightweight router for React applications

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire stack
- **ESLint/Prettier**: Code quality and formatting (configured via components.json)
- **Drizzle Kit**: Database schema management and migrations

### UI/UX Enhancements
- **Lucide React**: Icon library for consistent iconography
- **Date-fns**: Date manipulation and formatting
- **Class Variance Authority**: Type-safe variant styling
- **CLSX/Tailwind Merge**: Conditional class name utilities

### Backend Dependencies
- **Express.js**: Web application framework
- **Connect-pg-simple**: PostgreSQL session store
- **Nanoid**: Unique ID generation
- **Crypto**: Built-in Node.js cryptographic functionality