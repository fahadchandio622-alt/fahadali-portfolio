# Fahad Ali - Portfolio

A modern, fast, and fully optimized portfolio website built with Vite, React, and TypeScript.

## 🚀 Features

- ⚡ **Vite** - Next generation frontend tooling
- ⚛️ **React 18** - UI library with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 💅 **SCSS/Sass** - CSS preprocessing
- 📱 **Responsive Design** - Mobile-first approach
- 🔍 **TypeScript** - Type-safe JavaScript
- 🌙 **Dark Mode** - Built-in dark mode support
- 🎯 **Code Splitting** - Lazy-loaded routes
- 📦 **Asset Optimization** - Image compression
- 🔄 **HMR** - Hot Module Replacement
- 📍 **Path Aliases** - Clean imports with @/
- 🌐 **API Proxy** - Development API proxying
- 📊 **Source Maps** - Production debugging
- 🚀 **SEO Ready** - Meta tags configuration

## 📋 Prerequisites

- Node.js 16+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/fahadchandio622-alt/fahadali-portfolio.git
cd fahadali-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

## 🏃 Development

Start the development server with HMR:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 🔨 Build

Build for production with optimizations:
```bash
npm run build
```

## 👁️ Preview

Preview production build locally:
```bash
npm run preview
```

## 📝 Type Checking

Run TypeScript type checker:
```bash
npm run type-check
```

## 🎯 Linting

Run ESLint:
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── pages/           # Route pages with lazy loading
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── App.tsx         # Main app component
├── main.tsx        # React entry point
├── index.css       # Global styles with Tailwind
└── vite-env.d.ts  # Vite environment types

Configuration files:
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript config
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── .eslintrc.cjs       # ESLint configuration
├── .env.example        # Environment variables template
└── package.json        # Dependencies and scripts
```

## 🌳 Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
VITE_API_URL=http://localhost:3000/api
VITE_API_TIMEOUT=30000
VITE_APP_NAME=Fahad Ali Portfolio
VITE_ENABLE_CONTACT_FORM=true
```

## 📚 Key Technologies

- **Vite**: Ultra-fast build tool with HMR
- **React**: UI library with hooks support
- **TypeScript**: Type safety for JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **SCSS/Sass**: CSS preprocessing
- **PostCSS**: CSS transformations with autoprefixer
- **React Router**: Client-side routing
- **ESLint**: Code quality tool

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

### Vercel/Netlify
1. Connect repository
2. Set build command: `npm run build`
3. Set output directory: `dist`

## 📦 Build Optimizations

- **Code Splitting**: Routes lazy-loaded on demand
- **Asset Minification**: Production bundles minified with Terser
- **Image Optimization**: Automatic image compression
- **Tree Shaking**: Unused code eliminated
- **Source Maps**: Production debugging support
- **Chunk Splitting**: Separate vendor and app chunks

## 🔄 API Proxy

Development server proxies `/api/*` requests to your backend:

```javascript
// vite.config.ts
proxy: {
  '/api': {
    target: 'http://localhost:3000',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ''),
  },
}
```

## 🐛 Debugging

- Source maps enabled in development and production
- DevTools support for React Components
- TypeScript strict mode for type safety

## 📄 License

MIT

## 👤 Author

Fahad Ali - [@fahadchandio622-alt](https://github.com/fahadchandio622-alt)

---

Happy coding! 🚀
