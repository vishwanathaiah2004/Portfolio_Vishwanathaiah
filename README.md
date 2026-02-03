# Developer Portfolio

A stunning, fully responsive developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Modern dark theme with glassmorphism effects
- Smooth animations using Framer Motion
- Fully responsive design (mobile, tablet, desktop)
- SEO optimized
- Production-ready code
- Clean component architecture

## Sections

1. **Hero Section** - Eye-catching introduction with animated background
2. **About Me** - Professional summary and key strengths
3. **Skills** - Categorized skill cards with technologies
4. **Projects** - Showcase of featured projects with tech stack and achievements
5. **AI Chatbot Solutions** - Highlighting AI services for businesses
6. **Achievements** - Competition results and rankings
7. **Certifications** - Professional certifications
8. **Resume Download** - Direct resume download
9. **Contact** - Contact form with validation and social links
10. **Footer** - Social media links and copyright

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Hero Section** (`components/sections/Hero.tsx`)
   - Update name and tagline
   - Update social media links (GitHub, LinkedIn, Email)

2. **About Section** (`components/sections/About.tsx`)
   - Modify the professional summary

3. **Skills Section** (`components/sections/Skills.tsx`)
   - Add/remove skills in the `skillCategories` array

4. **Projects Section** (`components/sections/Projects.tsx`)
   - Update the `projects` array with your projects
   - Add GitHub and demo links

5. **Contact Section** (`components/sections/Contact.tsx`)
   - Update email address
   - Configure form submission handler

6. **Resume Download**
   - Place your resume PDF file in the `public` folder as `resume.pdf`
   - Or update the path in `components/sections/Resume.tsx`

### Update SEO

Edit `app/layout.tsx` to update:
- Page title
- Meta description
- Open Graph tags
- Twitter card data
- Keywords

### Colors

The portfolio uses a modern color scheme:
- Primary: Blue (blue-500, blue-600)
- Secondary: Emerald (emerald-500, emerald-600)
- Accent: Orange (orange-400, orange-500)
- Background: Slate (slate-900, slate-950)

To change colors, search and replace the color classes in component files.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify

The project is already configured for Netlify with `netlify.toml`.

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Deploy

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify

## Performance

- Static Site Generation (SSG) for optimal performance
- Optimized animations and images
- Minimal JavaScript bundle size
- Fast page loads

## Important Notes

- **Resume File**: Don't forget to add your `resume.pdf` file to the `public` folder
- **Social Links**: Update all social media links in the components
- **Email**: Configure a proper form submission handler for the contact form
- **Images**: Add your own images/screenshots for projects if needed

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For questions or issues, please open an issue on GitHub.
