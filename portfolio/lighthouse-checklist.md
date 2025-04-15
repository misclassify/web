# Lighthouse Audit Checklist

## Performance

- [ ] **Optimize Images**
  - Compress all images using tools like Squoosh or TinyPNG
  - Use WebP format where possible
  - Implement lazy loading for below-the-fold images
  - Use appropriate image dimensions (avoid oversized images)

- [ ] **Font Optimization**
  - Preload critical fonts
  - Use font-display: swap
  - Consider using variable fonts
  - Limit font weights and styles

- [ ] **JavaScript Optimization**
  - Use code splitting
  - Defer non-critical JavaScript
  - Minimize unused JavaScript
  - Optimize third-party scripts

- [ ] **CSS Optimization**
  - Purge unused CSS
  - Inline critical CSS
  - Minimize render-blocking CSS

- [ ] **Caching**
  - Implement proper cache policies
  - Use Cache-Control headers
  - Consider using a CDN

## Accessibility

- [ ] **Semantic HTML**
  - Use appropriate heading hierarchy
  - Use semantic elements (nav, main, section, etc.)
  - Implement proper landmark regions

- [ ] **Keyboard Navigation**
  - Ensure all interactive elements are keyboard accessible
  - Implement proper focus management
  - Use tabindex appropriately

- [ ] **ARIA Attributes**
  - Use ARIA roles, states, and properties correctly
  - Implement ARIA labels where needed
  - Avoid redundant ARIA

- [ ] **Color Contrast**
  - Ensure text has sufficient contrast against backgrounds
  - Don't rely solely on color to convey information
  - Test with color blindness simulators

- [ ] **Text Alternatives**
  - Provide alt text for all images
  - Implement captions for videos
  - Provide transcripts for audio content

## Best Practices

- [ ] **HTTPS**
  - Ensure the site is served over HTTPS
  - Redirect HTTP to HTTPS

- [ ] **Browser Compatibility**
  - Test across major browsers
  - Implement appropriate polyfills

- [ ] **Error Handling**
  - Implement proper error boundaries
  - Provide user-friendly error messages

- [ ] **Responsive Design**
  - Test on various screen sizes
  - Implement appropriate viewport meta tag
  - Use responsive images

- [ ] **Security**
  - Implement Content Security Policy
  - Use rel="noopener" for external links
  - Avoid inline JavaScript where possible

## SEO

- [ ] **Metadata**
  - Implement proper title tags
  - Provide meta descriptions
  - Use canonical URLs

- [ ] **Structured Data**
  - Implement schema.org markup
  - Test with Google's Structured Data Testing Tool

- [ ] **Mobile Friendliness**
  - Ensure the site is mobile-friendly
  - Test with Google's Mobile-Friendly Test

- [ ] **Crawlability**
  - Implement a proper robots.txt
  - Create and submit a sitemap
  - Ensure proper internal linking

- [ ] **Page Speed**
  - Optimize Time to First Byte (TTFB)
  - Minimize Largest Contentful Paint (LCP)
  - Reduce Cumulative Layout Shift (CLS)

## PWA (Progressive Web App)

- [ ] **Service Worker**
  - Implement a service worker for offline support
  - Cache critical assets

- [ ] **Web App Manifest**
  - Create a proper manifest.json
  - Include appropriate icons
  - Set display mode and theme colors

- [ ] **Installability**
  - Ensure the app is installable
  - Implement an install prompt

- [ ] **Offline Support**
  - Provide offline fallback content
  - Cache critical resources

- [ ] **Push Notifications**
  - Implement push notifications (if applicable)
  - Request permission at appropriate times
\`\`\`

## 7. Let's create a robots.txt file for better SEO

```txt file="public/robots.txt"
# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://misclassify.dev/sitemap.xml

# Disallow specific paths
Disallow: /api/
Disallow: /_next/
Disallow: /404
