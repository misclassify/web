# Deployment Guide for Misclassify Portfolio

## Vercel Deployment

### 1. Connect to GitHub

1. Push your repository to GitHub
2. Log in to [Vercel](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Configure project settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `next build`
   - Output Directory: .next

### 2. Environment Variables

Set up the following environment variables in Vercel:

\`\`\`bash
# Analytics (if using Google Analytics)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# API Keys (if needed for future integrations)
# API_KEY=your_api_key

# Custom Domain
NEXT_PUBLIC_SITE_URL=https://misclassify.dev
\`\`\`

### 3. Domain Setup

1. Go to "Settings" > "Domains"
2. Add your custom domain: `misclassify.dev`
3. Follow Vercel's instructions to configure DNS settings
4. Ensure HTTPS is enabled

### 4. Continuous Deployment

Vercel automatically deploys when you push to your main branch. To customize:

1. Go to "Settings" > "Git"
2. Configure Production Branch (default: main)
3. Set up Preview Branches for testing changes

## Performance Optimization

### 1. Enable Vercel Edge Functions

For faster global performance:

1. Go to "Settings" > "Functions"
2. Enable Edge Functions

### 2. Enable Vercel Analytics

1. Go to "Settings" > "Analytics"
2. Enable Vercel Analytics
3. Optionally connect Google Analytics

### 3. Enable Image Optimization

1. Go to "Settings" > "Image Optimization"
2. Ensure it's enabled for automatic WebP conversion and resizing

## Monitoring

### 1. Set Up Status Alerts

1. Go to "Settings" > "Monitoring"
2. Configure uptime monitoring
3. Set up alert recipients

### 2. Performance Monitoring

1. Go to "Analytics" > "Web Vitals"
2. Monitor Core Web Vitals performance
3. Set up alerts for performance regressions

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test responsive design on multiple devices
- [ ] Check all links and navigation
- [ ] Verify forms submit correctly
- [ ] Test dark/light mode toggle
- [ ] Run Lighthouse audit
- [ ] Check analytics is recording data
- [ ] Verify meta tags with social media debuggers:
  - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Scaling and Future Enhancements

### Content Management

Consider integrating a headless CMS for easier content updates:
- [Contentful](https://www.contentful.com/)
- [Sanity](https://www.sanity.io/)
- [Strapi](https://strapi.io/)

### Authentication

If adding user authentication in the future:
- [NextAuth.js](https://next-auth.js.org/)
- [Clerk](https://clerk.dev/)
- [Auth0](https://auth0.com/)

### Database Integration

For dynamic content or user data:
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Supabase](https://supabase.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)

## Troubleshooting Common Issues

### Build Failures

1. Check build logs in Vercel dashboard
2. Verify dependencies are correctly installed
3. Test build locally with `npm run build`

### Performance Issues

1. Check image sizes and formats
2. Verify third-party scripts are optimized
3. Review Lighthouse recommendations

### Domain Configuration

1. Verify DNS settings are correct
2. Check for SSL certificate issues
3. Ensure redirects are properly configured
