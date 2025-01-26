# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and sections for projects, skills, and professional experience.

## 🚀 Live Demo

Visit the live site: [joelbiere.com](https://joel-biere-portfolio.web.app/)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme toggle with persisted preference
- **Modern UI Components**: Built with shadcn/ui components
- **Animated Elements**: Smooth transitions and animations
- **Project Showcase**: YouTube demo integration and project cards
- **Tech Stack Display**: Animated tech stack marquees
- **Professional Timeline**: Visual representation of career progression

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Deployment**: Firebase Hosting
- **Animations**: CSS Animations, react-fast-marquee
- **Icons**: Lucide React

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout with theme provider
│   ├── page.tsx      # Main page component
│   └── globals.css   # Global styles and Tailwind
├── components/       
│   ├── AboutMe.tsx   # About section
│   ├── ProjectsSection.tsx  # Projects showcase
│   ├── Timeline.tsx  # Professional journey
│   └── ...          # Other components
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/JoelBiere/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 📱 Responsive Design

The site is optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## 🎨 Theme Customization

The color scheme and theme variables are defined in:
- `globals.css` - Theme variables and custom animations
- `tailwind.config.ts` - Tailwind configuration and theme extension
- Special thanks to Coolor for the color palette inspiration [Coolors.co](https://coolors.co/282828-8191ab-d19d1f-272726-4e535f)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/JoelBiere/portfolio/issues).

## 👤 Author

**Joel Biere**
- LinkedIn: [@joelbiere](https://www.linkedin.com/in/joel-biere-1a7b947b/)
- GitHub: [@JoelBiere](https://github.com/JoelBiere)

---

⭐️ If you like this project, give it a star on GitHub!