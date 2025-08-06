#!/bin/bash

echo "🎂 Building Jass Baker's Website for Static Deployment..."

# Clean previous build
rm -rf dist-static

# Build the frontend only
npx vite build --outDir dist-static

# Copy additional files that might be needed
cp -r client/public/* dist-static/ 2>/dev/null || true

echo "✅ Static build complete! Files are in 'dist-static' folder"
echo "📁 Upload the 'dist-static' folder to your hosting platform"

# Show file sizes
echo "📊 Build size:"
du -sh dist-static

echo ""
echo "🚀 Ready for deployment to:"
echo "   • Vercel: Connect GitHub repository"
echo "   • Netlify: Drag 'dist-static' folder"
echo "   • Render: Connect GitHub repository"