# Virtual Rakhi 2026 🎋

A beautiful, interactive virtual Raksha Bandhan ceremony web application that brings the traditional festival of sibling love into the digital realm. Celebrate Rakhi with your loved ones across any distance through this immersive, emotional, and cinematic experience.

## 🌟 Overview

Virtual Rakhi 2026 is a comprehensive web application that recreates the sacred Raksha Bandhan ceremony with authentic traditions, smooth animations, and heartfelt interactions. Whether your siblings are miles away or just unable to meet in person, this platform creates a meaningful celebration experience.

## ✨ Key Features

### Interactive Ceremony Steps

1. **Welcome Screen**
   - Personalized greetings with URL-based name customization (`?name=BrotherName`)
   - Animated sister avatar with warm welcome message
   - Interactive choice buttons for ceremony initiation

2. **Tilak Ceremony**
   - Multiple traditional Tilak/Bottu style options:
     - Traditional Round Red Kumkum with Akshat
     - Elegant Chandan & Red Tilak
     - Royal Trishul / Festive Tilak
   - Animated hand gesture for sacred application
   - Glowing sparkle effects

3. **Aarti Blessing**
   - Ornate golden Aarti Thali with glowing diya
   - Interactive circular motion (drag or click)
   - Temple bell sound effects
   - 360-degree rotational animation

4. **Rakhi Tying**
   - Showcase of 4-5 beautiful Rakhi designs:
     - Traditional Zari
     - Rudraksha
     - Modern Minimalist Gold
     - Colorful Floral
   - Animated wrist wrapping with sparkle effects
   - Close-up tying animation

5. **Sweet Offering**
   - Selection of traditional Indian sweets:
     - Kaju Katli
     - Gulab Jamun
     - Motichoor Laddu
     - Rasgulla
   - Animated feeding with confetti effects

6. **Virtual Hug & Blessings**
   - Heartwarming sister avatar embrace animation
   - Pulsing glowing heart effect
   - Floating festive particles
   - Interactive blessing button
   - Emotional captions and messages

7. **Grand Finale**
   - Festive fireworks and confetti burst
   - Personalized parchment letter
   - Download celebration memory card (PNG/PDF)
   - Share on WhatsApp option
   - Replay functionality

### Design & Experience

- **Visual Theme**: Festive Indian Royal (Deep Maroon, Warm Gold, Ivory, Orange glows)
- **Audio**: Optional festive instrumental music (Shehnai/Sitar) with mute toggle
- **Tone**: Warm, poetic, and loving conversational English
- **Animations**: Smooth, cinematic transitions throughout
- **Responsive**: Works on desktop, tablet, and mobile devices

## 📁 Project Structure

```
Virtual_Rakhi_2026/
├── rakhi/                      # Main Rakhi application
│   └── rakhi-bond-tales-main/  # Core application files
│       ├── src/                # Source code
│       │   ├── components/     # React components
│       │   │   ├── ceremony/   # Ceremony step components
│       │   │   └── ui/         # UI components
│       │   ├── assets/         # Images, videos, media
│       │   ├── lib/            # Utilities and helpers
│       │   └── routes/         # Application routes
│       ├── public/             # Public assets
│       └── package.json        # Dependencies
│
├── rakhi-bond/                 # Additional Rakhi bond features
│   └── rakhi-bond-tales-main/  # Extended functionality
│       └── src/                # Source files
│
└── virtual rakhi/              # Standalone virtual rakhi version
    ├── index.html              # Main HTML file
    ├── script.js               # JavaScript logic
    ├── styles.css              # Styling
    ├── DEPLOYMENT.md           # Deployment guide
    ├── FEATURES.md             # Detailed features
    ├── PROJECT_SUMMARY.md      # Project overview
    ├── QUICKSTART.md           # Quick start guide
    ├── START_HERE.md           # Getting started
    └── TESTING_CHECKLIST.md    # Testing guidelines
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or bun package manager
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhuvaneshwari244/Virtual_Rakhi_2026.git
   cd Virtual_Rakhi_2026
   ```

2. **Navigate to the main application**
   ```bash
   cd rakhi/rakhi-bond-tales-main
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

5. **Open in browser**
   ```
   Navigate to http://localhost:5173 (or the port shown in terminal)
   ```

### Quick Start (Standalone Version)

For the standalone HTML version:

1. Navigate to `virtual rakhi/` folder
2. Open `index.html` in a web browser
3. No installation required!

## 🛠️ Technology Stack

### Main Application (rakhi/)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: TanStack Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI, shadcn/ui
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React
- **Notifications**: Sonner

### Standalone Version (virtual rakhi/)
- **HTML5**
- **CSS3**
- **Vanilla JavaScript**

## 📖 Documentation

Detailed documentation available in the `virtual rakhi/` folder:

- **[START_HERE.md](virtual%20rakhi/START_HERE.md)** - Getting started guide
- **[FEATURES.md](virtual%20rakhi/FEATURES.md)** - Comprehensive feature list
- **[DEPLOYMENT.md](virtual%20rakhi/DEPLOYMENT.md)** - Deployment instructions
- **[QUICKSTART.md](virtual%20rakhi/QUICKSTART.md)** - Quick setup guide
- **[PROJECT_SUMMARY.md](virtual%20rakhi/PROJECT_SUMMARY.md)** - Project overview
- **[TESTING_CHECKLIST.md](virtual%20rakhi/TESTING_CHECKLIST.md)** - QA guidelines

## 🎨 Customization

### Personalization

Add the brother's name to the URL:
```
https://your-domain.com/?name=YourBrotherName
```

### Audio Control

- Background music is optional
- Mute/unmute toggle available
- Festive instrumental tracks included

### Visual Customization

Edit theme colors in:
- Main app: `src/styles.css`
- Standalone: `virtual rakhi/styles.css`

## 🌐 Deployment

### Vercel (Recommended for React App)

```bash
cd rakhi/rakhi-bond-tales-main
npm run build
# Deploy the .output folder to Vercel
```

### Netlify

```bash
cd rakhi/rakhi-bond-tales-main
npm run build
# Deploy the .output folder to Netlify
```

### GitHub Pages (Standalone Version)

1. Copy contents of `virtual rakhi/` to GitHub Pages repository
2. Enable GitHub Pages in repository settings
3. Access via `https://yourusername.github.io/repo-name`

See [DEPLOYMENT.md](virtual%20rakhi/DEPLOYMENT.md) for detailed deployment instructions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is open source and available for personal and commercial use.

## 👥 Authors

- **Bhuvaneshwari244** - [GitHub Profile](https://github.com/Bhuvaneshwari244)

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Animations powered by [Framer Motion](https://www.framer.com/motion)

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## 🎉 Happy Raksha Bandhan!

May this virtual ceremony bring joy, love, and strengthen the eternal bond between siblings, no matter the distance! 💖

---

**Repository**: https://github.com/Bhuvaneshwari244/Virtual_Rakhi_2026

**Live Demo**: [Add your deployed URL here]

**Made with ❤️ for celebrating sibling bonds across distances**
