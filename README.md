# Bento Grid Portfolio

A modern, premium web developer portfolio built with the Bento Grid design trend.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (Icons)

## ✨ Features

- 🎨 Modern Bento Grid layout
- 🌙 Dark mode by default
- ✨ Smooth Framer Motion animations
- 📱 Fully responsive design
- 🎯 Component-based architecture
- 🚀 Production-ready code

## 🛠️ Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main Bento Grid page
│   └── globals.css         # Global styles
├── components/
│   ├── BentoCard.tsx       # Base card component
│   ├── Button.tsx          # Reusable button
│   └── cards/
│       ├── HeroCard.tsx
│       ├── AboutCard.tsx
│       ├── ProjectCard.tsx
│       ├── SkillsCard.tsx
│       ├── LocationCard.tsx
│       ├── MusicCard.tsx
│       └── ContactCard.tsx
└── tailwind.config.js      # Tailwind configuration
```

## 🎨 Customization

### Update Personal Information

Edit the card components in `components/cards/` to add your own:

- Name and tagline (HeroCard.tsx)
- About information (AboutCard.tsx)
- Projects (ProjectCard.tsx)
- Skills (SkillsCard.tsx)
- Location (LocationCard.tsx)
- Contact details (ContactCard.tsx)

### Change Colors

Update the accent color in `tailwind.config.js`:

```js
colors: {
  accent: {
    DEFAULT: '#8b5cf6', // Change this to your preferred color
    light: '#a78bfa',
    dark: '#7c3aed',
  }
}
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📝 License

This project is open source and available for personal and commercial use.

---

Built with ❤️ using Next.js and modern web technologies.
