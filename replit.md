# Overview

This is a modern full-stack web application built with React, TypeScript, and Express.js, featuring AI-powered video, chat, and voice agents. The application appears to be a marketing website for "Rallo AI" - a platform that creates AI agents to represent users across multiple digital channels. The architecture follows a monorepo structure with separate client and server directories, utilizing modern web development practices and a comprehensive UI component library.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: Comprehensive design system using Radix UI primitives with Tailwind CSS
- **Styling**: Tailwind CSS with custom CSS variables for design tokens
- **Component Structure**: Organized into reusable UI components and page sections

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Build System**: ESBuild for production builds
- **Development**: TSX for development server with hot reloading
- **API Structure**: RESTful API with `/api` prefix for all routes
- **Error Handling**: Centralized error handling middleware
- **Logging**: Custom request logging for API endpoints

## Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless connection
- **Schema Management**: Shared schema definitions between client and server
- **Migrations**: Drizzle Kit for database migrations and schema changes
- **Validation**: Zod schemas for runtime type validation

## Authentication & Security
- **Password Hashing**: bcrypt for secure password storage
- **User Management**: Complete user CRUD operations with username/password authentication
- **Session Management**: Express sessions with PostgreSQL session store
- **Type Safety**: Separate schemas to prevent password exposure in API responses

## Development Environment
- **Hot Reloading**: Vite middleware integration with Express server
- **Error Handling**: Runtime error overlay for development
- **Path Aliases**: TypeScript path mapping for clean imports
- **Linting**: TypeScript strict mode enabled
- **Build Process**: Separate client and server build pipelines

# External Dependencies

## Core Framework Dependencies
- **React & React DOM**: Frontend framework and rendering
- **Express.js**: Backend web framework
- **Vite**: Frontend build tool and development server
- **TypeScript**: Type safety across the entire application

## Database & ORM
- **Drizzle ORM**: Type-safe database operations
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **connect-pg-simple**: PostgreSQL session store for Express

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Lucide React**: Icon library
- **class-variance-authority**: Type-safe variant management
- **clsx & tailwind-merge**: Conditional className utilities

## State Management & Data Fetching
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Form validation resolvers

## Authentication & Security
- **bcrypt**: Password hashing
- **Zod**: Runtime type validation

## Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit integration
- **PostCSS & Autoprefixer**: CSS processing

## Routing & Navigation
- **Wouter**: Lightweight client-side routing