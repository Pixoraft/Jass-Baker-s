# Overview

This is a premium bakery website for "Jass Baker's" - a high-end eggless bakery located in Jalandhar, Punjab. The application is built as a modern, responsive single-page application showcasing the bakery's products, services, and brand identity. The website serves as a digital storefront to attract customers and facilitate orders through WhatsApp, phone calls, and Instagram direct messages.

The project implements a conversion-optimized design with elegant visual aesthetics using a warm color palette of cream whites, pastels (peach, rose), chocolate browns, and golden accents. It features smooth animations, hover effects, and a mobile-first responsive design to create a premium user experience that builds trust and encourages customer engagement.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a React-based single-page application (SPA) architecture built with Vite for fast development and optimized production builds. The frontend follows a component-based approach with reusable UI components built using Radix UI primitives and styled with Tailwind CSS.

### Component Structure
- **Layout Components**: Navigation, Hero, Footer for consistent site structure
- **Content Components**: About, Menu, Gallery, Testimonials, Contact sections
- **Interactive Components**: CustomOrder form, mobile-responsive navigation
- **UI Library**: Comprehensive shadcn/ui component system with Radix UI primitives

### Styling Strategy
- **CSS Framework**: Tailwind CSS with custom CSS variables for bakery-specific color theming
- **Typography**: Google Fonts integration (Playfair Display for headers, Poppins for body text)
- **Design System**: Consistent spacing, border radius, and shadow patterns
- **Responsive Design**: Mobile-first approach with breakpoint-specific styling

### State Management
- **Query Management**: TanStack Query for server state management and caching
- **Local State**: React hooks (useState, useEffect) for component-level state
- **Form Handling**: React Hook Form with Zod schema validation for form management

## Backend Architecture
The backend uses Express.js with TypeScript in a minimal REST API structure. Currently implements a basic server setup with placeholder routes and in-memory storage for future expansion.

### Server Structure
- **Framework**: Express.js with TypeScript for type safety
- **Middleware**: JSON parsing, CORS handling, request logging
- **Error Handling**: Centralized error handling middleware
- **Development Setup**: Vite integration for hot module replacement in development

### Storage Interface
- **Current Implementation**: In-memory storage with user management interface
- **Future Ready**: Designed for easy migration to PostgreSQL with Drizzle ORM
- **Schema Definition**: User schema defined with Drizzle and Zod validation

### API Design
- **REST Conventions**: RESTful API structure with `/api` prefix
- **Request/Response**: JSON-based communication with proper HTTP status codes
- **Logging**: Request duration and response logging for monitoring

## Database Architecture
The application is configured for PostgreSQL integration using Drizzle ORM, though currently using in-memory storage for simplicity.

### ORM Configuration
- **Drizzle ORM**: Type-safe database operations with schema-first approach
- **Migration Strategy**: Drizzle Kit for database schema migrations
- **Connection**: Neon serverless PostgreSQL integration ready
- **Schema Validation**: Zod schemas for runtime type checking

### Data Models
- **User Schema**: Basic user management with username/password fields
- **Future Extensions**: Ready for product catalogs, orders, customer data

## Build and Deployment
The application uses a modern build pipeline optimized for production deployment.

### Build Process
- **Frontend**: Vite bundling with tree-shaking and code splitting
- **Backend**: ESBuild compilation to ESM format for Node.js
- **Assets**: Optimized image handling and font loading
- **TypeScript**: Full type checking across client and server code

### Development Experience
- **Hot Reload**: Vite HMR for instant frontend updates
- **Type Safety**: Shared types between client and server
- **Path Aliases**: Clean import paths with @ and @shared aliases
- **Linting**: TypeScript strict mode for code quality

# External Dependencies

## UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Typography with Playfair Display and Poppins fonts
- **Font Awesome**: Additional icons for social media and contact elements

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking for better code quality
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing for Tailwind CSS

## Database and Validation
- **Drizzle ORM**: Modern TypeScript ORM for PostgreSQL
- **Drizzle Kit**: Database migration and introspection tools
- **Neon Database**: Serverless PostgreSQL database platform
- **Zod**: Runtime type validation and schema definition

## State Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Wouter**: Lightweight client-side routing

## External Services Integration
- **WhatsApp Business API**: Direct messaging for order placement
- **Instagram Integration**: Social media linking for brand presence
- **Google Maps**: Location embedding for store visibility
- **Swiggy/Zomato**: Food delivery platform integration (referenced)

## Production Services
- **Replit**: Development environment and hosting platform
- **Replit Plugins**: Error overlay and cartographer for enhanced development experience