# Overview

This is a **Smart CV Builder** application built with Next.js 15, React 19, and Supabase. The application allows users to create professional CVs/resumes through an interactive form-based interface with real-time preview capabilities. Users can input personal information, work experience, and education details, then export their CV as a PDF. The project is based on the Next.js + Supabase starter template and includes authentication features for user management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: Next.js 15 with App Router
- Uses React Server Components (RSC) for server-side rendering
- Client components marked with "use client" directive for interactivity
- TypeScript for type safety across the application

**UI Components**:
- **shadcn/ui**: Pre-built accessible component library using Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework for styling with custom design tokens
- **next-themes**: Dark/light mode theme switching support
- **Lucide React**: Icon library for consistent iconography

**State Management**:
- React hooks (useState) for local component state
- No global state management library (Redux, Zustand) implemented
- Form data stored in component state and passed via props

**Key Features**:
- **CV Builder**: Multi-step form interface with collapsible sections for personal info, experience, and education
- **Live Preview**: Real-time CV preview component showing formatted output
- **PDF Export**: Uses html2canvas and jsPDF to convert CV preview into downloadable PDF
- **Aurora Background**: Custom WebGL shader effect using OGL library for animated gradient backgrounds

## Backend Architecture

**Authentication & Database**: Supabase
- Cookie-based authentication using @supabase/ssr package
- Separate client and server Supabase client utilities
- Session management through Next.js middleware

**Middleware Implementation**:
- Route protection for authenticated pages
- Automatic session refresh on requests
- Cookie handling for SSR compatibility

**Authentication Flow**:
- Email/password-based authentication
- Password reset functionality with email verification
- Email confirmation for new signups
- Protected routes redirect unauthenticated users to login

**Data Structure**:
- TypeScript interfaces define CV data models:
  - `CVDataPersonal`: First/last name, contact info, job title, social links
  - `CVDataExperience`: Company, job title, dates, description
  - `CVDataEducation`: School, degree, CGPA, dates, description
- Currently stores data in component state (no database persistence implemented yet)

## Design Patterns

**Component Architecture**:
- Separation between form components and preview components
- Reusable UI components in `/components/ui` directory
- Feature-specific components in `/app/_components` directory
- Server vs Client component distinction for optimal performance

**File Structure**:
- App Router convention: `/app` directory for routes and layouts
- Utility functions in `/lib` and `/utils` directories
- Duplicate Supabase utilities exist in both `/lib/supabase` and `/utils/supabase` (architectural inconsistency to be resolved)

**Styling Approach**:
- CSS variables for theming (`--background`, `--foreground`, etc.)
- Tailwind utility classes for component styling
- Class variance authority (CVA) for variant-based component styling
- Custom shadcn theme with "new-york" style preset

# External Dependencies

## Authentication & Database
- **Supabase** (@supabase/supabase-js, @supabase/ssr): Backend-as-a-Service providing authentication, database, and real-time capabilities
  - Environment variables required: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY` or `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
  - Cookie-based session management for SSR compatibility

## UI & Styling
- **Radix UI** (@radix-ui/react-*): Unstyled, accessible component primitives for checkbox, dropdown, label, slot
- **Tailwind CSS**: Utility-first CSS framework with autoprefixer and postcss
- **tailwindcss-animate**: Animation utilities for Tailwind
- **shadcn/ui**: Component library configured via components.json
- **next-themes**: Theme provider for dark/light mode switching
- **Lucide React**: Icon library
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx & tailwind-merge**: Utility functions for conditional className merging

## PDF Export
- **jsPDF**: PDF document generation library
- **html2canvas**: Converts HTML elements to canvas for PDF export
- **react-to-print**: Alternative printing solution (installed but not actively used)

## Graphics
- **OGL**: Minimal WebGL library for custom Aurora shader background effect

## Development
- **TypeScript**: Type safety across the application
- **ESLint**: Code linting with Next.js configuration
- **PostCSS**: CSS transformation tool

## Deployment
- Optimized for Vercel deployment with automatic environment variable integration
- Development server runs on port 5000 with network access (0.0.0.0)