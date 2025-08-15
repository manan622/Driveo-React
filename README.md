# 🚀 Driveo - Modern Google Drive File Viewer

A beautiful, fast, and modern Google Drive file viewer built with React 18, Vite, and Tailwind CSS. Share your Google Drive files with anyone using simple links - no authentication required!

## ✨ Features

- 🔗 **Shared Link Viewer** - View Google Drive files without signing in
- 📱 **Mobile-First Design** - Beautiful responsive interface that works on all devices
- 🎨 **Modern UI/UX** - Built with Tailwind CSS for a polished, professional look
- ⚡ **Lightning Fast** - React 18 + Vite for optimal performance
- 🔍 **Smart File Display** - Grid and list views with file type icons
- 📁 **Folder Support** - Browse entire Google Drive folders
- 🖼️ **File Previews** - Preview images, videos, and documents
- 📥 **Easy Downloads** - Direct download links for all files
- 🌐 **No Authentication** - Simple link sharing for everyone

## 🏗️ Tech Stack

- **Frontend**: React 18 with Hooks
- **Build Tool**: Vite (faster than Create React App)
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React (beautiful, customizable icons)
- **Routing**: React Router v6
- **HTTP Client**: Axios for API calls
- **Development**: ESLint + Prettier

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/driveo-react.git
   cd driveo-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   - Visit `http://localhost:3000`
   - Start exploring the app!

## 📁 Project Structure

```
driveo-react/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── FileCard.jsx     # File display component
│   │   ├── Navbar.jsx       # Navigation bar
│   │   └── SharedLinkInput.jsx # Shared link input
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing page
│   │   ├── SharedViewer.jsx # Main file viewer
│   │   └── About.jsx        # About page
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Tailwind CSS + custom styles
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

## 🎯 How It Works

### 1. **Share Your Link**
   - Copy a shared link from Google Drive
   - Make sure it's set to "Anyone with the link can view"

### 2. **Paste & View**
   - Paste the link in our viewer
   - Instantly see your files and folders

### 3. **Browse & Download**
   - Preview files directly in the browser
   - Download files with a single click
   - Browse entire folder structures

## 🔧 Configuration

### Tailwind CSS Customization

The app uses a custom Tailwind configuration with:
- **Custom color palette** - Primary blues and grays
- **Custom animations** - Fade-in, slide-up, gentle bounce
- **Custom components** - Buttons, cards, inputs
- **Responsive design** - Mobile-first approach

### Custom CSS Components

```css
/* Button variants */
.btn-primary    /* Primary action buttons */
.btn-secondary  /* Secondary actions */
.btn-success    /* Success/positive actions */

/* Layout components */
.card           /* Card containers */
.input          /* Form inputs */
.loading-spinner /* Loading indicators */
```

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Breakpoints** - sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly** - Large touch targets and gestures
- **Progressive Enhancement** - Works without JavaScript

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository**
   - Push to GitHub/GitLab/Bitbucket
   - Connect to Netlify

2. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Deploy!**
   - Netlify will auto-detect Vite and build your app

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Other Platforms

- **GitHub Pages** - Use `gh-pages` package
- **Firebase Hosting** - Use Firebase CLI
- **AWS S3 + CloudFront** - Static hosting with CDN

## 🎨 Customization

### Colors

Modify `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color-here',
        // ... other shades
      }
    }
  }
}
```

### Components

All components are built with Tailwind utility classes and can be easily customized by modifying the className props.

### Icons

The app uses Lucide React icons. Replace any icon by importing a different one:

```javascript
import { Cloud, Folder, File } from 'lucide-react'
```

## 🔒 Privacy & Security

- **No Data Storage** - Files are accessed directly from Google Drive
- **No Authentication Required** - Simple link sharing
- **Client-Side Only** - All processing happens in the browser
- **HTTPS Required** - Secure connections for production

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Development Guidelines

- **Code Style** - Use ESLint and Prettier
- **Components** - Functional components with hooks
- **Styling** - Tailwind CSS utility classes
- **Testing** - Test all user interactions
- **Accessibility** - Follow WCAG guidelines

## 🐛 Troubleshooting

### Common Issues

1. **Build errors**
   - Clear `node_modules` and reinstall
   - Check Node.js version (16+ required)

2. **Styling issues**
   - Verify Tailwind CSS is properly configured
   - Check PostCSS configuration

3. **Development server not starting**
   - Check if port 3000 is available
   - Verify all dependencies are installed

### Getting Help

- **GitHub Issues** - Report bugs and request features
- **Discussions** - Ask questions and share ideas
- **Documentation** - Check the code comments

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Drive API** - For file access capabilities
- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vite Team** - For the fast build tool
- **Lucide** - For the beautiful icons

## 🌟 Star History

If you find this project useful, please consider giving it a ⭐️ on GitHub!

---

**🎉 Built with ❤️ and open source. Happy file sharing!** 