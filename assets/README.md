# MLB Analytics Hub - Assets Directory

This directory contains all media assets for the MLB Analytics Hub website.

## Image Assets Needed

The website uses fallback URLs from Unsplash and UI Avatars, but you can replace them with your own images by adding files to this directory with the following names:

### Required Images:

1. **baseball-stadium.jpg** - Main stadium image for About section (recommended: 800x600px)
2. **player1.jpg** - Gallery image 1 (recommended: 600x400px)
3. **player2.jpg** - Gallery image 2 (recommended: 600x400px)
4. **player3.jpg** - Gallery image 3 (recommended: 600x400px)
5. **player4.jpg** - Gallery image 4 (recommended: 600x400px)
6. **avatar1.jpg** - Player avatar 1 (recommended: 80x80px)
7. **avatar2.jpg** - Player avatar 2 (recommended: 80x80px)
8. **avatar3.jpg** - Player avatar 3 (recommended: 80x80px)

## Current Setup

The website currently uses:
- **Fallback images**: High-quality baseball images from Unsplash
- **Fallback avatars**: Generated avatars from UI Avatars API
- **Videos**: Embedded YouTube videos for highlights and moments

## How to Add Your Own Images

1. Place your images in this `assets/` directory with the exact filenames listed above
2. The website will automatically use your images instead of the fallback URLs
3. Ensure images are optimized for web (compressed, appropriate dimensions)

## Recommended Image Sources

If you need stock baseball images:
- **Unsplash**: https://unsplash.com/s/photos/baseball
- **Pexels**: https://www.pexels.com/search/baseball/
- **Pixabay**: https://pixabay.com/images/search/baseball/

## Video Integration

The website includes embedded YouTube videos. Current video IDs can be replaced in the HTML files:
- Home page hero video
- Leaders page highlights
- Stats analysis videos

To replace videos, edit the `src` attribute in the `<iframe>` tags in the respective HTML files.

## Image Optimization Tips

- Use JPEG for photos (smaller file size)
- Use PNG for graphics with transparency
- Compress images before uploading (use tools like TinyPNG or ImageOptim)
- Recommended max file size: 500KB per image
- Use descriptive alt text for accessibility

## License

Ensure all images used have appropriate licenses for your use case. The current Unsplash fallback images are free to use under the Unsplash License.
