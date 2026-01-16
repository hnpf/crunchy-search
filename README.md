# crunchy-search

A standalone search engine derived from the VIREX portfolio project. crunchy-search provides instant answers powered by Wikipedia API with support for multiple search engines.

## Features

- **Instant Answers**: Site-powered summaries for fast results
- **Multiple Search Engines**: DuckDuckGo, Google, and Bing support, MIGHT sync with virex.lol settings cookies.
- **Dark/Light Theme**: Automatic theme switching
- **Responsive Design**: Works on most devices

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

Simply navigate to the application and start searching! The "Return Home" button will take you to [virex.lol](https://virex.lol).

## Architecture

- **React 19** with TypeScript
- **Vite** for build tooling
- **Framer Motion** for animations
- **Typescript** for styling

## Search Flow

1. User enters search query
2. App fetches Wikipedia summary for instant answers
3. If no summary available, redirects to chosen search engine
4. Displays related topics for further exploration

## License
MIT
Private project - All rights reserved.
