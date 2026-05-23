# 🚀 Vaya Shyam - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring a professional dark theme design, interactive contact form, and comprehensive showcase of skills and projects.

![Portfolio Preview](./public/profile.jpg)

## ✨ Features

- **Modern Design**: Dark theme with blue accent colors and glassmorphism effects
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Contact Form**: Real-time email sending with EmailJS integration
- **Animated Components**: Smooth animations and hover effects throughout
- **Professional Sections**: Complete portfolio structure with all essential sections
- **SEO Optimized**: Built with Next.js for optimal performance and SEO

## 🛠️ Technologies & Tools

### Frontend Framework
- **Next.js 15.5.2** - React framework with App Router
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript development

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework
- **CSS3** - Custom animations and effects
- **Responsive Design** - Mobile-first approach

### Email Integration
- **EmailJS** - Client-side email sending service
- **@emailjs/browser** - EmailJS browser SDK

### Development Tools
- **Turbopack** - Fast bundler for Next.js
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing tool
- **Git** - Version control system

### Deployment Ready
- **Vercel** - Optimized for Vercel deployment
- **Environment Variables** - Secure configuration management
- **Production Build** - Optimized for performance

## 📁 Project Structure

```
portfolio/
├── public/
│   └── profile.jpg          # Profile image
├── src/
│   └── app/
│       ├── components/
│       │   ├── Navbar.tsx   # Navigation component
│       │   ├── Header.tsx   # Hero section with profile
│       │   ├── About.tsx    # About me section
│       │   ├── TechStack.tsx # Technology skills
│       │   ├── Experience.tsx # Work experience
│       │   ├── Education.tsx # Educational background
│       │   ├── Projects.tsx # Portfolio projects
│       │   ├── Certifications.tsx # Certificates
│       │   ├── Contact.tsx  # Contact form
│       │   └── Footer.tsx   # Footer with social links
│       ├── globals.css      # Global styles
│       ├── layout.tsx       # Root layout
│       └── page.tsx         # Main page
├── .env.local              # Environment variables
├── .gitignore              # Git ignore rules
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- EmailJS account (for contact form)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{email}}` - Sender's email (duplicate)
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
4. Copy your Service ID, Template ID, and Public Key
5. Add them to your `.env.local` file

## 🎨 Design Features

- **Dark Theme**: Professional slate-900 background with blue accents
- **Glassmorphism**: Backdrop blur effects on cards and components
- **Animations**: Smooth transitions, hover effects, and loading states
- **Typography**: Gradient text effects and proper font hierarchy
- **Icons**: Professional SVG icons for social media and navigation
- **Responsive Grid**: Adaptive layouts for all screen sizes

## 📱 Components Overview

- **Navbar**: Fixed navigation with active section tracking
- **Header**: Hero section with large profile image and animated typing effect
- **About**: Personal introduction with AI-driven development focus
- **TechStack**: Technology badges and skills showcase
- **Experience**: Professional work experience and internships
- **Education**: Academic background and achievements
- **Projects**: Portfolio projects with GitHub links
- **Certifications**: Professional certificates and credentials
- **Contact**: Interactive form with EmailJS integration
- **Footer**: Social links and additional navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Great alternative with similar features
- **GitHub Pages**: Free hosting for static sites
- **Railway**: Full-stack deployment platform

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎯 Performance Features

- **Next.js App Router**: Latest routing system for optimal performance
- **Turbopack**: Fast bundling and hot reload
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **SEO Ready**: Meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vaya Shyam**
- Portfolio: [https://shyamvaya.vercel.app/](https://shyamvaya.vercel.app/)
- LinkedIn: [https://www.linkedin.com/in/vaya-shyam/](https://www.linkedin.com/in/vaya-shyam/)
- GitHub: [https://github.com/shyamsoni550](https://github.com/shyamsoni550)
- Email: vayashyam550@gmail.com

---

⭐ **Star this repository if you found it helpful!**
