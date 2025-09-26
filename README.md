# IELTS Institute - Modern Learning Platform

A modern, professional, and fully responsive website for an IELTS preparation institute built with React, TypeScript, and Tailwind CSS.

## About This Project

This project is a comprehensive landing page for an IELTS (International English Language Testing System) preparation institute. It features a clean, modern design with dedicated sections for showcasing courses, student testimonials, and key features that help students achieve their target band scores.

### Key Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Professional Layout**: Clean navigation, hero section, features, and testimonials
- **Performance Focused**: Built with Vite for fast development and production builds

## Project Structure

```
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── hero-image.jpg
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── FeatureCard.tsx      # Individual feature showcase
│   │   ├── Features.tsx         # Features section
│   │   ├── Footer.tsx           # Site footer
│   │   ├── Hero.tsx             # Hero/banner section
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── TestimonialCard.tsx  # Student testimonial card
│   │   └── Testimonials.tsx     # Testimonials section
│   ├── hooks/                   # Custom React hooks
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── pages/
│   │   ├── Index.tsx            # Main landing page
│   │   └── NotFound.tsx         # 404 page
│   ├── App.tsx                  # Main app component
│   ├── index.css                # Global styles & design tokens
│   └── main.tsx                 # App entry point
├── index.html
├── package.json
├── tailwind.config.ts           # Tailwind configuration
├── vite.config.ts              # Vite configuration
└── README.md
```

## Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Router DOM** - Client-side routing

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone <YOUR_REPOSITORY_URL>
   ```

2. **Navigate to the project directory**

   ```bash
   cd fluent-frontiers-main
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:8080
   ```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Design System

The project uses a custom design system with semantic color tokens defined in `src/index.css` and `tailwind.config.ts`. This ensures consistent theming across all components and supports both light and dark modes.

## Responsive Design

The website is fully responsive and optimized for:

- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)
- **Large screens** (1440px and up)

## Customization

To customize the website for your IELTS institute:

1. **Update content** in component files (`src/components/`)
2. **Modify colors** in `src/index.css` and `tailwind.config.ts`
3. **Replace images** in `src/assets/`
4. **Update SEO tags** in `index.html`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support and questions, please open an issue in the GitHub repository or contact the development team.

---
