# Image Optimization Guide for Portfolio

## Tools for Image Optimization

1. **[Squoosh](https://squoosh.app/)**
   - Browser-based tool with excellent compression options
   - Supports modern formats like WebP
   - Visual comparison of before/after

2. **[TinyPNG](https://tinypng.com/)**
   - Simple drag-and-drop interface
   - Excellent for batch processing
   - Preserves transparency in PNGs

3. **[ImageOptim](https://imageoptim.com/)**
   - Desktop app for Mac
   - Batch processing with customizable settings
   - Removes metadata for smaller file sizes

## Recommended Image Formats

| Image Type | Recommended Format | Alternative |
|------------|-------------------|------------|
| Photos | WebP | JPEG |
| UI Screenshots | PNG | WebP |
| Icons | SVG | PNG |
| Logos | SVG | PNG |

## Size Guidelines

- **Profile Image**: 500x500px (will be displayed in a circle)
- **Project Screenshots**: 1200x675px (16:9 aspect ratio)
- **Testimonial Avatars**: 100x100px
- **Open Graph Image**: 1200x630px
- **Favicon**: Multiple sizes (16x16, 32x32, etc.)

## Next.js Image Component Best Practices

1. **Always use the Next.js Image component**
   \`\`\`jsx
   import Image from 'next/image'
   
   // For fixed size images
   <Image
     src="/path/to/image.jpg"
     alt="Descriptive alt text"
     width={400}
     height={300}
     quality={85}
   />
   
   // For responsive images that fill their container
   <div className="relative h-[300px]">
     <Image
       src="/path/to/image.jpg"
       alt="Descriptive alt text"
       fill
       className="object-cover"
     />
   </div>
   \`\`\`

2. **Use the `priority` prop for above-the-fold images**
   \`\`\`jsx
   <Image
     src="/hero-image.jpg"
     alt="Hero image"
     priority
     // other props
   />
   \`\`\`

3. **Use placeholder for large images**
   \`\`\`jsx
   <Image
     src="/large-image.jpg"
     alt="Large image"
     placeholder="blur"
     blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAAYADQMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAADBP/EAB4QAAICAgMBAQAAAAAAAAAAAAECAwQRAAUhMRIi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAZEQEAAwEBAAAAAAAAAAAAAAABAAIDESH/2gAMAwEAAhEDEQA/AJvS6/X0NbFdSs8lmQEfbqAgD4Ae+5OcgkjONNxqG1W5C8XyVZAjD9A4OCPfWKKxNTt2vxBDFI/CqP0o9A/OgmgXLbcYMbvUP//Z"
     // other props
   />
   \`\`\`

4. **Optimize for different screen sizes**
   \`\`\`jsx
   <Image
     src="/responsive-image.jpg"
     alt="Responsive image"
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
     // other props
   />
   \`\`\`

## File Size Targets

| Image Type | Target Size |
|------------|-------------|
| Hero/Featured Images | < 200KB |
| Thumbnails | < 50KB |
| Icons | < 10KB |
| Background Images | < 100KB |

## Checklist Before Deployment

- [ ] All images are compressed
- [ ] All images have descriptive alt text
- [ ] Above-the-fold images use the priority prop
- [ ] Large images use placeholder or blur-up technique
- [ ] Responsive images use appropriate sizes prop
- [ ] Total page weight is reasonable (< 1MB ideally)
- [ ] Images are served in modern formats (WebP where supported)
