# Next.js Project

This is a [Next.js](https://nextjs.org/) project built with modern web development tools and libraries. It leverages TypeScript for type safety, Tailwind CSS for styling, shadcn for accessible UI components, and Zustand for state management.

## Features

- **Next.js 15**: App Router for optimized routing and server-side rendering.
- **TypeScript**: Static typing for improved developer experience and code reliability.
- **Tailwind CSS**: Utility-first CSS framework for rapid and responsive UI development.
- **shadcn**: Beautiful, accessible UI components built with Radix UI and Tailwind CSS.
- **Zustand**: Lightweight state management for React applications.
- **Lucide Icons**: Beautiful, customizable icons for a modern UI.
- **ESLint & Prettier**: Code linting and formatting for consistent code quality.
- **SVGR**: Transform SVGs into React components for easy integration.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/), [npm](https://www.npmjs.com/), or [yarn](https://yarnpkg.com/) as a package manager

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run format`: Formats code using Prettier.

## Project Structure

```
├── app/                  # Next.js App Router pages and layouts
├── assets/               # Static assets (images, fonts, etc.)
├── components/           # Reusable React components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and helpers
├── public/               # Static assets (images, fonts, etc.) for Next.js
├── store/                # Zustand store definitions
├── types/                # TypeScript type definitions
├── .gitignore            # Git ignore file
├── .prettierrc           # Prettier configuration
├── .svgrrc               # SVGR configuration
├── components.json       # shadcn UI components configuration
├── eslint.config.mjs     # ESLint configuration
├── next-env.d.ts         # Next.js TypeScript environment definitions
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Dependency lock file
├── postcss.config.mjs    # PostCSS configuration for Tailwind CSS
├── README.md             # This file
├── tsconfig.json         # TypeScript configuration
```

## State Management

**Zustand** is used for lightweight, scalable state management. Stores are defined in the `store/` directory.

## Components

The project uses **shadcn** for accessible, styled components, built on top of Radix UI and Tailwind CSS. Reusable components are located in the `components/` directory, and shadcn configuration is stored in `components.json`.

## Icons

**Lucide React** provides a set of customizable icons. SVGs can also be converted to React components using `@svgr/cli`.

## Code Quality

- **ESLint**: Enforces code quality with Next.js-specific rules.
- **Prettier**: Ensures consistent code formatting.
- Run `npm run lint` to check for linting issues and `npm run format` to format code.

## Building for Production

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```
