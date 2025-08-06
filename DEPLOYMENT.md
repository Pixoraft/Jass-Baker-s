# Jass Baker's Website Deployment Guide

## Recommended Hosting Platforms

### 1. Vercel (Best for React) ⭐ RECOMMENDED
- **Cost**: Free for personal use
- **Benefits**: Built for React, instant deployments, global CDN
- **Steps**:
  1. Push your code to GitHub
  2. Go to [vercel.com](https://vercel.com)
  3. Sign up with GitHub
  4. Click "New Project" and import your repository
  5. Vercel will auto-detect Vite and deploy

### 2. Netlify (Great Alternative)
- **Cost**: Free tier available
- **Benefits**: Easy drag-and-drop deployment
- **Steps**:
  1. Build locally: `npm run build:static`
  2. Go to [netlify.com](https://netlify.com)
  3. Drag the `dist` folder to their deploy area
  4. OR connect your GitHub repository

### 3. Render (Good for Full-Stack)
- **Cost**: Free for static sites
- **Benefits**: Good Heroku alternative
- **Steps**:
  1. Push code to GitHub
  2. Go to [render.com](https://render.com)
  3. Create new Static Site
  4. Connect your repository

## Deployment Steps

### Option A: GitHub + Auto-Deploy (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Jass Baker's website"
   git branch -M main
   git remote add origin https://github.com/yourusername/jass-bakers.git
   git push -u origin main
   ```

2. **Connect to hosting platform** (choose one above)

### Option B: Manual Build & Upload

1. **Build the project**:
   ```bash
   npm run build:static
   ```

2. **Upload the `dist` folder** to your chosen platform

## Custom Domain Setup

After deployment, you can add your custom domain:
- **jassbakers.com** or **www.jassbakers.com**
- Most platforms offer free SSL certificates
- Update DNS records to point to your hosting platform

## Environment Setup

Since your site uses WhatsApp links and is static, no environment variables are needed!

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All images display properly
- [ ] WhatsApp links work on mobile
- [ ] Phone links work
- [ ] Navigation smooth scrolling works
- [ ] Contact form sends to WhatsApp
- [ ] Google Maps loads correctly
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (should be automatic)

## Estimated Costs

- **Vercel/Netlify**: FREE for your needs
- **Custom Domain**: $10-15/year (optional)
- **Total Monthly Cost**: $0 (FREE!)

## Next Steps

1. Choose your preferred platform
2. Follow the deployment steps above
3. Test your live website
4. Configure custom domain (optional)

Your bakery website is ready to go live! 🎂