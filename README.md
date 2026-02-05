# 🎯 Twisty Dashboard

> A modern, feature-rich dashboard application built with Next.js, TypeScript, and Tailwind CSS that brings your workplace management to life with stunning animations and intuitive interactions.

![Twisty Dashboard](https://img.shields.io/badge/Twisty-Dashboard-FF5722?style=for-the-badge&logo=next.js)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

## ✨ Features

### 🏢 **Comprehensive Management System**
- **👥 People Management** - Team directories, departments, and role management
- **🤝 Hiring Pipeline** - Job listings, candidate tracking, and interview scheduling
- **💻 Device Inventory** - Hardware tracking, software licenses, and maintenance management
- **📱 App Management** - Installed apps, marketplace, and integration hub
- **💰 Salary & Benefits** - Compensation overview, benefits administration, and payroll
- **📅 Calendar & Events** - Meeting scheduling, team availability, and event management
- **⭐ Performance Reviews** - Employee evaluations, feedback system, and goals tracking

### 🎨 **Premium UI/UX**
- **🌊 Smooth Animations** - Framer Motion powered micro-interactions
- **🎭 Interactive Elements** - Hover effects, transitions, and loading states
- **📱 Responsive Design** - Perfect on desktop, tablet, and mobile
- **🎨 Modern Design** - Clean aesthetics with the signature Twisty orange theme
- **♿ Accessible** - WCAG compliant with keyboard navigation support

### ⚡ **Performance & Experience**
- **🚀 Fast Page Switching** - Optimized navigation with preloading
- **🔄 Smart Caching** - Intelligent page preloading for instant transitions
- **📊 Rich Visualizations** - Interactive charts and data displays
- **🔍 Advanced Search** - Animated search bars with focus effects
- **📈 Real-time Stats** - Live updating dashboard metrics

## 🛠️ Tech Stack

| Technology | Version | Description |
|-----------|---------|-------------|
| **⚛️ Next.js** | 14+ | React framework with App Router |
| **📘 TypeScript** | 5+ | Type-safe development |
| **🎨 Tailwind CSS** | 3+ | Utility-first CSS framework |
| **🎭 Framer Motion** | 10+ | Animation library |
| **🔧 Lucide React** | Latest | Beautiful icon library |
| **🎨 Next Fonts** | - | Optimized font loading |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SudipThapa-Arc/Dashboard_Sample.git
   cd Dashboard_Sample
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the dashboard in action! 🎉

## 📱 Available Pages

| Page | Route | Description |
|-------|--------|-------------|
| **🏠 Dashboard** | `/` | Main overview with stats and widgets |
| **👥 People** | `/people` | Team management and organization structure |
| **🤝 Hiring** | `/hiring` | Recruitment and candidate tracking |
| **💻 Devices** | `/devices` | Hardware and software management |
| **📱 Apps** | `/apps` | Application and integration hub |
| **💰 Salary** | `/salary` | Compensation and benefits administration |
| **📅 Calendar** | `/calendar` | Events and meeting scheduling |
| **⭐ Reviews** | `/reviews` | Performance management and feedback |

## 🎯 Key Features Showcase

### 🌊 Micro-Interactions
- **Hover Effects** - Cards lift with shadows on hover
- **Button Animations** - Scale and color transitions
- **Icon Rotations** - Dynamic icon movements
- **Smooth Transitions** - Page-to-page animations
- **Loading States** - Beautiful skeleton loaders

### 📊 Dashboard Components
- **Stats Cards** - Animated metrics with icons
- **Data Tables** - Sortable and filterable data
- **Progress Bars** - Visual progress indicators
- **User Profiles** - Rich user information displays
- **Status Badges** - Color-coded status indicators

### 🔧 Custom Components
- **AnimatedSearch** - Enhanced search with focus effects
- **StaggerContainer** - Staggered list animations
- **FloatingAnimation** - Subtle floating effects
- **PulseAnimation** - Attention-grabbing pulses
- **PageLoader** - Smooth loading transitions

## 🎨 Design System

### Colors
- **🧡 Primary** - `#FF5722` (Twisty Orange)
- **🔵 Background** - `#F3F4F6` (Light Gray)
- **⚪ Surface** - `#FFFFFF` (Card White)
- **⚫ Text** - `#1F2937` (Dark Gray)
- **🟢 Success** - `#10B981` (Green)
- **🟡 Warning** - `#F59E0B` (Amber)

### Typography
- **🔤 Font Family** - Inter (Modern sans-serif)
- **📝 Headings** - Bold and prominent
- **📄 Body Text** - Medium weight for readability

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── people/             # People management page
│   ├── hiring/             # Hiring pipeline page
│   ├── devices/            # Device inventory page
│   ├── apps/               # App management page
│   ├── salary/             # Salary & benefits page
│   ├── calendar/           # Calendar & events page
│   ├── reviews/            # Performance reviews page
│   └── layout.tsx          # Root layout
├── components/             # Reusable components
│   ├── layout/            # Layout components
│   ├── ui/               # UI components
│   └── dashboard/        # Dashboard specific components
├── lib/                  # Utilities and helpers
└── hooks/                # Custom React hooks
```

## 🧪 Development Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Run tests
npm test

# Lint code
npm run lint

# Type check
npm run type-check
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📝 Code Style

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting
- **Husky** for git hooks
- **Conventional Commits** for commit messages

## 🌟 Roadmap

- [ ] 📊 Advanced Analytics Dashboard
- [ ] 🔔 Real-time Notifications System
- [ ] 🌍 Multi-language Support
- [ ] 🎨 Dark Mode Theme
- [ ] 📱 Mobile App Version
- [ ] 🔌 Third-party Integrations
- [ ] 🤖 AI-Powered Insights

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**👨‍💻 Sudip Thapa**
- 📧 Email: [js7096785@gmail.com](mailto:js7096785@gmail.com)
- 🔗 GitHub: [@SudipThapa-Arc](https://github.com/SudipThapa-Arc)
- 💼 Project: [Dashboard_Sample](https://github.com/SudipThapa-Arc/Dashboard_Sample)

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For the beautiful animation library
- **Lucide** - For the gorgeous icon set
- **Vercel** - For the hosting platform

---

<div align="center">
  <p> Made with ❤️ and ☕ by Sudip Thapa </p>
  <p> ⭐ Star this repo if it helped you! </p>
</div>