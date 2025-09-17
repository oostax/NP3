# Hero Section Project

A modern Next.js project featuring a beautiful hero section component with animations and responsive design.

## Features

- 🎨 Modern hero section with gradient backgrounds
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🌙 Dark mode support
- 🎯 Interactive navigation with scroll effects
- 🖼️ Customer logos showcase
- 🎪 Animated call-to-action buttons

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Components**: Custom UI components with shadcn/ui patterns

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── demo/
│   │   └── page.tsx          # Demo page showcasing the hero section
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page with hero section
├── components/
│   ├── blocks/
│   │   └── hero-section-1.tsx # Main hero section component
│   └── ui/
│       ├── animated-group.tsx # Animation wrapper component
│       └── button.tsx         # Button component
└── lib/
    └── utils.ts              # Utility functions
```

## Components

### HeroSection
The main hero section component that includes:
- Animated header with navigation
- Hero content with call-to-action buttons
- Background images with parallax effects
- Customer logos showcase
- Responsive design for all screen sizes

### AnimatedGroup
A wrapper component for creating smooth animations using Framer Motion with preset animation types:
- fade
- slide
- scale
- blur
- zoom
- flip
- bounce
- rotate
- swing

### Button
A customizable button component with multiple variants:
- default
- destructive
- outline
- secondary
- ghost
- link

## Customization

### Colors
The project uses CSS custom properties for theming. You can modify the colors in `src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  /* ... more variables */
}
```

### Content
Update the hero section content in `src/components/blocks/hero-section-1.tsx`:
- Change the main heading
- Update the description text
- Modify call-to-action button text
- Replace customer logos

### Animations
Customize animations by modifying the `transitionVariants` object in the hero section component.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

If you have any questions or need help, please open an issue on GitHub.
