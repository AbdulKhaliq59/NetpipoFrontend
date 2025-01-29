# Rick and Morty Episode Viewer

A responsive web application that displays episodes from the Rick and Morty TV series using React, TypeScript, Redux Toolkit, and GraphQL.

## 🚀 Features

- Episode listing with detailed information
- Pagination functionality
- Advanced filtering capabilities
- Responsive design using Tailwind CSS
- GraphQL integration with Apollo Client
- State management using Redux Toolkit
- TypeScript for enhanced type safety
- Loading states and error handling

## 🛠️ Technologies Used

- React 18
- TypeScript
- Redux Toolkit
- GraphQL with Apollo Client
- Tailwind CSS
- Vite

## 📋 Prerequisites

Before you begin, ensure you have installed:
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

## ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/rick-morty-viewer.git
cd rick-morty-viewer
```

2. Install dependencies
```bash
npm install
```

3. Create a local environment file
```bash
cp .env.example .env
```

4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
    ├── components/        # React components
    │   ├── EpisodeCard.tsx
    │   ├── EpisodeList.tsx
    │   ├── Pagination.tsx
    │   └── Filter.tsx
    ├── store/            # Redux store configuration
    │   ├── store.ts
    │   └── episodeSlice.ts
    ├── services/         # API services
    │   └── api.ts
    ├── types/            # TypeScript type definitions
    │   └── types.ts
    ├── App.tsx           # Root component
    └── main.tsx         # Application entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## 🌐 API Integration

This project uses the Rick and Morty GraphQL API. The API endpoint is:
```
https://rickandmortyapi.com/graphql
```

## 🎨 Styling

The project uses Tailwind CSS for styling. The configuration can be found in:
- `vite.config.ts`
- `postcss.config.mjs`

## 🔍 State Management

Redux Toolkit is used for state management with the following features:
- Episode data caching
- Pagination state
- Filter state
- Loading states
- Error handling

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up

## 📈 Performance Optimization

- Implemented pagination for better data handling
- Used React.memo for performance optimization
- Implemented proper error boundaries
- GraphQL query optimization

## 🌐 Hosted Link

For easy testing, you can access the hosted application at:
```
https://netpipo.netlify.app
```
