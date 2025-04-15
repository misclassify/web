# Image Styling Guide for Portfolio

## Favicon Set

Create a complete favicon set for cross-platform support:

1. **Base Icon Design**:
   - Create a simple, recognizable icon that works at small sizes
   - Use your brand colors (Discord blurple #5865F2 and Minecraft green #57C258)
   - Consider using a stylized "M" or a simple block/cube icon that represents both Minecraft and Discord

2. **Required Files**:
   - `favicon.ico` - 16x16, 32x32, 48x48 (multi-size ICO file)
   - `favicon-16x16.png` - 16x16
   - `favicon-32x32.png` - 32x32
   - `apple-touch-icon.png` - 180x180
   - `android-chrome-192x192.png` - 192x192
   - `android-chrome-512x512.png` - 512x512
   - `safari-pinned-tab.svg` - SVG format, single color

3. **Tools**:
   - Use [Favicon.io](https://favicon.io/) or [RealFaviconGenerator](https://realfavicongenerator.net/) to create the complete set

## Profile Image

1. **Style**:
   - Professional headshot or avatar
   - Clean background (solid color or subtle texture)
   - Good lighting with your face clearly visible
   - Alternatively, a professional avatar that represents you

2. **Specifications**:
   - Dimensions: 500x500px minimum (square aspect ratio)
   - Format: PNG with transparency preferred
   - Resolution: 72dpi for web

3. **Placement**:
   - Will be displayed in a circular crop, so ensure important elements are centered

## Project Screenshots

1. **Style Consistency**:
   - Use consistent aspect ratios (16:9 recommended)
   - Apply subtle branding elements (like a small watermark)
   - Consider adding a frame or device mockup for context

2. **Content**:
   - Show the most visually appealing aspects of your projects
   - Include UI elements that demonstrate functionality
   - For Minecraft mods: in-game screenshots showing the mod in action
   - For Discord bots: command interfaces or dashboard views

3. **Specifications**:
   - Dimensions: 1200x675px (16:9 aspect ratio)
   - Format: PNG or JPG (PNG preferred for UI screenshots)
   - Compression: Optimize for web without visible quality loss

4. **Naming Convention**:
   - Use the project ID in the filename (e.g., `minecraft-mod.png`)
   - Store in the `/public/projects/` directory

## Testimonial Avatars

1. **Style**:
   - Consistent circular crops
   - Similar lighting and style
   - Professional appearance

2. **Specifications**:
   - Dimensions: 100x100px
   - Format: PNG with transparency
   - Store in the `/public/avatars/` directory

## Open Graph Image

1. **Purpose**:
   - Creates a professional preview when your site is shared on social media

2. **Design Elements**:
   - Include your name/logo prominently
   - Add a tagline: "Minecraft & Discord Developer"
   - Use brand colors
   - Include visual elements that represent your work

3. **Specifications**:
   - Dimensions: 1200x630px
   - Format: PNG or JPG
   - Text should be large enough to read at small sizes
   - Store as `/public/og-image.png`

## Image Optimization

Before uploading any images:

1. **Compression**:
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images
   - Aim for file sizes under 200KB for most images

2. **Modern Formats**:
   - Consider using WebP format with PNG fallbacks for better performance
   - Next.js Image component will help with format optimization

3. **Lazy Loading**:
   - Already implemented in the portfolio with Next.js Image component
\`\`\`

## 4. Let's create a deployment checklist
