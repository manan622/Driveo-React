# 🚀 Deployment Guide - Driveo React

This guide will help you deploy your React Google Drive File Viewer to various platforms.

## 📋 Prerequisites

- ✅ Node.js 16+ installed
- ✅ Git repository set up
- ✅ All dependencies installed (`npm install`)

## 🌐 Netlify (Recommended)

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial commit: React Google Drive File Viewer"
git push origin main
```

### 2. Deploy on Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### 3. Custom Domain (Optional)
- Go to Site Settings → Domain Management
- Add your custom domain
- Follow DNS configuration instructions

## ⚡ Vercel

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Deploy
```bash
vercel
```

### 3. Follow the prompts
- Link to existing project or create new
- Choose team/account
- Deploy!

## 🔥 Firebase Hosting

### 1. Install Firebase CLI
```bash
npm i -g firebase-tools
```

### 2. Login and Initialize
```bash
firebase login
firebase init hosting
```

### 3. Configure
- Public directory: `dist`
- Single-page app: `Yes`
- Build command: `npm run build`

### 4. Deploy
```bash
firebase deploy
```

## 📱 GitHub Pages

### 1. Install gh-pages
```bash
npm install --save-dev gh-pages
```

### 2. Add Scripts to package.json
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. Deploy
```bash
npm run deploy
```

## 🐳 Docker

### 1. Create Dockerfile
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 2. Build and Run
```bash
docker build -t driveo-react .
docker run -p 80:80 driveo-react
```

## ☁️ Cloud Platforms

### AWS S3 + CloudFront
1. Build: `npm run build`
2. Upload `dist/` folder to S3 bucket
3. Configure CloudFront distribution
4. Set origin to S3 bucket

### Google Cloud Storage
1. Build: `npm run build`
2. Create bucket and upload `dist/` folder
3. Make bucket public
4. Configure load balancer (optional)

### Azure Static Web Apps
1. Push to GitHub
2. Connect Azure Static Web Apps
3. Configure build settings
4. Auto-deploy on push

## 🔧 Environment Variables

For production, you may want to set:

```bash
NODE_ENV=production
VITE_APP_TITLE=Driveo
VITE_APP_DESCRIPTION=Google Drive File Viewer
```

## 📊 Performance Optimization

### 1. Build Optimization
```bash
npm run build
```

### 2. Analyze Bundle
```bash
npm install --save-dev vite-bundle-analyzer
```

### 3. Enable Compression
- Enable gzip/brotli compression on your hosting platform
- Use CDN for global distribution

## 🚀 Post-Deployment

### 1. Test Your App
- Check all pages load correctly
- Test file viewing functionality
- Verify mobile responsiveness

### 2. Monitor Performance
- Use Lighthouse for performance audit
- Monitor Core Web Vitals
- Check for console errors

### 3. Set Up Analytics
- Google Analytics
- Vercel Analytics
- Netlify Analytics

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues
- Check build logs
- Verify build command and output directory
- Ensure all dependencies are in package.json

### Performance Issues
- Enable compression
- Use CDN
- Optimize images
- Enable caching

## 🎯 Success Checklist

- ✅ App builds successfully
- ✅ All pages load correctly
- ✅ File viewing works
- ✅ Mobile responsive
- ✅ Performance optimized
- ✅ Analytics configured
- ✅ Custom domain set (if desired)

---

**🎉 Your Driveo React app is now deployed and ready to use!**
